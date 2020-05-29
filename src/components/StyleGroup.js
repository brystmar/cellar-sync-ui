import React from 'react';
import Form from "react-bootstrap/Form";

function StyleGroup(props) {
    return (
        <>
            <Form.Control type="text"
                          key={props.style}
                          className="picklist-tab-values"
                          rows={1}
                          defaultValue={props.style}/>
        </>
    )
}

StyleGroup.defaultProps = {
    style: "Default",
    sub_styles: []
}

export default StyleGroup;
