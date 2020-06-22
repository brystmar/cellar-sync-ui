import React from 'react';
import Form from 'react-bootstrap/Form';
import newBeverageDefaults from './defaults/newBeverageDefaults';
import parse_picklists from '../functions/parse_picklists';
import AttrSize from './list_item_elements/AttrSize';
import AttrLocation from './list_item_elements/AttrLocation';
import AttrStyle from './list_item_elements/AttrStyle';
import AttrYear from './list_item_elements/AttrYear';
import AttrBottleDate from './list_item_elements/AttrBottleDate';
import AttrBatch from './list_item_elements/AttrBatch';
import AttrQty from './list_item_elements/AttrQty';
import AttrUntappd from './list_item_elements/AttrUntappd';
import AttrNote from './list_item_elements/AttrNote';
import ActionButtons from './list_item_elements/ActionButtons';
import AttrTrade from './list_item_elements/AttrTrade';
import AttrTradeValue from './list_item_elements/AttrTradeValue';
import AttrAgingPotential from './list_item_elements/AttrAgingPotential';
import AttrName from './list_item_elements/AttrName';
import AttrProducer from './list_item_elements/AttrProducer';


class AddBeverageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign(newBeverageDefaults,
            {
                validated: false,
                sizeValues: parse_picklists(this.props.picklistData, "size"),
                locationValues: parse_picklists(this.props.picklistData, "location"),
                styleValues: parse_picklists(this.props.picklistData, "style")
            })

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBeverageState = this.updateBeverageState.bind(this);
        this.resetBeverageData = this.resetBeverageData.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;

        // Validate that qty >= qty_cold
        if (name === "qty") {
            if (value >= this.state.qty_cold) {
                // Only update if the entry is valid
                // `value` is a string here for some reason
                if (value.toString() !== this.state.qty.toString()) {
                    this.setState({
                        qty: value
                    })
                }
            } else {
                // Reduce qty_cold to match qty
                this.setState({
                    qty: value,
                    qty_cold: value
                })
            }
        } else if (name === "qty_cold") {
            if (value <= this.state.qty) {
                // Only update if the entry is valid
                if (value.toString() !== this.state.qty_cold.toString()) {
                    this.setState({
                        qty_cold: value
                    })
                }
            } else {
                this.setState({
                    qty_cold: value
                })
            }
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    handleSubmit(event) {
        // console.log("AddBev form submitted.  Valid? " + event.currentTarget.checkValidity());
        // console.log(this.state);
        event.preventDefault();
        event.stopPropagation();

        // Prep the new beverage for db insert
        let newBeverage = {...this.state};
        delete newBeverage['editMode'];
        delete newBeverage['validated'];
        delete newBeverage['sizeValues'];
        delete newBeverage['styleValues'];
        delete newBeverage['locationValues'];

        // Set the beverage_id
        if (newBeverage.bottle_date && newBeverage.bottle_date !== "") {
            // Prefer bottle_date over batch
            newBeverage.beverage_id = newBeverage.producer + "_" + newBeverage.name + "_" +
                newBeverage.size + "_" + newBeverage.year + "_" + newBeverage.bottle_date
        } else {
            newBeverage.beverage_id = newBeverage.producer + "_" + newBeverage.name + "_" +
                newBeverage.size + "_" + newBeverage.year + "_" + newBeverage.batch
        }

        console.log("Adding beverage:", newBeverage);

        // Retrieve the list of beverages from the backend
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/cellar",
            {
                method: "POST",
                body: JSON.stringify(newBeverage)
            })
            .then(response => {
                console.log("POST complete, response:", response.status, response.ok);
                return response.json();
            })
            .then(result => {
                // console.log("New beverage saved:", result.data);
                this.resetBeverageData();
            })
            .catch(error => console.log("Error adding new beverage:", error));

        // Update the master list
        this.props.updateBeverageList(newBeverage, true);
    }

    resetBeverageData() {
        console.log("Resetting the AddBev Form");
        this.setState(newBeverageDefaults);

        // Reset focus to the Producer field
        document.getElementById("formBevProducer").focus();
    }

    updateBeverageState(newData) {
        // Update local state when values change on a child attribute
        this.setState(newData)
    }

    render() {
        return (
            <Form className="add-beverage-form"
                  onSubmit={this.handleSubmit}
                  validated={this.state.validated}>
                <Form.Row>
                    <AttrProducer producer={this.state.producer}
                                  forNewBeverage={true}
                                  handleChange={this.handleChange}
                                  updateBeverageState={this.updateBeverageState}/>

                    <AttrName name={this.state.name}
                              forNewBeverage={true}
                              handleChange={this.handleChange}
                              updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrLocation location={this.state.location}
                                  forNewBeverage={true}
                                  picklistData={this.state.locationValues}
                                  handleChange={this.handleChange}
                                  updateBeverageState={this.updateBeverageState}/>

                    <AttrSize size={this.state.size}
                              forNewBeverage={true}
                              picklistData={this.state.sizeValues}
                              handleChange={this.handleChange}
                              updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrQty qty={this.state.qty}
                             qty_cold={this.state.qty_cold}
                             forNewBeverage={true}
                             handleChange={this.handleChange}
                             updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrYear year={this.state.year}
                              forNewBeverage={true}
                              handleChange={this.handleChange}
                              updateBeverageState={this.updateBeverageState}/>

                    <AttrBottleDate bottle_date={this.state.bottle_date}
                                    forNewBeverage={true}
                                    handleChange={this.handleChange}
                                    updateBeverageState={this.updateBeverageState}/>

                    <AttrBatch batch={this.state.batch}
                               forNewBeverage={true}
                               handleChange={this.handleChange}
                               updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrStyle style={this.state.style}
                               forNewBeverage={true}
                               picklistData={this.state.styleValues}
                               handleChange={this.handleChange}
                               updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrUntappd untappd={this.state.untappd}
                                 forNewBeverage={true}
                                 handleChange={this.handleChange}
                                 updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrNote note={this.state.note}
                              forNewBeverage={true}
                              handleChange={this.handleChange}
                              updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrTrade for_trade={this.state.for_trade}
                               forNewBeverage={true}
                               handleChange={this.handleChange}
                               updateBeverageState={this.updateBeverageState}/>
                    <AttrTradeValue trade_value={this.state.trade_value}
                                    forNewBeverage={true}
                                    handleChange={this.handleChange}
                                    updateBeverageState={this.updateBeverageState}/>
                    <AttrAgingPotential aging_potential={this.state.aging_potential}
                                        forNewBeverage={true}
                                        handleChange={this.handleChange}
                                        updateBeverageState={this.updateBeverageState}/>
                </Form.Row>

                <ActionButtons
                    editMode={true}
                    forNewBeverage={true}
                    resetBeverageData={this.resetBeverageData}
                    handleSubmit={this.handleSubmit}/>
            </Form>
        )
    }
}

AddBeverageForm.defaultProps = {
    beverageList: [],
    picklistData: []
}

export default AddBeverageForm;
