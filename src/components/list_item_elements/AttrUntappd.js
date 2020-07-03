import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrUntappd(props) {
    return (
        <Form.Group controlId="formUntappd" className="input-untappd input-group">
            <div className="list-item-key">
                <span className="list-item-key-icon-container">
                    <img alt="Untappd" src="./icons/link-solid.svg"/>
                </span>
                <Form.Label className="list-item-label-med"
                            hidden={props.forNewBeverage}>Untappd</Form.Label>
            </div>

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
