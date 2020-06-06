import React from 'react';
import Form from 'react-bootstrap/Form';

class AttrProducer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            producer: this.props.producer
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })

        // Update parent beverage state
        this.props.updateBeverageState({
            [name]: value,
            editMode: true
        })
    }

    render() {
        return (
            <Form.Group controlId="formBevProducer" className="add-beverage-form-group">
                <img alt="Producer"
                     src="./icons/address-card-regular.svg"
                     className="list-item-icon-key"/>
                <Form.Label>Producer</Form.Label>
                <Form.Control type="text"
                              name="producer"
                              placeholder="Brewery / Winery"
                              value={this.state.producer}
                              onChange={this.handleChange}
                              required={true}/>
            </Form.Group>
        )
    }
}

AttrProducer.defaultProps = {
    producer: "",
    forNewBeverage: false
}

export default AttrProducer;
