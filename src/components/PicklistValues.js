import React from 'react';

function PicklistValues(props) {
    console.log("Running PVs");
    let orderedData;
    // Sort by display_order, when provided
    if (Object.keys(props.data[0]).indexOf('display_order') > -1) {
        orderedData = props.data.sort(
            (a, b) => parseFloat(a.display_order) - parseFloat(b.display_order));
    } else {
        orderedData = props.data.sort(
            (a, b) => parseFloat(a.value) - parseFloat(b.value));
    }

    // Map to a structured input
    let picklistValues = orderedData.map(item =>
        <input type="text"
               key={item.value}
               className={"picklist-tab-values picklist-" + props.picklistName}
               value={item.value}
               onChange={() => props.updatePicklist(props.picklistName, item.value)}
        />);
    console.log("pV props:", props)
    return picklistValues
}

PicklistValues.defaultProps = {
    data: [{
        value: "",
        display_order: 0,
        dependent_values: [""]
    }],
    picklistName: ""
}

export default PicklistValues;
