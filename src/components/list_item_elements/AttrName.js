import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrName(props) {
    return (
        <Form.Group controlId="formBevName"
                    className="input-group input-name">
            <span className="list-item-key">
                <img alt="Beverage Name"
                     src="./icons/nametag.svg"
                     className="list-item-key-icon"/>
                <Form.Label>Name</Form.Label>
            </span>
            <Form.Control type="text"
                          name="name"
                          className="list-item-value input-text"
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
