import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrSize(props) {
    const sizes = props.picklistData.map(size =>
        <option key={size.value}>{size.value}</option>);

    return (
        <Form.Group controlId="formSize">
            <Form.Label>
                <img src="./icons/wine-bottle-solid.svg"
                     alt="Size"
                     className="list-item-icon-key"/>
                {props.forNewBeverage ? "Size" : ""}
            </Form.Label>
            <Form.Control as="select"
                          name="size"
                          size="sm"
                          disabled={true}
                          className="picklist-selector list-item-value"
                          defaultValue={props.size}>
                {sizes}
            </Form.Control>
        </Form.Group>
    )
}

AttrSize.defaultProps = {
    size: "",
    forNewBeverage: false,
    picklistData: {
        value: "375 mL",
        display_order: 0
    }
}

export default AttrSize;
