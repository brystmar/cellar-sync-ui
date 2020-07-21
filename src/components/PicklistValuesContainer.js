import React from 'react';
import parse_picklists from '../functions/parse_picklists';
import PicklistValues from "./PicklistValues";

function PicklistValuesContainer(props) {
    // TODO: Make the picklist container less janky
    // Build a list of the names of each picklist
    let picklistNames = [], parentTabs = "", childTabData = "";
    for (let picklist of props.data) {
        picklistNames.push(picklist.list_name)
    }

    if (props.data.length > 0) {
        // realData =
        //     <Tabs defaultActiveKey="location" id="picklist-values-container">
        //         <Tab eventKey="location" title="Location">
        //             <PicklistValues data={picklistData.location}
        //                             picklistName="location"
        //                             updatePicklist={props.updatePicklist}/>
        //         </Tab>
        //         <Tab eventKey="size" title="Size">
        //             <PicklistValues data={picklistData.size}
        //                             picklistName="size"
        //                             updatePicklist={props.updatePicklist}/>
        //         </Tab>
        //         <Tab eventKey="style" title="Style">
        //             <StylePicklistValues data={picklistData.style}
        //                                  picklistName="style"
        //                                  updatePicklist={props.updatePicklist}/>
        //         </Tab>
        //     </Tabs>

        parentTabs = picklistNames.map(
            picklistName => <button type="button"
                                    key={picklistName}
                                    className="picklist-tab-nav picklist-tab-parent"
                                    onClick={() => parseChildTabData(picklistName)}>{picklistName}</button>)
    }

    function parseChildTabData(parentTabName) {
        let data = parse_picklists(props.data, parentTabName);
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
        childTabData = data.map(item =>
            <input type="text"
                   key={item.value}
                   className={"picklist-tab-values picklist-" + parentTabName}
                   value={item.value}
                   onChange={() => props.updatePicklist(parentTabName, item.value)}
            />);
        // console.log("PLV data:", parse_picklists(props.data, parentTabName))
    }

    return (
        <div className="picklist-values-container">
            <span className="picklist-tab-nav-parent">{parentTabs}</span>
            <span className="picklist-tab-nav-child">{childTabData}</span>
            <span className="picklist-tab-nav-grandchild">Grandchild</span>
        </div>
    )
}

PicklistValuesContainer.defaultProps = {
    data: []
}

export default PicklistValuesContainer;
