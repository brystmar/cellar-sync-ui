import React from 'react';
import Form from 'react-bootstrap/Form';

class AttrName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
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
            <Form.Group controlId="formBevName" className="add-beverage-form-group">
                <img alt="Beverage Name"
                     src="./icons/nametag.svg"
                     className="list-item-icon-key"/>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"
                              name="name"
                              placeholder="Beverage Name"
                              value={this.state.name}
                              onChange={this.handleChange}
                              required={true}/>
            </Form.Group>
        )
    }
}

AttrName.defaultProps = {
    name: "",
    forNewBeverage: false
}

export default AttrName;
