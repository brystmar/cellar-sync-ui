import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrUntappd(props) {
    return (
        <Form.Group controlId="formUntappd" className="input-untappd input-group">
            <span className="list-item-key">
                <img src="./icons/link-solid.svg"
                     alt="Untappd"
                     className="list-item-key-icon"/>
                <Form.Label hidden={props.forNewBeverage}>Untappd</Form.Label>
            </span>

            <Form.Control name="untappd"
                          type="text"
                          placeholder="https://untappd.com/b/..."
                          className="input-longtext list-item-value"
                          value={props.untappd}
                          onChange={props.handleChange}/>
        </Form.Group>
    )
}

AttrUntappd.defaultProps = {
    untappd: "",
    forNewBeverage: false
}

export default AttrUntappd;
