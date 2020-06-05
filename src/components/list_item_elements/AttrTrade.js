import React from 'react';
import Form from "react-bootstrap/Form";

function AttrTrade(props) {
    return (
        <>
            {props.forNewBeverage ?
                <Form.Group controlId="formTrade" className="list-item-form-group">
                    <Form.Label className="list-item-form-label">
                        <img alt="For Trade?"
                             src="./icons/exchange-alt-solid.svg"
                             className="list-item-icon-key"/>
                        For Trade?
                    </Form.Label>
                    {/*<span className="v-align-helper"> </span>*/}
                    {mapForTradeIcons(props)}
                </Form.Group>

                : <Form.Group controlId="formTrade" className="list-item-form-group">
                    <img alt="For Trade?"
                         src="./icons/exchange-alt-solid.svg"
                         className="list-item-icon-key"/>

                    {/*<span className="v-align-helper"> </span>*/}
                    {mapForTradeIcons(props)}
                </Form.Group>
            }
        </>
    )
}

function mapForTradeIcons(props) {
    // console.log(props.for_trade + ", type: " + typeof(props.for_trade));
    if (props.for_trade === true) {
        return <img alt="For Trade? Yes"
                    src="./icons/noun_true_2049512.svg"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        for_trade: false,
                        editMode: true
                    })}/>
    } else if (props.for_trade === false) {
        return <img alt="For Trade? No"
                    src="./icons/noun_False_2049513.svg"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        for_trade: true,
                        editMode: true
                    })}/>
    } else {
        return <img alt="For Trade? Unknown"
                    src="./icons/trade-question-solid.svg"
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
