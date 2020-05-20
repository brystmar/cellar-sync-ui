import React from 'react';

function AttrSpecificStyle(props) {
    return (
        <>
            <td className="list-item-table-key">
                <img src="./icons/noun_Beer_style2_5693.svg"
                     alt="Specific Style"
                     className="list-item-icon-key"/>
            </td>
            <td className="list-item-table-value"
                onClick={() => props.updateBeverageState({editMode: true})}>
                {props.specific_style}
            </td>
        </>
    )
}

export default AttrSpecificStyle;
