import React from 'react';
import ActionButtons from './list_item_elements/ActionButtons';
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
        this.state = {
            beverage_id: this.props.data.beverage_id,
            name: this.props.data.name,
            producer: this.props.data.producer,
            size: this.props.data.size,
            location: this.props.data.location,
            batch: this.props.data.batch ? this.props.data.batch : "",
            bottle_date: this.props.data.bottle_date ? this.props.data.bottle_date : "",
            qty: this.props.data.qty ? this.props.data.qty : 0,
            qty_cold: this.props.data.qty_cold ? this.props.data.qty_cold : 0,
            style: this.props.data.style ? this.props.data.style : "",
            specific_style: this.props.data.specific_style ? this.props.data.specific_style : "",
            for_trade: this.props.data.for_trade,
            trade_value: this.props.data.trade_value ? this.props.data.trade_value : "",
            aging_potential: this.props.data.aging_potential ? this.props.data.aging_potential : "",
            untappd: this.props.data.untappd ? this.props.data.untappd : "",
            note: this.props.data.note ? this.props.data.note : "",
            editMode: false,
            validated: false,
            originalData: "",
            formId: 0
        };

        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.updateBeverageState = this.updateBeverageState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetBeverageData = this.resetBeverageData.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Store the initial state of this beverage once its data arrives,
        //   so the user can easily discard changes and reset to this state.
        if (this.state.originalData === "" && this.props.data.beverage_id.length > 0) {
            this.setState({
                originalData: this.props.data
            })
            // console.log("Saving oD:", this.props.data)
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
        // Reset the data for this list item to its initial state
        console.log("Resetting the ListItemTemplate");
        this.setState(Object.assign(this.props.data, {editMode: false}));
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
            editMode: true
        })
    }

    handleSubmit(event) {
        console.log("Clicked Save")
        event.preventDefault();

        // Organize the updated data object
        let beverageData = {
            beverage_id: this.props.data.beverage_id,
            name: this.props.data.name,
            producer: this.props.data.producer,
            size: this.props.data.size,
            location: this.props.data.location,
            batch: this.state.batch ? this.state.batch : "",
            bottle_date: this.state.bottle_date ? this.state.bottle_date : "",
            qty: this.state.qty,
            qty_cold: this.state.qty_cold,
            style: this.state.style ? this.state.style : "",
            specific_style: this.state.specific_style ? this.state.specific_style : "",
            untappd: this.state.untappd ? this.state.untappd : "",
            aging_potential: this.state.aging_potential ? this.state.aging_potential : "",
            trade_value: this.state.trade_value ? this.state.trade_value : "",
            for_trade: this.state.for_trade,
            note: this.state.note ? this.state.note : ""
        }

        // Update the item in the db
        console.log("Calling PUT:", process.env.REACT_APP_BACKEND_URL + "/api/v1/cellar/" + this.state.beverage_id
            + "/" + this.state.location, " for beverage:");
        console.log(JSON.stringify(beverageData));
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/cellar/" + this.state.beverage_id
            + "/" + this.state.location, {
            method: "PUT",
            body: JSON.stringify(beverageData)
        })
            .then(response => response.json())
            .then(result => {
                console.log("Updated this beverage:", result.data);
                // Reset buttons to their default state
                this.toggleEditMode(false);

                // Update state of the parent component using the provided function
                this.props.updateBeverageList(result.data);
            })
            .catch(error => console.log("Error retrieving beverage list data:", error));
    }

    render() {
        return (
            <form className="list-item-grid list-item-form"
                  onSubmit={this.handleSubmit}>

                <span className="input-styles-container grid-cell flex-to-row">
                    {/*TODO: Replace parse_picklists with an arrow function*/}
                    <AttrStyle
                        style={this.state.style}
                        specific_style={this.state.specific_style}
                        picklistData={parse_picklists(this.props.picklistData, "style")}
                        handleChange={this.handleChange}
                        updateBeverageState={this.updateBeverageState}/>
                </span>

                <span className="input-clickable-toggles-container grid-cell">
                    <AttrTrade
                        for_trade={this.state.for_trade}
                        handleChange={this.handleChange}
                        updateBeverageState={this.updateBeverageState}/>

                    <AttrTradeValue
                        trade_value={this.state.trade_value ? this.state.trade_value : 2}
                        handleChange={this.handleChange}
                        updateBeverageState={this.updateBeverageState}/>

                    <AttrAgingPotential
                        aging_potential={this.state.aging_potential ? this.state.aging_potential : 2}
                        handleChange={this.handleChange}
                        updateBeverageState={this.updateBeverageState}/>
                </span>

                <span className="input-longtext-container grid-cell">
                    <AttrUntappd
                        untappd={this.state.untappd ? this.state.untappd : ""}
                        handleChange={this.handleChange}/>

                    <AttrNote
                        note={this.state.note ? this.state.note : ""}
                        handleChange={this.handleChange}/>
                </span>

                {/*TODO: Replace parse_picklists with an arrow function*/}
                <span className="button-container eli-buttons">
                    <ActionButtons
                        editMode={this.state.editMode}
                        toggleEditMode={this.toggleEditMode}
                        resetBeverageData={this.resetBeverageData}
                        handleSubmit={this.handleSubmit}/>
                </span>

                <span className="button-container del-button">
                    <button type="button"
                            className="btn btn-danger btn-del"
                            onClick={() => this.props.deleteBeverage(this.state.beverage_id,
                                this.state.location)}>Delete
                    </button>
                </span>
            </form>
        )
    }
}

ListItemTemplate.defaultProps = {
    picklistData: [],
    data: {
        beverage_id: "",
        producer: "",
        name: "",
        style: "",
        specific_style: "",
        aging_potential: "",
        trade_value: "",
        qty_total: 0,
        date_added: 0,
        last_modified: 0,
        vintages: [
            {
                bottle_date: "2020-01-01",
                batch: 0,
                size: "",
                for_trade: false,
                untappd: "",
                note: "",
                display_order: 0,
                locations: [
                    {
                        name: "",
                        qty: 0,
                        qty_cold: 0,
                        note: "",
                        display_order: 0
                    }
                ]
            }
        ]
    }
}

export default ListItemTemplate;
