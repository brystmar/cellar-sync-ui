import React from 'react';
import Form from 'react-bootstrap/Form';

function StylePicklistValues(props) {
    let orderedData = props.data.sort((a, b) => parseFloat(a.value) - parseFloat(b.value));
    let styles = orderedData.map(item => {
        let styleDisplay = <Form.Control type="text"
                                         key={item.value}
                                         className="picklist-tab-values"
                                         rows={1}
                                         defaultValue={item.value}/>;
        let subStyles = [styleDisplay];

        if (Object.keys(item).indexOf('dependent_values') > -1 && item.dependent_values.length > 0) {
            // Include components for the dependent values
            for (let i = 0; i < item.dependent_values.length; i++) {
                subStyles.push(<Form.Control type="text"
                                             key={item.dependent_values[i]}
                                             className="picklist-tab-values substyle-display"
                                             rows={1}
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
            value: "Default Style",
            display_order: 0,
            dependent_values: [
                "Default 1.1", "Default 1.2"
            ]
        },
        {
            value: "Ratbier",
            display_order: 1,
            dependent_values: [
                "Curie", "Ratøn"
            ]
        },
    ]
}

export default StylePicklistValues;
