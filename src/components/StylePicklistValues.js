import React from 'react';

function StylePicklistValues(props) {
    let orderedData = props.data.sort(
        (a, b) => parseFloat(a.value) - parseFloat(b.value));
    // console.log("Ordered Data:", orderedData);
    let styles = orderedData.map(item => {
        let styleDisplay = <input type="text"
                                  key={item.value}
                                  className="picklist-tab-values"
                                  defaultValue={item.value}/>;
        let subStyles = [styleDisplay];

        if (Object.keys(item).indexOf('dependent_values') > -1 && item.dependent_values.length > 0) {
            // Include components for the dependent values
            for (let i = 0; i < item.dependent_values.length; i++) {
                subStyles.push(<input type="text"
                                      key={item.dependent_values[i]}
                                      className="picklist-tab-values substyle-display"
                                      defaultValue={item.dependent_values[i]}/>);
            }
        }

        return subStyles;
    });

    return (
        <>
            {styles}
        </>
    )
}

StylePicklistValues.defaultProps = {
    data: [
        {
            value: "",
            display_order: 0,
            dependent_values: [""]
        }
    ]
}

export default StylePicklistValues;
