import React from 'react';

function set_for_trade_icon(for_trade) {
    if (for_trade === true) {
        return <img src="./icons/noun_true_2049512.svg"
                    alt="For Trade? Yes."
                    className="list-item-icon-value clickable-toggle"/>
    } else if (for_trade === false) {
        return <img src="./icons/noun_False_2049513.svg"
                    alt="For Trade? No."
                    className="list-item-icon-value clickable-toggle"/>
    } else {
        return <i className="fas fa-question clickable-toggle"/>
    }
}

export default set_for_trade_icon;
