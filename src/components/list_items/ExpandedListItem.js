import React from 'react';
import './styles/list_items.css';
import ELIButtons from './ELIButtons';
import AttrLocation from './AttrLocation';
import AttrQty from './AttrQty';
import AttrBatch from './AttrBatch';
import AttrYear from './AttrYear';
import AttrBottleDate from './AttrBottleDate';
import AttrSize from './AttrSize';
import AttrStyle from './AttrStyle';
import AttrSpecificStyle from './AttrSpecificStyle';
import AttrTrade from './AttrTrade';
import AttrTradeValue from './AttrTradeValue';
import AttrAgingPotential from './AttrAgingPotential';
import AttrUntappd from './AttrUntappd';
import AttrNote from './AttrNote';

class ExpandedListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data

        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.updateBeverageState = this.updateBeverageState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            editMode: false
        })
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
    }

    handleSubmit() {
        console.log("Clicked Save!")

        // Flip buttons back to their default state
        this.toggleEditMode(false);

        // Define a variable for the updated beverage
        let updatedBeverageData = this.state;

        // Remove 'editMode' from the updated beverage
        delete updatedBeverageData['editMode'];

        // Update the item in the db

    }

    render() {
        // console.log(this.props.data);
        // console.log(this.state.editMode);

        return (
            <div className="expanded-list-item">
                <table className="expanded-list-table">
                    <tbody>
                    <tr>
                        <AttrLocation location={this.state.location}
                                      editMode={this.state.editMode}
                                      updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrQty qty={this.state.qty}
                                 editMode={this.state.editMode}
                                 updateBeverageState={this.updateBeverageState}/>

                        <AttrSize size={this.state.size}
                                  editMode={this.state.editMode}
                                  updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrYear year={this.state.year}
                                  editMode={this.state.editMode}
                                  updateBeverageState={this.updateBeverageState}/>

                        <AttrAgingPotential aging_potential={this.state.aging_potential ? this.state.aging_potential : 2}
                                            editMode={this.state.editMode}
                                            updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrBottleDate bottle_date={this.state.bottle_date}
                                        editMode={this.state.editMode}
                                        updateBeverageState={this.updateBeverageState}/>

                        <AttrTrade for_trade={this.state.for_trade}
                                   editMode={this.state.editMode}
                                   updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrBatch batch={this.state.batch}
                                   editMode={this.state.editMode}
                                   updateBeverageState={this.updateBeverageState}/>

                        <AttrTradeValue trade_value={this.state.trade_value ? this.state.trade_value : 2}
                                        editMode={this.state.editMode}
                                        updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>

                        <AttrStyle style={this.state.style}
                                   editMode={this.state.editMode}
                                   updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrSpecificStyle specific_style={this.state.specific_style}
                                           editMode={this.state.editMode}
                                           updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrUntappd untappd={this.state.untappd}
                                     editMode={this.state.editMode}
                                     updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    <tr>
                        <AttrNote note={this.state.note}
                                  editMode={this.state.editMode}
                                  updateBeverageState={this.updateBeverageState}/>
                    </tr>
                    </tbody>
                </table>

                <ELIButtons editMode={this.state.editMode}
                            toggleEditMode={this.toggleEditMode}
                            handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

ExpandedListItem.defaultProps = {
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

export default ExpandedListItem;
