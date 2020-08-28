import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import PicklistValuesContainer from './components/PicklistValuesContainer';
import BeverageDataTable from './components/BeverageDataTable';
import PageTitle from './components/PageTitle';
import Footer from './components/Footer';
import AddBeverage from './components/AddBeverage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global_sass_variables.sass';
import './styles/autocomplete.sass';
import './styles/grid-templates.css';
import './styles/list_items.sass';
import './styles/picklists.sass';
import './styles/styles.sass';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            beverageList: [],
            picklistData: [],
            dtKey: 1
        }
        this.getAllBeverages = this.getAllBeverages.bind(this);
        this.updateBeverageList = this.updateBeverageList.bind(this);
        this.deleteBeverage = this.deleteBeverage.bind(this);
        this.deleteBeverageFromState = this.deleteBeverageFromState.bind(this);
    }

    componentDidMount() {
        this.getAllBeverages();
        console.log("Cache is overrated.");
    }

    getAllBeverages() {
        // Retrieve the list of beverages from the backend
        console.log("Retrieving BevList from", process.env.REACT_APP_BACKEND_URL + "/api/v1/cellar");
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/cellar")
            .then(response => response.json())
            .then(result => {
                console.log("BevList response:", result.data)
                this.setState({beverageList: result.data})
            })
            .catch(error => console.log("Error retrieving beverage list data:", error));

        // Retrieve all picklist values from the backend
        console.log("Retrieving picklists from", process.env.REACT_APP_BACKEND_URL + "/api/v1/picklist-data");
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/picklist-data")
            .then(response => response.json())
            .then(result => {
                console.log("Picklist response:", result.data)
                this.setState({picklistData: result.data})
            })
            .catch(error => console.log("Error retrieving picklist data:", error));
    }

    updateBeverageList(beverage, isNew = false) {
        console.log("Called updateBeverageList, isNew=" + isNew, "| Current bevList:", this.state.beverageList);
        let newList = this.state.beverageList;

        if (!isNew) {
            // When updating an item, first remove the original beverage from the overall list
            delete newList[beverage.beverage_id]
        }

        newList.push(beverage);

        // TODO: Make the data table refresh based on deep comparison of beverageList so I can remove my crappy dtKey hack
        this.setState({
            beverageList: newList,
            dtKey: Math.random()
        })
    }

    updatePicklist(picklistName = "", newPicklistData) {
        console.log("Called updatePicklist for", picklistName, newPicklistData);

        // Re-assemble the picklist object with the modified field

        // Update state with the new picklist object
        // this.setState({
        //     picklistData: newPicklistData
        // })
    }

    deleteBeverage(beverageId, beverageLocation) {
        console.log("Called deleteBeverage(" + beverageId + ", " + beverageLocation + ").");
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/cellar/" + beverageId
            + "/" + beverageLocation, {
            method: "DELETE"
        })
            .then(response => {
                if (response.ok) {
                    this.deleteBeverageFromState(beverageId)
                    // console.log("Delete successful");
                } else {
                    console.log("Delete failed, details:", response.body);
                    return Promise.reject(response.statusText)
                }
            })
            .catch(error => console.log("Delete failed:", error));
    }

    deleteBeverageFromState(beverageId) {
        // Remove from local state
        let newList = this.state.beverageList.filter((bev) => bev.beverage_id !== beverageId);

        this.setState({
            beverageList: newList,
            dtKey: Math.random()
        });
    }

    // TODO: Support multiple users

    render() {
        const userName = "Barks & RAK";
        const cellarLogo = <img src="./icons/cellar-logo.jpg" alt="Cellar Logo"/>
        // console.log(this.state.picklistData)

        return (
            <div className="app-container">
                <Header/>
                <div className="content-container">
                    <Switch>
                        <Route exact path="/">
                            <PageTitle title={userName} logo={cellarLogo}/>
                            <BeverageDataTable beverageList={this.state.beverageList}
                                               picklistData={this.state.picklistData}
                                               dtKey={this.state.dtKey}
                                               deleteBeverage={this.deleteBeverage}
                                               updateBeverageList={this.updateBeverageList}/>
                            <AddBeverage beverageList={this.state.beverageList}
                                         picklistData={this.state.picklistData}
                                         updateBeverageList={this.updateBeverageList}/>
                        </Route>
                        <Route path="/picklists">
                            <PageTitle title={"Picklist Values"} includeHr={false}/>
                            <PicklistValuesContainer data={this.state.picklistData}
                                                     updatePicklist={this.updatePicklist}/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
