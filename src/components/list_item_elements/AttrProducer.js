import React from 'react';

function AttrProducer(props) {
    return (
        <span className="input-producer input-group">
            <span className="list-item-key">
                <span className="list-item-key-icon-container">
                    <img alt="Producer" src="./icons/address-card-regular.svg"/>
                </span>
                <label className="list-item-label-med">Producer</label>
            </span>
            <input type="text"
                   name="producer"
                   className="list-item-value input-text"
                   placeholder="Brewery / Winery"
                   value={props.producer}
                   onChange={props.handleChange}
                   id="formBevProducer"
                   autoFocus={true}
                   required={true}/>
        </span>
    )
}

AttrProducer.defaultProps = {
    producer: "",
    forNewBeverage: false
}

export default AttrProducer;
