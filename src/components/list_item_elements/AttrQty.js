import React from 'react';

function AttrQty(props) {
    return (
        <>
            <span className="input-qty input-group">
                <span className="list-item-key">
                    <span className="list-item-key-icon-container">
                        <img alt="Qty (Overall)" src="./icons/hashtag-solid.svg"/>
                    </span>
                    <label className="list-item-label-sm"
                           hidden={props.forNewBeverage}>Qty</label>
                </span>

                <input name="qty"
                       type="number"
                       min={0}
                       max={99}
                       placeholder="#"
                       className="input-number list-item-value input-qty"
                       value={props.qty}
                       onChange={props.handleChange}
                       onBlur={props.handleChange}/>
            </span>

            <span className="input-qty-cold input-group">
                <span className="list-item-key">
                    <span className="list-item-key-icon-container">
                        <img alt="Qty (Cold)" src="./icons/snowflake-regular.svg"/>
                    </span>
                    <label className="list-item-label-sm"
                           hidden={props.forNewBeverage}>Cold</label>
                </span>

                <input name="qty_cold"
                       type="number"
                       min={0}
                       max={props.qty}
                       placeholder="#"
                       className="input-number list-item-value input-qty"
                       value={props.qty_cold}
                       onChange={props.handleChange}
                       onBlur={props.handleChange}/>
            </span>
        </>
    )
}

AttrQty.defaultProps = {
    qty: 0,
    qty_cold: 0,
    forNewBeverage: false
}

export default AttrQty;
