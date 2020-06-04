import React from 'react';
import Form from 'react-bootstrap/Form';
import './styles/add_beverage_form.css';
import parse_picklists from '../functions/parse_picklists';
import AttrSize from "./list_item_elements/AttrSize";
import AttrLocation from "./list_item_elements/AttrLocation";
import AttrStyle from "./list_item_elements/AttrStyle";
import AttrYear from "./list_item_elements/AttrYear";
import AttrBottleDate from "./list_item_elements/AttrBottleDate";
import AttrBatch from "./list_item_elements/AttrBatch";
import AttrQty from "./list_item_elements/AttrQty";
import AttrUntappd from "./list_item_elements/AttrUntappd";
import AttrNote from "./list_item_elements/AttrNote";
import ActionButtons from "./list_item_elements/ActionButtons";
import AttrTrade from "./list_item_elements/AttrTrade";
import AttrTradeValue from "./list_item_elements/AttrTradeValue";
import AttrAgingPotential from "./list_item_elements/AttrAgingPotential";

class AddBeverageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beer_id: "",
            name: "",
            brewery: "",
            year: "",
            batch: "",
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
            validated: false,
            originalData: "zzx",
            sizeValues: parse_picklists(this.props.picklistData, "size"),
            locationValues: parse_picklists(this.props.picklistData, "location"),
            styleValues: parse_picklists(this.props.picklistData, "style")
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBeverageState = this.updateBeverageState.bind(this);
        this.resetBeverageData = this.resetBeverageData.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Store the initial state of this beverage once its data arrives
        console.log("oD: " + this.state.originalData + ", sV.len: " + this.state.sizeValues.length);
        if (this.state.originalData === "zzx"
            && this.state.sizeValues.length > 0) {
            this.setState({
                originalData: this.props.data
            })
            console.log("Storing originalData:")
            console.log(this.props.data)
        }
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit() {
        console.log("AddBev form submitted");

        // Prep the new beverage for db insert
        let newBeverage = this.state;
        delete newBeverage['editMode'];
        delete newBeverage['validated'];
        delete newBeverage['sizeValues'];
        delete newBeverage['styleValues'];
        delete newBeverage['locationValues'];

        console.log(newBeverage);
    }

    resetBeverageData() {
        // console.log("Resetting the AddBev Form to:");
        // console.log(this.state.originalData);
        // this.setState(this.state.originalData);
    }

    updateBeverageState(newData) {
        // Update local state when values change on a child attribute
        this.setState(newData)
        console.log("Updated " + JSON.stringify(newData));
    }

    render() {
        return (
            <Form className="add-beverage-form"
                  onSubmit={this.handleSubmit}
                  validated={this.state.validated}>
                <Form.Row>
                    <Form.Group controlId="formBevProducer" className="add-beverage-form-group">
                        <img alt="Producer"
                             src="./icons/address-card-regular.svg"
                             className="list-item-icon-key"/>
                        <Form.Label>Producer</Form.Label>
                        <Form.Control type="text"
                                      name="brewery"
                                      placeholder="Tilquin"
                                      value={this.state.brewery}
                                      onChange={this.handleChange}
                                      required={true}/>
                    </Form.Group>

                    <Form.Group controlId="formBevName" className="add-beverage-form-group">
                        <img alt="Beverage Name"
                             src="./icons/nametag.svg"
                             className="list-item-icon-key"/>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"
                                      name="name"
                                      placeholder="Gueuze"
                                      value={this.state.name}
                                      onChange={this.handleChange}
                                      required={true}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <AttrLocation location={this.state.location}
                                  forNewBeverage={true}
                                  picklistData={this.state.locationValues}
                                  updateBeverageState={this.updateBeverageState}/>

                    <AttrSize size={this.state.size}
                              forNewBeverage={true}
                              picklistData={this.state.sizeValues}
                              updateBeverageState={this.updateBeverageState}/>

                    <AttrQty qty={this.state.qty}
                             qty_cold={this.state.qty_cold}
                             forNewBeverage={true}
                             updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrYear year={this.state.year}
                              forNewBeverage={true}
                              updateBeverageState={this.updateBeverageState}/>

                    <AttrBottleDate bottle_date={this.state.bottle_date}
                                    forNewBeverage={true}
                                    updateBeverageState={this.updateBeverageState}/>

                    <AttrBatch batch={this.state.batch}
                               forNewBeverage={true}
                               updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrStyle style={this.state.style}
                               forNewBeverage={true}
                               picklistData={this.state.styleValues}
                               updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrTrade for_trade={this.state.for_trade}
                               forNewBeverage={true}
                               updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrTradeValue trade_value={this.state.trade_value}
                                    forNewBeverage={true}
                                    updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrAgingPotential aging_potential={this.state.aging_potential}
                                        forNewBeverage={true}
                                        updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrUntappd untappd={this.state.untappd}
                                 forNewBeverage={true}
                                 updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrNote note={this.state.note}
                              forNewBeverage={true}
                              updateBeverageState={this.updateBeverageState}/>
                </Form.Row>

                <ActionButtons
                    editMode={true}
                    toggleEditMode={this.toggleEditMode}
                    resetBeverageData={this.resetBeverageData}
                    handleSubmit={this.handleSubmit}/>
            </Form>
        )
    }
}

AddBeverageForm.defaultProps = {
    beerList: [],
    picklistData: []
}

export default AddBeverageForm;
