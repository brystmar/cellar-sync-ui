import React from 'react';
import toggle_value_icons from '../../functions/toggle_value_icons';

function AttrTradeValue(props) {
    return (
        <>
            <td className="list-item-table-key">
                <i className="fas fa-euro-sign"/>
            </td>
            <td className="list-item-table-value">
                {mapTradeValueIcons(props)}
            </td>
        </>
    )
}

function mapTradeValueIcons(props) {
    if (props.trade_value === 1) {
        return <img src="./icons/arrow-alt-circle-up-solid.svg"
                    alt="Trade Value: High"
                    className="list-item-icon-value"
                    onClick={() => props.updateBeverageState({
                        trade_value: toggle_value_icons(props.trade_value),
                        editMode: true
                    })}/>
    } else if (props.trade_value === 3) {
        return <img src="./icons/arrow-alt-circle-down-solid.svg"
                    alt="Trade Value: Low"
                    className="list-item-icon-value"
                    onClick={() => props.updateBeverageState({
                        trade_value: toggle_value_icons(props.trade_value),
                        editMode: true
                    })}/>
    } else {
        return <img src="./icons/arrows-alt-horiz-solid.svg"
                    alt="Trade Value: Medium"
                    className="list-item-icon-value"
                    onClick={() => props.updateBeverageState({
                        trade_value: toggle_value_icons(props.trade_value),
                        editMode: true
                    })}/>
    }
}

export default AttrTradeValue;
