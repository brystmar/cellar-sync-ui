import React from 'react';

function SizePicklistValues(props) {
    let orderedData = props.data.sort((a, b) => parseFloat(a.display_order) - parseFloat(b.display_order));
    let sizes = orderedData.map(item =>
        <input type="text"
               key={item.value}
               className="picklist-tab-values"
               defaultValue={item.value}/>);
    // console.log("Size props:")
    // console.log(props)
    return (
        <>
            {sizes}
        </>
    )
}

SizePicklistValues.defaultProps = {
    data: [
        {
            value: "Default",
            display_order: 0
        },
        {
            value: "12 oz",
            display_order: 1
        }
    ]
}

export default SizePicklistValues;
