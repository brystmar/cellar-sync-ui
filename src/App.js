import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PicklistValuesContainer from './components/PicklistValuesContainer';
import BeverageDataTable from './components/BeverageDataTable';
import PageTitle from './components/PageTitle';

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
            .then(result => {
                this.setState({
                    picklistData: result.data
                })
            })
            .catch(error => console.log("Error retrieving picklist data:", error));
    }

    updateBeverageList(beverage, isNew = false) {
        let newState = this.state.beerList;

        if (!isNew) {
            console.log(newState);
            // When updating an item, first remove the original beverage from the overall list
            console.log("Deleting beer_id:" + beverage.beer_id);
            delete newState[beverage.beer_id]
            console.log(newState);
        }

        newState.push(beverage);

        this.setState({
            beerList: newState
        })
    }

    render() {
        const userName = "Barks & RAK";

        return (
            <div className="app-container">
                <Header userName={userName}/>
                <div className="content-container">
                    <Switch>
                        <Route exact path="/">
                            <PageTitle title={userName + "'s Cellar"}/>
                            <BeverageDataTable beerList={this.state.beerList}
                                               updateBeverageList={this.updateBeverageList}/>
                        </Route>
                        <Route path="/picklists">
                            <PageTitle title={"Picklist Values"}/>
                            <PicklistValuesContainer data={this.state.picklistData}/>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
