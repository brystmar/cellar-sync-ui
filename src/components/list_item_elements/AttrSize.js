import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrSize(props) {
    let sizes = props.picklistData.map(size =>
        <option key={size.value}>{size.value}</option>);

    // Add a null value if this is for adding a new beverage
    if (props.forNewBeverage) {
        sizes.unshift(<option key={"null"} value={""}>{""}</option>);
    }

    function handleChange(event) {
        const {name, value} = event.target;

        // Update parent beverage state
        props.updateBeverageState({
            [name]: value,
            editMode: true
        })
    }

    return (
        <Form.Group controlId="formSize">
            <img alt="Size"
                 src="./icons/wine-bottle-solid.svg"
                 className="list-item-icon-key"/>
            {props.forNewBeverage ? <Form.Label>Size</Form.Label> : ""}

            <Form.Control as="select"
                          name="size"
                          size="sm"
                          disabled={!props.forNewBeverage}
                          className="picklist-selector list-item-value"
                          value={props.size}
                          onChange={handleChange}>
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
