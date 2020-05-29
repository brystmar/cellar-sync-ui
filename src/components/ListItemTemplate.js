import React from 'react';
import './list_item_elements/styles/list_items.css';
import ELIButtons from './list_item_elements/ActionButtons';
import AttrLocation from './list_item_elements/AttrLocation';
import AttrQty from './list_item_elements/AttrQty';
import AttrBatch from './list_item_elements/AttrBatch';
import AttrYear from './list_item_elements/AttrYear';
import AttrBottleDate from './list_item_elements/AttrBottleDate';
import AttrSize from './list_item_elements/AttrSize';
import AttrStyle from './list_item_elements/AttrStyle';
import AttrSpecificStyle from './list_item_elements/AttrSpecificStyle';
import AttrTrade from './list_item_elements/AttrTrade';
import AttrTradeValue from './list_item_elements/AttrTradeValue';
import AttrAgingPotential from './list_item_elements/AttrAgingPotential';
import AttrUntappd from './list_item_elements/AttrUntappd';
import AttrNote from './list_item_elements/AttrNote'
import AttrQtyCold from './list_item_elements/AttrQtyCold';

class ListItemTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign(this.props.data, {editMode: false});

        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.updateBeverageState = this.updateBeverageState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetBeverageData = this.resetBeverageData.bind(this);
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
        // Update local state when values change on an Attribute
        this.setState(newData)
        console.log("Updated " + JSON.stringify(newData));
    }

    resetBeverageData() {
        // Reset the data for this list item to its original values
        console.log("Resetting data to:")
        console.log(JSON.stringify(this.state.originalData));
        console.log("Orig props:");
        console.log(JSON.stringify(this.props.data));
        this.setState({
            beverageData: this.state.originalData,
            editMode: false
        })
    }

    handleSubmit() {
        console.log("Clicked Save!")

        // Organize the updated data object
        let beverageData = this.state;
        delete beverageData['editMode'];
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
            <div className="expanded-list-item">
                <table className="expanded-list-table">
                    <tbody>
                    <tr>
                        <AttrLocation location={this.state.location}
                                      editMode={this.state.editMode}
                                      updateBeverageState={this.updateBeverageState}/>

                        <AttrSize size={this.state.size}
                                  editMode={this.state.editMode}
                                  updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrQty qty={this.state.qty}
                                 editMode={this.state.editMode}
                                 updateBeverageState={this.updateBeverageState}/>

                        <AttrQtyCold qty={this.state.qty_cold}
                                     editMode={this.state.editMode}
                                     updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrYear year={this.state.year}
                                  editMode={this.state.editMode}
                                  updateBeverageState={this.updateBeverageState}/>

                        <AttrAgingPotential
                            aging_potential={this.state.aging_potential ? this.state.aging_potential : 2}
                            editMode={this.state.editMode}
                            updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrBottleDate
                            bottle_date={this.state.bottle_date ? this.state.bottle_date : ""}
                            editMode={this.state.editMode}
                            updateBeverageState={this.updateBeverageState}/>

                        <AttrTrade for_trade={this.state.for_trade}
                                   editMode={this.state.editMode}
                                   updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrBatch
                            batch={this.state.batch ? this.state.batch : ""}
                            editMode={this.state.editMode}
                            updateBeverageState={this.updateBeverageState}/>

                        <AttrTradeValue
                            trade_value={this.state.trade_value ? this.state.trade_value : 2}
                            editMode={this.state.editMode}
                            updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>

                        <AttrStyle
                            style={this.state.style ? this.state.style : ""}
                            editMode={this.state.editMode}
                            updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrSpecificStyle
                            specific_style={this.state.specific_style ? this.state.specific_style : ""}
                            editMode={this.state.editMode}
                            updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrUntappd
                            untappd={this.state.untappd ? this.state.untappd : ""}
                            editMode={this.state.editMode}
                            updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrNote
                            note={this.state.note ? this.state.note : ""}
                            editMode={this.state.editMode}
                            updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    </tbody>
                </table>

                <ELIButtons editMode={this.state.editMode}
                            toggleEditMode={this.toggleEditMode}
                            resetBeverageData={this.resetBeverageData}
                            handleSubmit={this.handleSubmit}/>
            </div>
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
        untappd: "",
        aging_potential: "",
        trade_value: "",
        for_trade: false,
        note: "",
        date_added: 0,
        last_modified: 0
    }
}

export default ListItemTemplate;
