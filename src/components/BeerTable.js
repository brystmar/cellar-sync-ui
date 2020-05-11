import React from 'react';
import BeerListItem from './BeerListItem';
import {MDBDataTable} from 'mdbreact';

class BeerTable extends React.Component {
    constructor() {
        super();
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
        let beers = this.state.beerList.map(
            beer => <BeerListItem beer_id={beer.beer_id}
                                  name={beer.name}
                                  brewery={beer.brewery}
                                  year={beer.year}
                                  batch={beer.batch}
                                  size={beer.size}
                                  bottleDate={beer.bottle_date}
                                  location={beer.location}
                                  style={beer.style}
                                  specificStyle={beer.specific_style}
                                  qty={beer.qty}
                                  untappd={beer.untappd}
                                  agingPotential={beer.aging_potential}
                                  tradeValue={beer.trade_value}
                                  forTrade={beer.for_trade}
                                  dateAdded={beer.date_added}
                                  lastModified={beer.last_modified}
                                  note={beer.note}/>
        )
        return (
            <div className="beer-table-container">
                <h1>Beer List</h1>
                <br/>
                {beers}
            </div>
        )
    }
}

export default BeerTable;
