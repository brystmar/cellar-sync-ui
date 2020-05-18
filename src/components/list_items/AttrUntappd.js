import React from 'react';

function AttrUntappd(props) {
    return (
        <>
            <td className="list-item-table-key">
                <i className="fas fa-link"/>
            </td>
            <td className="list-item-table-value">
                {props.untappd}
            </td>
        </>
    )
}

export default AttrUntappd;
