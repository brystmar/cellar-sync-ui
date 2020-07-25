import React from 'react';
import {useParams} from 'react-router-dom';
import parse_picklists from '../functions/parse_picklists';

function PicklistChild(props) {
    let {picklistName} = useParams(), childTabData = "";

    if (props.data.length > 0) {
        let picklistData = parse_picklists(props.data, picklistName);
        console.log(picklistData, picklistData.length);

        // Sort by display_order, when provided
        if (Object.keys(picklistData[0]).indexOf('display_order') > -1) {
            console.log("Sorting by display_order")
            picklistData = picklistData.sort(
                (a, b) => parseFloat(a.display_order) - parseFloat(b.display_order));
        } else {
            console.log("Sorting by value")
            picklistData = picklistData.sort(
                (a, b) => parseFloat(a.value) - parseFloat(b.value));
        }

        // Map to a structured input
        console.log("Data to structure:", picklistData);
        childTabData = picklistData.map(item =>
            <input type="text"
                   key={item.value}
                   className="picklist-child-values"
                   value={item.value}
                   onChange={() => props.updatePicklist(picklistName, item.value)}
            />);
    }

    return (
        <>
            {childTabData}
        </>
    )
}

PicklistChild.defaultProps = {
    data: []
}

export default PicklistChild;
