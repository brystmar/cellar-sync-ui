import React from 'react';
import {useParams} from 'react-router-dom';

function PicklistGrandchild(props) {
    const {picklistGrandchildName} = useParams();
    let picklistGcList = props.values.filter(obj => obj.value === picklistGrandchildName);

    let grandchildInputs = picklistGcList[0].dependent_values.map(
        item => <input type="text"
                       value={item}
                       key={item}
                       className="picklist-grandchild-values"
                       onChange={props.updatePicklist}
        />
    )

    return (
        <div className="picklist-nav-grandchild picklist-container">
            {grandchildInputs}
        </div>
    )
}

PicklistGrandchild.defaultProps = {
    values: [{
        value: "",
        dependent_values: [""]
    }],
    parentName: ""
}

export default PicklistGrandchild;
