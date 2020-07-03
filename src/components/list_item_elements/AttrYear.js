import React from 'react';

function AttrYear(props) {
    return (
        <span className="input-year input-group">
            <span className="list-item-key">
                <span className="list-item-key-icon-container">
                    <img alt="Year" src="./icons/calendar-alt-regular.svg"/>
                </span>
                <label className="list-item-label-sm"
                       hidden={props.forNewBeverage}>Year</label>
            </span>

            <input name="year"
                   type="number"
                   min={1950}
                   max={(new Date()).getFullYear() + 1}
                   placeholder="YYYY"
                   className="input-number input-year list-item-value"
                   disabled={props.forNewBeverage}
                   value={props.year}
                   onChange={props.handleChange}
                   required={true}/>
        </span>
    )
}

AttrYear.defaultProps = {
    year: (new Date()).getFullYear(),
    forNewBeverage: false
}

export default AttrYear;
