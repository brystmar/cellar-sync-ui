import React from 'react';
import Form from 'react-bootstrap/Form';

function LocationPicklist(props) {
    let orderedData = props.data.sort((a, b) => parseFloat(a.display_order) - parseFloat(b.display_order));
    let locations = orderedData.map(item =>
        <Form.Control type="text"
                      key={item.value}
                      className="picklist-tab-values"
                      rows={1}
                      defaultValue={item.value}/>);
    console.log(locations)
    return (
        <>
            {locations}
        </>
    )
}

LocationPicklist.defaultProps = {
    data: [{
        value: "",
        display_order: 0
    }]
}

export default LocationPicklist;
