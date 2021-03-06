import React from 'react';

function AttrTrade(props) {
    return (
        <>
            <span className="input-trade input-group">
                <span className="list-item-key">
                    <span className="list-item-key-icon-container">
                        <img alt="For Trade?" src="./icons/exchange-alt-solid.svg"/>
                    </span>
                    <label className="list-item-label-lg">
                        For Trade
                    </label>
                </span>
                <span className="list-item-value clickable-toggle">
                    {mapForTradeIcons(props)}
                </span>
            </span>
        </>
    )
}

function mapForTradeIcons(props) {
    if (props.for_trade === true) {
        return <img alt="For Trade? Yes"
                    src="./icons/noun_true_2049512.svg"
                    onClick={() => props.updateBeverageState({
                        for_trade: false,
                        editMode: true
                    })}/>
    } else if (props.for_trade === false) {
        return <img alt="For Trade? No"
                    src="./icons/noun_False_2049513.svg"
                    onClick={() => props.updateBeverageState({
                        for_trade: true,
                        editMode: true
                    })}/>
    } else {
        return <img alt="For Trade? Unknown"
                    src="./icons/trade-question-solid.svg"
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
