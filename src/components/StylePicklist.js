import React from 'react';
import Form from 'react-bootstrap/Form';

function StylePicklist(props) {
    let orderedData = props.data.sort((a, b) => parseFloat(a.value) - parseFloat(b.value));
    console.log("OD:");
    console.log(orderedData);

    let styles = orderedData.map(item => {
        let styleDisplay = <Form.Control type="text"
                                         key={item.value}
                                         className="picklist-tab-values"
                                         rows={1}
                                         defaultValue={item.value}/>;
        let subStyles = "";

        if ('dependent_values' in Object.keys(item) && item.dependent_values.length > 0) {
            // Include components for the dependent values
            for (let i = 0; i < item.dependent_values.length; i++) {
                subStyles += <Form.Control type="text"
                                           className="substyle-display"
                                           rows={1}
                                           defaultValue={item.dependent_values[i]}/>;

            }
        }

        return styleDisplay + subStyles;
    });

    return (
        <>
            {styles}
        </>
    )
}

StylePicklist.defaultProps = {
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

export default StylePicklist;
