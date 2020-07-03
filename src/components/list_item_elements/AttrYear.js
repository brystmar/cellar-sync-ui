import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrYear(props) {
    return (
        <Form.Group controlId="formYear" className="input-year input-group">
            <span className="list-item-key">
                <span className="list-item-key-icon-container">
                    <img alt="Year" src="./icons/calendar-alt-regular.svg"/>
                </span>
                <Form.Label className="list-item-label-sm"
                            hidden={props.forNewBeverage}>Year</Form.Label>
            </span>

            <Form.Control name="year"
                          type="number"
                          min={1950}
                          max={(new Date()).getFullYear() + 1}
                          placeholder="YYYY"
                          className="input-number input-year list-item-value"
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
