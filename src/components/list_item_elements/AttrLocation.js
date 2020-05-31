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
            <td className="list-item-table-value"
                onClick={() => props.updateBeverageState({editMode: true})}>
                {/*<Form.Label>Location</Form.Label>*/}
                <Form.Control as="select"
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
