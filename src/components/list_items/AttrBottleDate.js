import React from 'react';

function AttrBottleDate(props) {
    return (
        <>
            <td className="list-item-table-key">
                <i className="far fa-calendar-alt"/>
            </td>
            <td className="list-item-table-value"
                onClick={() => props.updateBeverageState({editMode: true})}>
                {props.bottle_date}
            </td>
        </>
    )
}

export default AttrBottleDate;
