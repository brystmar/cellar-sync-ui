import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrProducer(props) {
    return (
        <Form.Group className="input-producer input-group">
            <span className="list-item-key">
                <img alt="Producer"
                     src="./icons/address-card-regular.svg"
                     className="list-item-key-icon"/>
                <Form.Label>Producer</Form.Label>
            </span>
            <Form.Control type="text"
                          name="producer"
                          className="list-item-value input-text"
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
