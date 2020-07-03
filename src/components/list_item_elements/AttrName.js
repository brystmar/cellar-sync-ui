import React from 'react';

function AttrName(props) {
    return (
        <span className="input-group input-name">
            <span className="list-item-key">
                <span className="list-item-key-icon-container">
                    <img alt="Beverage Name" src="./icons/nametag.svg"/>
                </span>
                <label className="list-item-label-sm">Name</label>
            </span>
            <input type="text"
                   name="name"
                   className="list-item-value input-text"
                   placeholder="Beverage Name"
                   value={props.name}
                   onChange={props.handleChange}
                   required={true}/>
        </span>
    )
}

AttrName.defaultProps = {
    name: "",
    forNewBeverage: false
}

export default AttrName;
