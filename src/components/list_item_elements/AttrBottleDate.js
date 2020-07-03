import React from 'react';

function AttrBottleDate(props) {
    return (
        <span className="input-bottle-date input-group">
            <span className="list-item-key">
                <span className="list-item-key-icon-container">
                    <img alt="Bottle Date" src="./icons/calendar-check-regular.svg"/>
                </span>
                <label className="list-item-label-lg"
                       hidden={props.forNewBeverage}>Bottle Date</label>
            </span>

            <input name="bottle_date"
                   type="text"
                   value={props.bottle_date}
                   placeholder="YYYY-MM-DD"
                   className="input-text list-item-value"
                   onChange={props.handleChange}
                   disabled={props.forNewBeverage}/>
        </span>
    )
}

AttrBottleDate.defaultProps = {
    bottle_date: "",
    forNewBeverage: false
}

export default AttrBottleDate;
