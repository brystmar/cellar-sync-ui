import React from 'react';
import Form from 'react-bootstrap/Form';
import './list_item_elements/styles/list_items.css';
import ActionButtons from './list_item_elements/ActionButtons';
import AttrLocation from './list_item_elements/AttrLocation';
import AttrQty from './list_item_elements/AttrQty';
import AttrBatch from './list_item_elements/AttrBatch';
import AttrYear from './list_item_elements/AttrYear';
import AttrBottleDate from './list_item_elements/AttrBottleDate';
import AttrSize from './list_item_elements/AttrSize';
import AttrStyle from './list_item_elements/AttrStyle';
import AttrTrade from './list_item_elements/AttrTrade';
import AttrTradeValue from './list_item_elements/AttrTradeValue';
import AttrAgingPotential from './list_item_elements/AttrAgingPotential';
import AttrUntappd from './list_item_elements/AttrUntappd';
import AttrNote from './list_item_elements/AttrNote';
import parse_picklists from '../functions/parse_picklists';

class ListItemTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign(this.props.data, {
            editMode: false,
            validated: false,
            originalData: ""
        });

        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.updateBeverageState = this.updateBeverageState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetBeverageData = this.resetBeverageData.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Store the initial state of this beverage once its data arrives
        if (prevProps.data.beer_id !== this.props.beer_id
            && this.state.originalData === "") {
            this.setState({
                originalData: this.props.data
            })
            console.log("Storing originalData:")
            console.log(this.props.data)
        }
    }

    toggleEditMode(enabled = NaN) {
        if (isNaN(enabled)) {
            this.setState({
                editMode: !this.state.editMode
            })
        } else {
            this.setState({
                editMode: enabled
            })
        }
    }

    updateBeverageState(newData) {
        // Update local state when values change on a child attribute
        this.setState(newData)
        console.log("Updated " + JSON.stringify(newData));
    }

    resetBeverageData() {
        // Reset the data for this list item to its original values
        // console.log("Resetting data to:")
        // console.log(JSON.stringify(this.state.originalData));
        // console.log("Orig props:");
        // console.log(JSON.stringify(this.props.data));
        this.setState(Object.assign(this.state.originalData));
    }

    handleSubmit() {
        console.log("Clicked Save!")

        // Organize the updated data object
        let beverageData = this.state;
        delete beverageData['editMode'];
        delete beverageData['validated'];
        delete beverageData['originalData'];

        // Update the item in the db
        console.log("Calling PUT: `" + process.env.REACT_APP_BACKEND_URL + "/api/v1/cellar/" + this.state.beer_id + "`");
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/cellar/" + this.state.beer_id, {
            method: "PUT",
            body: JSON.stringify(beverageData)
        })
            .then(response => {
                console.log("PUT complete, response:", response.status, response.ok);
                return response.json();
            })
            .then(result => {
                console.log("Updated this beverage:", result.data);
                // Reset buttons to their default state
                this.toggleEditMode(false);

                // Update state of the parent component using the provided function
                this.props.updateBeverageList(result.data);
            })
            .catch(error => console.log("Error retrieving beer list data:", error));
    }

    render() {
        return (
            <Form className="expanded-list-item"
                  onSubmit={this.handleSubmit}
                  validated={this.state.validated}>
                <AttrQty
                    qty={this.state.qty}
                    qty_cold={this.state.qty_cold}
                    updateBeverageState={this.updateBeverageState}/>

                <AttrTrade
                    for_trade={this.state.for_trade}
                    updateBeverageState={this.updateBeverageState}/>

                <AttrTradeValue
                    trade_value={this.state.trade_value ? this.state.trade_value : 2}
                    updateBeverageState={this.updateBeverageState}/>

                {/*TODO: Replace parse_picklists with an arrow function*/}
                <AttrStyle
                    style={this.state.style}
                    specific_style={this.state.specific_style}
                    picklistData={parse_picklists(this.props.picklistData, "style")}
                    updateBeverageState={this.updateBeverageState}/>

                <AttrAgingPotential
                    aging_potential={this.state.aging_potential ? this.state.aging_potential : 2}
                    updateBeverageState={this.updateBeverageState}/>

                <AttrNote
                    note={this.state.note ? this.state.note : ""}
                    updateBeverageState={this.updateBeverageState}/>

                <AttrUntappd
                    untappd={this.state.untappd ? this.state.untappd : ""}
                    updateBeverageState={this.updateBeverageState}/>

                <AttrBatch
                    batch={this.state.batch ? this.state.batch : ""}
                    updateBeverageState={this.updateBeverageState}/>

                {/*TODO: Replace parse_picklists with an arrow function*/}
                <AttrLocation
                    location={this.state.location}
                    picklistData={parse_picklists(this.props.picklistData, "location")}
                    updateBeverageState={this.updateBeverageState}/>

                <AttrSize
                    size={this.state.size}
                    picklistData={parse_picklists(this.props.picklistData, "size")}
                    updateBeverageState={this.updateBeverageState}/>

                <AttrYear
                    year={this.state.year}
                    updateBeverageState={this.updateBeverageState}/>

                <AttrBottleDate
                    bottle_date={this.state.bottle_date ? this.state.bottle_date : ""}
                    updateBeverageState={this.updateBeverageState}/>

                <ActionButtons
                    editMode={this.state.editMode}
                    toggleEditMode={this.toggleEditMode}
                    resetBeverageData={this.resetBeverageData}
                    handleSubmit={this.handleSubmit}/>
            </Form>
        )
    }
}

ListItemTemplate.defaultProps = {
    data: {
        beer_id: "",
        name: "",
        brewery: "",
        year: 0,
        batch: 0,
        size: "",
        bottle_date: "",
        location: "",
        style: "",
        specific_style: "",
        qty: 0,
        qty_cold: 0,
        untappd: "",
        aging_potential: "",
        trade_value: "",
        for_trade: false,
        note: "",
        date_added: 0,
        last_modified: 0
    },
    picklistData: []
}

export default ListItemTemplate;
