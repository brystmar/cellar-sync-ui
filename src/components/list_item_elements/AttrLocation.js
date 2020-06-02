import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrLocation(props) {
    const locations = props.picklistData.map(location =>
        <option key={location.value}>{location.value}</option>);

    return (
        <Form.Group controlId="formLocation">
            <Form.Label>
                <img src="./icons/map-marked-alt-solid.svg"
                     alt="Location"
                     className="list-item-icon-key"/>
                {props.forNewBeverage ? "Location" : ""}
            </Form.Label>
            <Form.Control as="select"
                          size="sm"
                          disabled={true}
                          className="picklist-selector list-item-value"
                          defaultValue={props.location}>
                {locations}
            </Form.Control>
        </Form.Group>
    )
}

AttrLocation.defaultProps = {
    location: "Home",
    forNewBeverage: false,
    picklistData: {
        value: "Home",
        display_order: 0
    }
}

export default AttrLocation;
