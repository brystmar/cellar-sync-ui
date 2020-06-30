import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrQty(props) {
    return (
        <>
            <Form.Group controlId="formQty" className="input-qty input-group">
                <span className="list-item-key">
                    <img alt="Qty (Overall)"
                         src="./icons/hashtag-solid.svg"
                         className="list-item-key-icon"/>
                    <Form.Label hidden={props.forNewBeverage}>Qty</Form.Label>
                </span>

                <Form.Control name="qty"
                              type="number"
                              min={0}
                              max={99}
                              placeholder="#"
                              className="input-number list-item-value input-qty"
                              value={props.qty}
                              onChange={props.handleChange}
                              onBlur={props.handleChange}/>
            </Form.Group>

            <Form.Group controlId="formQtyCold" className="input-qty-cold input-group">
                <span className="list-item-key">
                    <img alt="Qty (Cold)"
                         src="./icons/snowflake-regular.svg"
                         className="list-item-key-icon"/>
                    <Form.Label hidden={props.forNewBeverage}>Cold</Form.Label>
                </span>

                <Form.Control name="qty_cold"
                              type="number"
                              min={0}
                              max={props.qty}
                              placeholder="#"
                              className="input-number list-item-value input-qty"
                              value={props.qty_cold}
                              onChange={props.handleChange}
                              onBlur={props.handleChange}/>
            </Form.Group>
        </>
    )
}

AttrQty.defaultProps = {
    qty: 0,
    qty_cold: 0,
    forNewBeverage: false
}

export default AttrQty;
