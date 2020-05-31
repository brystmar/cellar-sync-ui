import React from 'react';
import Form from "react-bootstrap/Form";

function AttrStyle(props) {
    let styles = props.picklistData.map(style =>
        <option key={style.value}>{style.value}</option>);

    // TODO: Fill the specific_style picklist with the correct dependent values
    let specific_styles = []; //= <option key={"null"}>&nbsp;</option>;
    let i = 0;
    console.log(props);

    while (i < props.picklistData[0].dependent_values.length) {
        specific_styles.push(<option key={props.picklistData[0].dependent_values[i]}>{props.picklistData[0].dependent_values[i]}</option>);
        i += 1;
    }

    return (
        <>
            <td className="list-item-table-key">
                <img src="./icons/noun_Beer_style1_1975813.svg"
                     alt="Style"
                     className="list-item-icon-key"/>
            </td>
            <td className="list-item-table-value"
                onClick={() => props.updateBeverageState({editMode: true})}>
                <Form.Control as="select"
                              className="picklist-selector"
                              defaultValue={props.style}>
                    <option key={"null"}>&nbsp;</option>
                    {styles}
                </Form.Control>
            </td>

            <td className="list-item-table-key">
                <img src="./icons/noun_Beer_style2_5693.svg"
                     alt="Specific Style"
                     className="list-item-icon-key"/>
            </td>
            <td className="list-item-table-value"
                onClick={() => props.updateBeverageState({editMode: true})}>
                {props.specific_style}
                <Form.Control as="select"
                              className="picklist-selector"
                              defaultValue={props.specific_style}>
                    {specific_styles}
                </Form.Control>
            </td>
        </>
    )
}

AttrStyle.defaultProps = {
    style: "",
    specific_style: "",
    picklistData: {
        value: "",
        display_order: 0,
        dependent_values: [
            ""
        ]
    }
}

export default AttrStyle;
