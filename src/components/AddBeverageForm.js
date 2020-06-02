import React from 'react';
import Form from 'react-bootstrap/Form';
import './styles/add_beverage_form.css';
import parse_picklists from '../functions/parse_picklists';

class AddBeverageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beer_id: "",
            name: "",
            brewery: "",
            year: (new Date()).getFullYear(),
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
            sizeList: [],
            styleList: [],
            locationList: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Chance to update, props.pld.len:" + this.state.sizeList.length)
        if (this.props.picklistData.length > 0 && this.state.sizeList.length === 0) {
            console.log("Updating!")
            // Update state w/all picklist values
            this.setState({
                styleList: parse_picklists(this.props.picklistData, "style"),
                sizeList: parse_picklists(this.props.picklistData, "size")
                    .map(size => <option key={size.value}>{size.value}</option>),
                locationList: parse_picklists(this.props.picklistData, "location")
                    .map(size => <option key={size.value}>{size.value}</option>)
            })
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
    }

    render() {
        console.log(this.props.picklistData);
        return (
            <Form className="add-beverage-form"
                  onSubmit={this.handleSubmit}
                  validated={this.state.validated}>
                <Form.Row>
                    <Form.Group controlId="formBevProducer" className="add-beverage-form-group">
                        <Form.Label>Producer</Form.Label>
                        <Form.Control type="text"
                                      name="brewery"
                                      placeholder="Brewery / Producer"
                                      value={this.state.brewery}
                                      onChange={this.handleChange}
                                      required={true}/>
                    </Form.Group>

                    <Form.Group controlId="formBevName" className="add-beverage-form-group">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"
                                      name="name"
                                      placeholder="Name"
                                      value={this.state.name}
                                      onChange={this.handleChange}
                                      required={true}/>
                    </Form.Group>

                    <Form.Group controlId="formBevSize" className="add-beverage-form-group">
                        <Form.Label>Size</Form.Label>
                        <Form.Control as="select"
                                      name="size"
                                      value={this.state.size}
                                      onChange={this.handleChange}
                                      required={true}>
                            {this.state.sizeList}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="formBevYear" className="add-beverage-form-group">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="number"
                                      name="year"
                                      placeholder="Year"
                                      min={1950}
                                      max={(new Date()).getFullYear() + 1}
                                      value={this.state.year}
                                      onChange={this.handleChange}
                                      required={true}/>
                    </Form.Group>

                    <Form.Group controlId="formBevBottleDate" className="add-beverage-form-group">
                        <Form.Label>Bottle Date</Form.Label>
                        <Form.Control type="text"
                                      name="bottle_date"
                                      placeholder="Bottle Date"
                                      value={this.state.bottle_date}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                </Form.Row>

            </Form>
        )
    }
}

AddBeverageForm.defaultProps = {
    beerList: [],
    picklistData: []
}

export default AddBeverageForm;
