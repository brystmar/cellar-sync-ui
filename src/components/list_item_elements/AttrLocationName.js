import React from 'react';

function AttrLocationName(props) {
    let locations = props.picklistData.map(location =>
        <option key={location.value}>{location.value}</option>);

    // Add a null value if this is for adding a new beverage
    if (props.forNewBeverage) {
        locations.unshift(<option key={"null"} value={""}>{""}</option>);
    }

    return (
        <span className="input-loc input-group">
            <span className="list-item-key">
                <span className="list-item-key-icon-container">
                    <img alt="Location" src="./icons/map-marked-alt-solid.svg"/>
                </span>
                <label className="list-item-label-med"
                       hidden={props.forNewBeverage}>Location</label>
            </span>

            <select name="location"
                    size="sm"
                    disabled={props.forNewBeverage}
                    className="input-picklist-sm list-item-value"
                    value={props.location}
                    onChange={props.handleChange}
                    required={true}>
                {locations}
            </select>
        </span>
    )
}

AttrLocationName.defaultProps = {
    location: "",
    forNewBeverage: false,
    picklistData: {
        value: "",
        display_order: 0
    }
}

export default AttrLocationName;
