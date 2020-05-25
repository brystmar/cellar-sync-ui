import React from 'react';

function PicklistValues(props) {
    return (
        <div className="picklist-values">
            <h1>
                Props:
            </h1>
            <p>
                {props}
            </p>
        </div>
    )
}

PicklistValues.defaultProps = {
    location: ['Default', 'Home', 'Wine Storage'],
    size: ['Defaults', '750 mL', '22 oz', '500 mL', '375 mL'],
    style: ['Defaults', 'Rauchbier', 'Rat Beer']
}

export default PicklistValues;
