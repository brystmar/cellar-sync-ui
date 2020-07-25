import React from 'react';
import {NavLink} from 'react-router-dom';

function PicklistValuesContainer(props) {
    // TODO: Make the picklist container less janky
    // Build a list of the names of each picklist
    let picklistNames = [], parentTabs = "", childTabData = "";
    for (let picklist of props.data) {
        picklistNames.push(picklist.list_name)
    }

    if (props.data.length > 0) {
        //             <PicklistValues data={picklistData.location}
        //                             picklistName="location"
        //                             updatePicklist={props.updatePicklist}/>
        //             <StylePicklistValues data={picklistData.style}
        //                                  picklistName="style"
        //                                  updatePicklist={props.updatePicklist}/>

        parentTabs = picklistNames.map(picklistName =>
            <li key={picklistName}>
                <NavLink to={`/picklists/${picklistName}`}>{picklistName}</NavLink>
            </li>)
    }

    return (
        <div className="picklist-values-container">
            <ul className="picklist-tab-nav-parent">
                {parentTabs}
            </ul>
        </div>
    )
}

PicklistValuesContainer.defaultProps = {
    data: []
}

export default PicklistValuesContainer;
