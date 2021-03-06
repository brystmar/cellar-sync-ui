import React from 'react';
import toggle_value_icons from '../../functions/toggle_value_icons';

function AttrTradeValue(props) {
    return (
        <>
            <span className="input-trade-value input-group">
                <span className="list-item-key">
                    <span className="list-item-key-icon-container">
                        <img alt="Trade Value" src="./icons/euro-sign-solid.svg"/>
                    </span>
                    <label className="list-item-label-lg">
                        Trade Value
                    </label>
                </span>
                <span className="list-item-value clickable-toggle">
                    {mapTradeValueIcons(props)}
                </span>
            </span>
        </>
    )
}

function mapTradeValueIcons(props) {
    if (props.trade_value === 1) {
        return <img alt="Trade Value: High"
                    src="./icons/arrow-alt-circle-up-solid.svg"
                    onClick={() => props.updateBeverageState({
                        trade_value: toggle_value_icons(props.trade_value),
                        editMode: true
                    })}/>
    } else if (props.trade_value === 3) {
        return <img alt="Trade Value: Low"
                    src="./icons/arrow-alt-circle-down-solid.svg"
                    onClick={() => props.updateBeverageState({
                        trade_value: toggle_value_icons(props.trade_value),
                        editMode: true
                    })}/>
    } else {
        return <img alt="Trade Value: Moderate"
                    src="./icons/arrows-alt-horiz-solid.svg"
                    onClick={() => props.updateBeverageState({
                        trade_value: toggle_value_icons(props.trade_value),
                        editMode: true
                    })}/>
    }
}

AttrTradeValue.defaultProps = {
    trade_value: 2,
    forNewBeverage: false
}

export default AttrTradeValue;
