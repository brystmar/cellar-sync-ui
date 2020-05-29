import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrLocation(props) {
    const locations = "";

    return (
        <>
            <td className="list-item-table-key">
                <i className="fas fa-map-marked-alt"/>
            </td>
            <td className="list-item-table-value"
                onClick={() => props.updateBeverageState({editMode: true})}>
                <Form.Label>Location</Form.Label>
                <Form.Control as="select">

                </Form.Control>
                {props.location}
            </td>
        </>
    )
}

AttrLocation.defaultProps = {
    location: "Default",
    options: []
}

export default AttrLocation;
