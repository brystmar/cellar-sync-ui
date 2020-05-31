import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrSize(props) {
    const sizes = props.picklistData.map(size =>
        <option key={size.value}>{size.value}</option>);

    return (
        <>
            <td className="list-item-table-key">
                <img src="./icons/wine-bottle-solid.svg"
                     alt="Bottle Size"
                     className="list-item-icon-key"/>
            </td>
            <td className="list-item-table-value"
                onClick={() => props.updateBeverageState({editMode: true})}>
                <Form.Control as="select"
                              className="picklist-selector"
                              defaultValue={props.size}>
                    {sizes}
                </Form.Control>
            </td>
        </>
    )
}

AttrSize.defaultProps = {
    size: "750 mL",
    picklistData: {
        value: "750 mL",
        display_order: 0
    }
}

export default AttrSize;
