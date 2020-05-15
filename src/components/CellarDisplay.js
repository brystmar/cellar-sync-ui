import React from 'react';
import BeerDataTable from './BeerDataTable';


class CellarDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beerList: [],
            editMode: false
        }
        this.getAllBeers = this.getAllBeers.bind(this);
    }

    componentDidMount() {
        this.getAllBeers();
    }

    getAllBeers() {
        // Retrieve the list of beers from the backend
        console.log("Calling the backend...")
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/cellar")
            .then(response => response.json())
            .then(result => this.setState({beerList: result.data}))
            .catch(error => console.log("Error retrieving beer list data:", error));
    }

    render() {
        return (
            <div className="beer-table-container">
                <h1>Beer List</h1>
                <BeerDataTable beerList={this.state.beerList}/>
            </div>
        )
    }
}

export default CellarDisplay;
