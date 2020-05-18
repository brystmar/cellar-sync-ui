import React from 'react';

function AttrTradeValue(props) {
    let tradeValue = <i className="fas fa-arrows-alt-h clickable-toggle"/>;

    if (props.trade_value) {
        if (props.trade_value === 1) {
            tradeValue = <i className="fas fa-arrow-alt-circle-up clickable-toggle"/>
        } else if (props.trade_value === 2) {
            tradeValue = <i className="fas fa-arrows-alt-h clickable-toggle"/>
        } else if (props.trade_value === 3) {
            tradeValue = <i className="fas fa-arrow-alt-circle-down clickable-toggle"/>
        }
    }

    return (
        <>
            <td className="list-item-table-key">
                {/*<i className="fas fa-money-check-alt"/>*/}
                <i className="fas fa-euro-sign"/>
            </td>
            <td className="list-item-table-value">
                {tradeValue}
            </td>
        </>
    )
}

export default AttrTradeValue;
