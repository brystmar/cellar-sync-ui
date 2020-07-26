import React, {useState} from 'react';
import {NavLink, Route, useParams} from 'react-router-dom';
import parse_picklists from '../functions/parse_picklists';
import PicklistChildInput from "./PicklistChildInput";
import PicklistGrandchild from "./PicklistGrandchild";

function PicklistChild(props) {
    let childListDisplay = [];
    const {picklistChildName} = useParams();
    const [hidden, toggleHidden] = useState(true);
    console.log("Child:", picklistChildName);

    function handleChildChange(index, newValue) {
        console.log("Called handleChildChange(", index, newValue, ")");
        console.log(props.data);
        let newPicklistData = parse_picklists(props.data, picklistChildName);
        console.log("Before update:", newPicklistData);
        newPicklistData[index].value = newValue;
        console.log("After update:", newPicklistData);
    }

    function handleGrandchildChange(index, newValue) {
        console.log("Called handleGrandchildChange(", index, newValue, ")");
        console.log(props.data);
        let newPicklistData = parse_picklists(props.data, picklistChildName);
        console.log("Before update:", newPicklistData);
        newPicklistData[index].value = newValue;
        console.log("After update:", newPicklistData);
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

    // console.log("PicklistData:", picklistData);
    for (let i = 0; i < picklistData.length; i++) {
        // Does this picklist have dependent values to render?
        if (Object.keys(picklistData[i]).indexOf('dependent_values') > -1) {
            childListDisplay.push(
                <NavLink to={`/picklists/${picklistChildName}/${picklistData[i].value}`}
                         key={picklistData[i].value}>
                    {picklistData[i].value}
                </NavLink>)
        } else {
            childListDisplay.push(
                <PicklistChildInput name="inputPicklistChild"
                                    value={picklistData[i].value}
                                    key={picklistData[i].value}
                                    classToApply="picklist-child-values"
                                    onClick={() => toggleHidden(true)}
                                    updatePicklist={handleChildChange}/>)
        }
    }

    return (
        <>
            <div className="picklist-nav-child picklist-container">
                {childListDisplay}
            </div>

            {/* Some lists have a second-level dependent picklist */}
            <Route exact path={`/picklists/:picklistChildName/:picklistGrandchildName`}>
                {picklistData.length > 0 ?
                    <PicklistGrandchild
                        values={picklistData}  // TODO: How to send only the specific picklist data?
                        parentName={picklistChildName}
                        updatePicklist={handleChildChange}/>
                    : ""}
            </Route>
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
