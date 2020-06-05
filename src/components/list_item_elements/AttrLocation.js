import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrLocation(props) {
    let locations = props.picklistData.map(location =>
        <option key={location.value}>{location.value}</option>);

    // Add a null value if this is for adding a new beverage
    if (props.forNewBeverage) {
        locations.unshift(<option key={"null"} value={""}>{""}</option>);
    }

    function handleChange(event) {
        const {name, value} = event.target;

        // Update parent beverage state
        props.updateBeverageState({
            [name]: value,
            editMode: true
        })
    }

    return (
        <Form.Group controlId="formLocation">
            <img alt="Location"
                 src="./icons/map-marked-alt-solid.svg"
                 className="list-item-icon-key"/>
            {props.forNewBeverage ? <Form.Label>Location</Form.Label> : ""}

            <Form.Control as="select"
                          name="location"
                          size="sm"
                          disabled={!props.forNewBeverage}
                          className="input-picklist list-item-value"
                          value={props.location}
                          onChange={handleChange}
                          required={true}>
                {locations}
            </Form.Control>
        </Form.Group>
    )
}

AttrLocation.defaultProps = {
    location: "",
    forNewBeverage: false,
    picklistData: {
        value: "",
        display_order: 0
    }
}

export default AttrLocation;
