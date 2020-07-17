import React from 'react';

function AttrSize(props) {
    let sizes = props.picklistData.map(size =>
        <option key={size.value}>{size.value}</option>);

    // Add a null value if this is for adding a new beverage
    if (props.forNewBeverage) {
        sizes.unshift(<option key={"null"} value={""}>{""}</option>);
    }

    return (
        <span className="input-size input-group">
            <span className="list-item-key">
                <span className="list-item-key-icon-container">
                    <img alt="Size" src="./icons/wine-bottle-solid.svg"/>
                </span>
                <label className="list-item-label-sm"
                       hidden={props.forNewBeverage}>Size</label>
            </span>

            <select name="size"
                    size="sm"
                    disabled={props.forNewBeverage}
                    className="input-picklist-sm list-item-value"
                    value={props.size}
                    onChange={props.handleChange}
                    required={true}>
                {sizes}
            </select>
        </span>
    )
}

AttrSize.defaultProps = {
    size: "375 mL",
    forNewBeverage: false,
    picklistData: {
        value: "",
        display_order: 0
    }
}

export default AttrSize;
