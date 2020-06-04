import React from 'react';
import toggle_value_icons from '../../functions/toggle_value_icons';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AttrTradeValue(props) {
    return (
        <>
            {props.forNewBeverage ?
                <Form.Group as={Row} controlId="formTradeValue">
                    <Form.Label column={true} sm={10}>
                        Trade Value
                        <img alt="Trade Value"
                             src="./icons/euro-sign-solid.svg"
                             className="list-item-icon-key"/>
                    </Form.Label>
                    <Col sm={3}>
                        {mapTradeValueIcons(props)}
                    </Col>
                </Form.Group>

                : <Form.Group controlId="formTradeValue">
                    <img alt="Trade Value"
                         src="./icons/euro-sign-solid.svg"
                         className="list-item-icon-key"/>
                    {props.forNewBeverage ? <Form.Label>Trade Value</Form.Label> : ""}

                    {mapTradeValueIcons(props)}
                </Form.Group>
            }
        </>
    )
}

function mapTradeValueIcons(props) {
    if (props.trade_value === 1) {
        return <img src="./icons/arrow-alt-circle-up-solid.svg"
                    alt="Trade Value: High"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        trade_value: toggle_value_icons(props.trade_value),
                        editMode: true
                    })}/>
    } else if (props.trade_value === 3) {
        return <img src="./icons/arrow-alt-circle-down-solid.svg"
                    alt="Trade Value: Low"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        trade_value: toggle_value_icons(props.trade_value),
                        editMode: true
                    })}/>
    } else {
        return <img src="./icons/arrows-alt-horiz-solid.svg"
                    alt="Trade Value: Medium"
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
