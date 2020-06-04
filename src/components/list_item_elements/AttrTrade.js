import React from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function AttrTrade(props) {
    return (
        <>
            {props.forNewBeverage ?
                <Form.Group as={Row} controlId="formTrade">
                    <Form.Label column={true} sm={10}>
                        For Trade?
                        <img alt="For Trade?"
                             src="./icons/exchange-alt-solid.svg"
                             className="list-item-icon-key"/>
                    </Form.Label>
                    <Col sm={3}>
                        {mapForTradeIcons(props)}
                    </Col>
                </Form.Group>

                : <Form.Group controlId="formTrade">
                    <img alt="For Trade?"
                         src="./icons/exchange-alt-solid.svg"
                         className="list-item-icon-key"/>

                    {mapForTradeIcons(props)}
                </Form.Group>
            }
        </>
    )
}

function mapForTradeIcons(props) {
    // console.log(props.for_trade + ", type: " + typeof(props.for_trade));
    if (props.for_trade === true) {
        return <img src="./icons/noun_true_2049512.svg"
                    alt="For Trade? Yes"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        for_trade: false,
                        editMode: true
                    })}/>
    } else if (props.for_trade === false) {
        return <img src="./icons/noun_False_2049513.svg"
                    alt="For Trade? No"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        for_trade: true,
                        editMode: true
                    })}/>
    } else {
        return <img src="./icons/trade-question-solid.svg"
                    alt="For Trade? Unknown"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        for_trade: true,
                        editMode: true
                    })}/>;
    }
}

AttrTrade.defaultProps = {
    for_trade: true,
    forNewBeverage: false
}

export default AttrTrade;
