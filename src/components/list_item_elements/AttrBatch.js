import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrBatch(props) {
    return (
        <Form.Group className="input-batch input-group">
            <span className="list-item-key">
                <span className="list-item-key-icon-container">
                    <img alt="Batch" src="./icons/noun_Bat_2088669.svg"/>
                </span>
                <Form.Label className="list-item-label-sm"
                            hidden={props.forNewBeverage}>Batch</Form.Label>
            </span>

            <Form.Control name="batch"
                          type="number"
                          min={0}
                          max={9999}
                          placeholder="b#"
                          className="input-number list-item-value"
                          id="input-batch-number"
                          value={props.batch}
                          disabled={!props.forNewBeverage}
                          onChange={props.handleChange}/>
        </Form.Group>
    )
}

AttrBatch.defaultProps = {
    batch: 0,
    forNewBeverage: false
}

export default AttrBatch;
