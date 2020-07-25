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

    return (
        <div className="picklist-values-container">
            <div className="picklist-nav-parent picklist-container">
                {picklistNames.map(picklistName =>
                    <li key={picklistName}>
                        <NavLink to={`/picklists/${picklistName}`}>{picklistName}</NavLink>
                    </li>)}
            </div>

            <div className="picklist-nav-child picklist-container">
                <Route exact path={`/picklists/:picklistName`}>
                    <PicklistChild data={props.data}
                                   updatePicklist={props.updatePicklist}/>
                </Route>
            </div>

            <div className="picklist-nav-grandchild picklist-container">

            </div>
        </div>
    )
}

PicklistValuesContainer.defaultProps = {
    data: []
}

export default PicklistValuesContainer;
