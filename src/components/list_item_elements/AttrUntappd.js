import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrUntappd(props) {
    return (
        <Form.Group controlId="formUntappd" className="form-input-group">
            <img src="./icons/link-solid.svg"
                 alt="Untappd"
                 className="list-item-icon-key"/>
            <Form.Label hidden={props.forNewBeverage}>Untappd</Form.Label>

            <Form.Control name="untappd"
                          type="text"
                          placeholder="https://untappd.com/b/..."
                          className="input-text-long list-item-value"
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
