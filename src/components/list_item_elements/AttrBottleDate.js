import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrBottleDate(props) {
    return (
        <Form.Group controlId="formBottleDate" className="input-bottle-date input-group">
            <span className="list-item-key">
                <img alt="Bottle Date"
                     src="./icons/calendar-check-regular.svg"
                     className="list-item-key-icon"/>
                <Form.Label hidden={props.forNewBeverage}>Bottle Date</Form.Label>
            </span>

            <Form.Control name="bottle_date"
                          type="text"
                          value={props.bottle_date}
                          placeholder="YYYY-MM-DD"
                          className="input-text list-item-value"
                          onChange={props.handleChange}
                          disabled={!props.forNewBeverage}/>
        </Form.Group>
    )
}

AttrBottleDate.defaultProps = {
    bottle_date: "",
    forNewBeverage: false
}

export default AttrBottleDate;
