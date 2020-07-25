import React from 'react';
import parse_picklists from '../functions/parse_picklists';

function PicklistChild(props) {
    let data = parse_picklists(props.data, props.parentTabName);
    // Sort by display_order, when provided
    if (Object.keys(data[0]).indexOf('display_order') > -1) {
        // console.log("Sorting by display_order")
        data = data.sort(
            (a, b) => parseFloat(a.display_order) - parseFloat(b.display_order));
    } else {
        // console.log("Sorting by value")
        data = data.sort(
            (a, b) => parseFloat(a.value) - parseFloat(b.value));
    }

    // Map to a structured input
    console.log("Data to structure:", data);
    let childTabData = data.map(item =>
        <p> type="text"
            key={item.value}
            className={"picklist-tab-values picklist-" + props.parentTabName}
            value={item.value}
            onChange={() => props.updatePicklist(props.parentTabName, item.value)}
        </p>);
    console.log(JSON.stringify(childTabData));
    // console.log("PLV data:", parse_picklists(props.data, parentTabName))
}

PicklistChild.defaultProps = {
    parentTabName: "",
    data: []
}

export default PicklistChild;
