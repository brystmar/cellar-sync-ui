import React from 'react';

function AttrLocation(props) {
    return (
        <>
            <td className="list-item-table-key">
                <i className="fas fa-map-marked-alt"/>
            </td>
            <td className="list-item-table-value"
                onClick={() => props.updateBeverageState({editMode: true})}>
                {props.location}
            </td>
        </>
    )
}

export default AttrLocation;