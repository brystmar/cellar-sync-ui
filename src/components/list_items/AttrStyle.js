import React from 'react';

function AttrStyle(props) {
    return (
        <>
            <td className="list-item-table-key">
                <img src="./icons/noun_Beer_style1_1975813.svg"
                     alt="Style"
                     className="list-item-icon-key"/>
            </td>
            <td className="list-item-table-value">
                {props.style}
            </td>
        </>
    )
}

export default AttrStyle;
