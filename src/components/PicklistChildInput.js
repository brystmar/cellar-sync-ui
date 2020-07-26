import React from 'react';

function PicklistChildInput(props) {
    function handleChange(event) {
        props.updatePicklist(props.index, event.target.value)
    }

    return (
        <input type="text"
               name={props.name}
               className={props.classToApply}
               value={props.value}
               onChange={handleChange}
        />
    )
}

PicklistChildInput.defaultProps = {
    index: 0,
    value: "",
    classToApply: "",
    name: ""
}

export default PicklistChildInput;
