import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrLocation(props) {
    const locations = props.picklistData.map(location =>
        <option key={location.value}>{location.value}</option>);

    return (
        <>
            <td className="list-item-table-key">
                <img src="./icons/map-marked-alt-solid.svg"
                     alt="Location"
                     className="list-item-icon-key"/>
            </td>
            <td className="list-item-table-value list-item-table-value-disabled">
                <Form.Control as="select"
                              size="sm"
                              disabled={true}
                              className="picklist-selector"
                              defaultValue={props.location}>
                    {locations}
                </Form.Control>
            </td>
        </>
    )
}

AttrLocation.defaultProps = {
    location: "Home",
    picklistData: {
        value: "Home",
        display_order: 0
    }
}

export default AttrLocation;
