import React from 'react';

function AttrTrade(props) {
    return (
        <>
            <td className="list-item-table-key">
                <i className="fas fa-exchange-alt"/>
            </td>
            <td className="list-item-table-value">
                {mapForTradeIcons(props)}
            </td>
        </>
    )
}

function mapForTradeIcons(props) {
    console.log(props.for_trade + ", type: " + typeof(props.for_trade));
    if (props.for_trade === true) {
        return <img src="./icons/noun_true_2049512.svg"
                    alt="For Trade? Yes"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        for_trade: !props.for_trade,
                        editMode: true
                    })}/>
    } else if (props.for_trade === false) {
        return <img src="./icons/noun_False_2049513.svg"
                    alt="For Trade? No"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        for_trade: !props.for_trade,
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

export default AttrTrade;