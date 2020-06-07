import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrName(props) {
    return (
        <Form.Group controlId="formBevName"
                    className="form-input-group add-beverage-form-group">
            <img alt="Beverage Name"
                 src="./icons/nametag.svg"
                 className="list-item-icon-key"/>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"
                          name="name"
                          placeholder="Beverage Name"
                          value={props.name}
                          onChange={props.handleChange}
                          required={true}/>
        </Form.Group>
    )
}

AttrName.defaultProps = {
    name: "",
    forNewBeverage: false
}

export default AttrName;
