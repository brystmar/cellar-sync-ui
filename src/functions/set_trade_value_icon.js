function set_trade_value_icon(trade_value) {
    if (trade_value) {
        if (trade_value === 1) {
            trade_value = "⬆"
        } else if (trade_value === 2) {
            trade_value = "⬌"
        } else if (trade_value === 3) {
            trade_value = "⬇"
        } else {
            trade_value = ""
        }
    } else {
        trade_value = ""
    }

    return trade_value;
}

export default set_trade_value_icon;
