import React from 'react';
import toggle_value_icons from '../../functions/toggle_value_icons';
import Form from "react-bootstrap/Form";

function AttrTradeValue(props) {
    return (
        <>
            <Form.Group controlId="formTradeValue" className="input-trade-value input-group">
                <span className="list-item-key">
                    <img alt="Trade Value"
                         src="./icons/euro-sign-solid.svg"
                         className="list-item-key-icon"/>
                    <Form.Label className="list-item-label">
                        Trade Value
                    </Form.Label>
                </span>
                {mapTradeValueIcons(props)}
            </Form.Group>
        </>
    )
}

function mapTradeValueIcons(props) {
    if (props.trade_value === 1) {
        return <img alt="Trade Value: High"
                    src="./icons/arrow-alt-circle-up-solid.svg"
                    className="list-item-value-icon clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        trade_value: toggle_value_icons(props.trade_value),
                        editMode: true
                    })}/>
    } else if (props.trade_value === 3) {
        return <img alt="Trade Value: Low"
                    src="./icons/arrow-alt-circle-down-solid.svg"
                    className="list-item-value-icon clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        trade_value: toggle_value_icons(props.trade_value),
                        editMode: true
                    })}/>
    } else {
        return <img alt="Trade Value: Moderate"
                    src="./icons/arrows-alt-horiz-solid.svg"
                    className="list-item-value-icon clickable-toggle"
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
