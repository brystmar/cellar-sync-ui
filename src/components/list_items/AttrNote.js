import React from 'react';

function AttrNote(props) {
    return (
        <>
            <td className="list-item-table-key">
                <i className="far fa-sticky-note"/>
            </td>
            <td className="list-item-table-value">
                {props.note}
            </td>
        </>
    )
}

export default AttrNote;
