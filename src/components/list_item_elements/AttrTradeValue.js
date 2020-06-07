import React from 'react';
import toggle_value_icons from '../../functions/toggle_value_icons';
import Form from "react-bootstrap/Form";

function AttrTradeValue(props) {
    return (
        <>
            {props.forNewBeverage ?
                <Form.Group controlId="formTradeValue" className="form-input-group">
                    <Form.Label className="list-item-form-label">
                        <img alt="Trade Value"
                             src="./icons/euro-sign-solid.svg"
                             className="list-item-icon-key"/>
                        Trade Value
                    </Form.Label>
                    {mapTradeValueIcons(props)}
                </Form.Group>

                : <Form.Group controlId="formTradeValue" className="form-input-group">
                    <img alt="Trade Value"
                         src="./icons/euro-sign-solid.svg"
                         className="list-item-icon-key"/>
                    {mapTradeValueIcons(props)}
                </Form.Group>
            }
        </>
    )
}

function mapTradeValueIcons(props) {
    if (props.trade_value === 1) {
        return <img alt="Trade Value: High"
                    src="./icons/arrow-alt-circle-up-solid.svg"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        trade_value: toggle_value_icons(props.trade_value),
                        editMode: true
                    })}/>
    } else if (props.trade_value === 3) {
        return <img alt="Trade Value: Low"
                    src="./icons/arrow-alt-circle-down-solid.svg"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        trade_value: toggle_value_icons(props.trade_value),
                        editMode: true
                    })}/>
    } else {
        return <img alt="Trade Value: Moderate"
                    src="./icons/arrows-alt-horiz-solid.svg"
                    className="list-item-icon-value clickable-toggle"
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
