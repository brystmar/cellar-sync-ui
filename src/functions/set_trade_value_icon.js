import React from 'react';

function set_trade_value_icon(trade_value) {
    if (trade_value) {
        if (trade_value === 1) {
            return <i className="fas fa-arrow-alt-circle-up"/>
        } else if (trade_value === 2) {
            return <i className="fas fa-arrows-alt-h"/>
        } else if (trade_value === 3) {
            return <i className="fas fa-arrow-alt-circle-down"/>
        } else {
            return <i className="fas fa-arrows-alt-h"/>
        }
    } else {
        return <i className="fas fa-arrows-alt-h"/>
    }
}

export default set_trade_value_icon;
