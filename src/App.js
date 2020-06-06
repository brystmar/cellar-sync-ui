import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PicklistValuesContainer from './components/PicklistValuesContainer';
import BeverageDataTable from './components/BeverageDataTable';
import PageTitle from './components/PageTitle';
import Footer from './components/Footer';
import AddBeverage from './components/AddBeverage';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            beverageList: []
        }

        this.getAllBeverages = this.getAllBeverages.bind(this);
        this.updateBeverageList = this.updateBeverageList.bind(this);
    }

    componentDidMount() {
        this.getAllBeverages();
    }

    getAllBeverages() {
        // Retrieve the list of beverages from the backend
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/cellar")
            .then(response => response.json())
            .then(result => this.setState({beverageList: result.data}))
            .catch(error => console.log("Error retrieving beverage list data:", error));

        // Retrieve all picklist values from the backend
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/picklist-data")
            .then(response => response.json())
            .then(result => this.setState({picklistData: result.data}))
            .catch(error => console.log("Error retrieving picklist data:", error));
    }

    updateBeverageList(beverage, isNew = false) {
        console.log(this.state.beverageList);
        let newState = this.state.beverageList;

        if (!isNew) {
            // When updating an item, first remove the original beverage from the overall list
            delete newState[beverage.beverage_id]
        }

        // Add the new beverage
        newState.push(beverage);
        console.log("Added new beverage: " + JSON.stringify(beverage));
        console.log(newState);

        this.setState({
            beverageList: newState
        })
    }

    render() {
        const userName = "Barks & RAK";
        const cellarLogo = <img src="./icons/cellar-logo.jpg" alt="Cellar Logo"/>
        // console.log(this.state.picklistData)

        return (
            <div className="app-container">
                <Header userName={userName}/>
                <div className="content-container">
                    <Switch>
                        <Route exact path="/">
                            <PageTitle title={userName} logo={cellarLogo}/>
                            <BeverageDataTable beverageList={this.state.beverageList}
                                               picklistData={this.state.picklistData}
                                               updateBeverageList={this.updateBeverageList}/>
                            <AddBeverage beverageList={this.state.beverageList}
                                         picklistData={this.state.picklistData}
                                         updateBeverageList={this.updateBeverageList}/>
                        </Route>
                        <Route path="/picklists">
                            <PageTitle title={"Picklist Values"}/>
                            <PicklistValuesContainer data={this.state.picklistData}/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
