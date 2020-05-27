import React from 'react';
import Form from 'react-bootstrap/Form';

function StylePicklist(props) {
    let orderedData = props.data.sort((a, b) => parseFloat(a.value) - parseFloat(b.value));
    let styles = orderedData.map(item =>
        <Form.Control type="text"
                      key={item.value}
                      className="picklist-tab-values"
                      rows={1}
                      defaultValue={item.value}/>);
    return (
        <>
            {styles}
        </>
    )
}

StylePicklist.defaultProps = {
    data: [{
        value: "",
        display_order: 0,
        dependent_values: [
            "", ""
        ]
    }]
}

export default StylePicklist;
