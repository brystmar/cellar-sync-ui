import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import PicklistChild from './PicklistChild';

function PicklistValuesContainer(props) {
    // TODO: Make the picklist container less janky
    // Build a list of the names of each picklist
    let picklistNames = [];
    for (let picklist of props.data) {
        picklistNames.push(picklist.list_name)
    }

    // Sort the list of picklists alphabetically
    picklistNames.sort();

    return (
        <div className="picklist-values-container">
            {/* Picklists */}
            <div className="picklist-nav-parent picklist-container">
                {picklistNames.map(picklistName =>
                    <li key={picklistName}>
                        <NavLink to={`/picklists/${picklistName}`}>{picklistName}</NavLink>
                    </li>)}
            </div>

            {/* Selectable options for each picklist */}
            <div className="picklist-nav-child picklist-container">
                <Route exact path={`/picklists/:picklistChildName`}>
                    <PicklistChild data={props.data}
                                   updatePicklist={props.updatePicklist}/>
                </Route>
            </div>

            {/* Some lists have a second-level dependent picklist */}
            <div className="picklist-nav-grandchild picklist-container">
                <Route exact path={`/picklists/:picklistChildName/:picklistGrandchildName`}>
                    <PicklistChild data={props.data}
                                   updatePicklist={props.updatePicklist}/>
                </Route>
            </div>
        </div>
    )
}

PicklistValuesContainer.defaultProps = {
    data: []
}

export default PicklistValuesContainer;
