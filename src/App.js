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
            beerList: []
        }

        this.getAllBeers = this.getAllBeers.bind(this);
        this.updateBeverageList = this.updateBeverageList.bind(this);
    }

    componentDidMount() {
        this.getAllBeers();
    }

    getAllBeers() {
        // Retrieve the list of beverages from the backend
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/cellar")
            .then(response => response.json())
            .then(result => this.setState({beerList: result.data}))
            .catch(error => console.log("Error retrieving beer list data:", error));

        // Retrieve all picklist values from the backend
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/picklist-data")
            .then(response => response.json())
            .then(result => this.setState({picklistData: result.data}))
            .catch(error => console.log("Error retrieving picklist data:", error));
    }

    updateBeverageList(beverage, isNew = false) {
        console.log(this.state.beerList);
        let newState = this.state.beerList;

        if (!isNew) {
            // When updating an item, first remove the original beverage from the overall list
            delete newState[beverage.beer_id]
        }

        // Add the new beverage
        newState.push(beverage);
        console.log("Added new beer: " + JSON.stringify(beverage));
        console.log(newState);

        this.setState({
            beerList: newState
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
                            <BeverageDataTable beerList={this.state.beerList}
                                               picklistData={this.state.picklistData}
                                               updateBeverageList={this.updateBeverageList}/>
                            <AddBeverage beerList={this.state.beerList}
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
