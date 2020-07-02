import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrSize(props) {
    let sizes = props.picklistData.map(size =>
        <option key={size.value}>{size.value}</option>);

    // Add a null value if this is for adding a new beverage
    if (props.forNewBeverage) {
        sizes.unshift(<option key={"null"} value={""}>{""}</option>);
    }

    return (
        <Form.Group controlId="formSize" className="input-size input-group">
            <span className="list-item-key">
                <img alt="Size"
                     src="./icons/wine-bottle-solid.svg"
                     className="list-item-key-icon"/>
                <Form.Label hidden={props.forNewBeverage}>Size</Form.Label>
            </span>

            <Form.Control as="select"
                          name="size"
                          size="sm"
                          disabled={!props.forNewBeverage}
                          className="input-picklist-sm list-item-value"
                          value={props.size}
                          onChange={props.handleChange}
                          required={true}>
                {sizes}
            </Form.Control>
        </Form.Group>
    )
}

AttrSize.defaultProps = {
    size: "",
    forNewBeverage: false,
    picklistData: {
        value: "",
        display_order: 0
    }
}

export default AttrSize;
