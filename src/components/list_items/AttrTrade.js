import React from 'react';

function AttrTrade(props) {
    let forTrade = <i className="fas fa-question clickable-toggle"/>;
    if (props.for_trade === true) {
        forTrade = <img src="./icons/noun_true_2049512.svg"
                        alt="For Trade? Yes."
                        className="list-item-icon-value clickable-toggle"/>
    } else if (props.for_trade === false) {
        forTrade = <img src="./icons/noun_False_2049513.svg"
                        alt="For Trade? No."
                        className="list-item-icon-value clickable-toggle"/>
    }

    return (
        <>
            <td className="list-item-table-key">
                {/*<span className="svg-inline--fa">⇆</span>*/}
                <i className="fas fa-exchange-alt"/>
            </td>
            <td className="list-item-table-value">
                {forTrade}
            </td>
        </>
    )
}

export default AttrTrade;
