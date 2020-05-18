import React from 'react';

function AttrYear(props) {
    return (
        <>
            <td className="list-item-table-key">
                <i className="fas fa-calendar-alt"/>
            </td>
            <td className="list-item-table-value">
                {props.year}
            </td>
        </>
    )
}

export default AttrYear;
