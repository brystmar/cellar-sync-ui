import React from 'react';

function AttrTrade(props) {
    return (
        <>
            <td className="list-item-table-key">
                {/*<span className="svg-inline--fa">⇆</span>*/}
                <i className="fas fa-exchange-alt"/>
            </td>
            <td className="list-item-table-value">
                {mapForTradeIcons(props)}
            </td>
        </>
    )
}

function mapForTradeIcons(props) {
    if (props.for_trade === true) {
        return <img src="./icons/noun_true_2049512.svg"
                    alt="For Trade? Yes"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({for_trade: !props.for_trade})}/>
    } else if (props.for_trade === false) {
        return <img src="./icons/noun_False_2049513.svg"
                    alt="For Trade? No"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({for_trade: !props.for_trade})}/>
    } else {
        return <img src="./icons/trade-question-solid.svg"
                    alt="For Trade? Unknown"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({for_trade: true})}/>;
    }
}

export default AttrTrade;
