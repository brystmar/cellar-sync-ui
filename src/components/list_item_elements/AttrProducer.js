import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrProducer(props) {
    return (
        <Form.Group className="form-input-group add-beverage-form-group">
            <img alt="Producer"
                 src="./icons/address-card-regular.svg"
                 className="list-item-icon-key"/>
            <Form.Label>Producer</Form.Label>
            <Form.Control type="text"
                          name="producer"
                          placeholder="Brewery / Winery"
                          value={props.producer}
                          onChange={props.handleChange}
                          id="formBevProducer"
                          autoFocus={true}
                          required={true}/>
        </Form.Group>
    )
}

AttrProducer.defaultProps = {
    producer: "",
    forNewBeverage: false
}

export default AttrProducer;
