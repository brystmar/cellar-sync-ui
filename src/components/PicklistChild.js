import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import parse_picklists from '../functions/parse_picklists';
import PicklistChildInput from "./PicklistChildInput";

function PicklistChild(props) {
    let childListDisplay = "", grandchildData = "";
    const {picklistChildName} = useParams();
    const {picklistGrandchildName} = useParams();

    function handleChange(index, newValue) {
        console.log("Called handleChange(", index, newValue, ")");
        let newPicklistData = childList;
        console.log(newPicklistData);
        newPicklistData[index].value = newValue;
        console.log(newPicklistData);
        updateChildList(newPicklistData);
    }

    // Parse the data for this picklist
    let picklistData = parse_picklists(props.data, picklistChildName);

    // Sort by display_order (if provided), or by value.
    if (Object.keys(picklistData[0]).indexOf('display_order') > -1) {
        picklistData = picklistData.sort(
            (a, b) => parseFloat(a.display_order) - parseFloat(b.display_order));
    } else {
        picklistData = picklistData.sort(
            (a, b) => parseFloat(a.value) - parseFloat(b.value));
    }

    let [childList, updateChildList] = useState(picklistData);

    // Map to a structured input
    // console.log("Data to structure:", picklistData);
    console.log(childList, picklistData);
    childListDisplay = childList.map((item, index) =>
        <PicklistChildInput index={index}
                            name="inputPicklistChild"
                            key={index}
                            value={childList[index].value}
                            updatePicklist={handleChange}
        />);

    return (
        <>
            {childListDisplay}
            <p onClick={() => {
                console.log(childList, picklistData)
                updateChildList(picklistData)
            }}>
                Click me to refresh & log
            </p>
        </>
    )
}

PicklistChild.defaultProps = {
    data: [
        {
            display_order: "",
            value: ""
        }
    ]
}

export default PicklistChild;
