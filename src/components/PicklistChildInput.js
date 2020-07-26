import React from 'react';

function PicklistChildInput(props) {
    function handleChange(event) {
        props.updatePicklist(props.index, event.target.value)
    }

    return (
        <input type="text"
               name="inputPicklistChild"
               className="picklist-child-values"
               value={props.value}
               onChange={handleChange}
        />
    )
}

PicklistChildInput.defaultProps = {
    index: 0,
    value: ""
}

export default PicklistChildInput;
