import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrYear(props) {
    return (
        <Form.Group controlId="formYear" className="form-input-group">
            <img alt="Year"
                 src="./icons/calendar-alt-solid.svg"
                 className="list-item-icon-key"/>
            {props.forNewBeverage ? <Form.Label>Year</Form.Label> : ""}

            <Form.Control name="year"
                          type="number"
                          min={1950}
                          max={(new Date()).getFullYear() + 1}
                          placeholder="YYYY"
                          className="input-number list-item-value"
                          disabled={!props.forNewBeverage}
                          value={props.year}
                          onChange={props.handleChange}
                          required={true}/>
        </Form.Group>
    )
}

AttrYear.defaultProps = {
    year: (new Date()).getFullYear(),
    forNewBeverage: false
}

export default AttrYear;
