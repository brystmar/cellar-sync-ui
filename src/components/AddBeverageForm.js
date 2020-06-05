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
import AttrName from "./list_item_elements/AttrName";
import AttrProducer from "./list_item_elements/AttrProducer";

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
            sizeValues: parse_picklists(this.props.picklistData, "size"),
            locationValues: parse_picklists(this.props.picklistData, "location"),
            styleValues: parse_picklists(this.props.picklistData, "style")
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBeverageState = this.updateBeverageState.bind(this);
        this.resetBeverageData = this.resetBeverageData.bind(this);
    }

    handleChange(event) {
        // console.log("Event:")
        // console.log(event)
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        console.log("AddBev form submitted.  Valid? " + event.currentTarget.checkValidity());
        console.log(this.state);
        event.preventDefault();

        // Prep the new beverage for db insert
        let newBeverage = {...this.state};
        delete newBeverage['editMode'];
        delete newBeverage['validated'];
        delete newBeverage['sizeValues'];
        delete newBeverage['styleValues'];
        delete newBeverage['locationValues'];

        // if (!this.state.validated) {
        //     console.log("Form not valid.  Halting.")
        //     return
        // }

        // event.preventDefault();
        // event.stopPropagation();
        console.log("Form is valid!  event.currentTarget.checkValidity=" + event.currentTarget.checkValidity())

        // Set the beer_id
        if (newBeverage.bottle_date && newBeverage.bottle_date !== "") {
            // Prefer bottle_date over batch
            newBeverage.beer_id = newBeverage.brewery + "_" + newBeverage.name + "_" +
                newBeverage.size + "_" + newBeverage.year + "_" + newBeverage.bottle_date
        } else {
            newBeverage.beer_id = newBeverage.brewery + "_" + newBeverage.name + "_" +
                newBeverage.size + "_" + newBeverage.year + "_" + newBeverage.batch
        }

        console.log("Adding beverage:");
        console.log(newBeverage);
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }

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
                console.log("New beverage saved:", result.data);
                this.resetBeverageData();
            })
            .catch(error => console.log("Error adding new beverage:", error));
    }

    resetBeverageData() {
        console.log("Resetting the AddBev Form");
        this.setState({
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
            validated: false
        });
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
                    <AttrProducer brewery={this.state.brewery}
                                  forNewBeverage={true}
                                  updateBeverageState={this.updateBeverageState}/>

                    <AttrName name={this.state.name}
                              forNewBeverage={true}
                              updateBeverageState={this.updateBeverageState}/>
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
                </Form.Row>
                <Form.Row>
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
                    <AttrUntappd untappd={this.state.untappd}
                                 forNewBeverage={true}
                                 updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrNote note={this.state.note}
                              forNewBeverage={true}
                              updateBeverageState={this.updateBeverageState}/>
                </Form.Row>
                <Form.Row>
                    <AttrTrade for_trade={this.state.for_trade}
                               forNewBeverage={true}
                               updateBeverageState={this.updateBeverageState}/>
                    <AttrTradeValue trade_value={this.state.trade_value}
                                    forNewBeverage={true}
                                    updateBeverageState={this.updateBeverageState}/>
                    <AttrAgingPotential aging_potential={this.state.aging_potential}
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

AddBeverageForm
    .defaultProps = {
    beerList: [],
    picklistData: []
}

export default AddBeverageForm;
