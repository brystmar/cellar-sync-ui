import React from 'react';
import Form from 'react-bootstrap/Form';
// import DatePicker from 'react-datepicker';
// import DateTimeField from '@texada/date-picker';
// import '@texada/date-picker/dist/styles.min.css';

function AttrBottleDate(props) {
    return (
        <Form.Group controlId="formBottleDate" className="form-input-group">
            <img alt="Bottle Date"
                 src="./icons/calendar-check-regular.svg"
                 className="list-item-icon-key"/>
            <Form.Label hidden={props.forNewBeverage}>Bottle Date</Form.Label>

            <Form.Control name="bottle_date"
                          type="text"
                          value={props.bottle_date}
                          placeholder="YYYY-MM-DD"
                          className="input-text list-item-value input-bottle-date"
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
