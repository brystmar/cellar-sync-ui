import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrBatch(props) {
    return (
        <Form.Group className="form-input-group">
            <img alt="Batch"
                 src="./icons/noun_Bat_2088669.svg"
                 className="list-item-icon-key"/>
            {props.forNewBeverage ? <Form.Label>Batch</Form.Label> : ""}

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
