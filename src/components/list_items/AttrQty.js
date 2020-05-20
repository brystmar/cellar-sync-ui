import React from 'react';

function AttrQty(props) {
    return (
        <>
            <td className="list-item-table-key">
                <i className="fas fa-hashtag"/>
            </td>
            <td className="list-item-table-value"
                onClick={() => props.updateBeverageState({editMode: true})}>
                {props.qty}
            </td>
        </>
    )
}

export default AttrQty;
