import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';

function AttrStyle(props) {
    const [spStyleList, updateSpStyleListState] = useState(updateSpStyleList(props.style, true));

    function updateSpStyleList(newStyle = "", initial = false) {
        // Each Style has its own list of SpecificStyles, so update this dependent list when Style changes
        if (// If picklistData is not empty
            props.picklistData.length > 0
            // ...and there's data for the current Style
            && props.picklistData.findIndex(style => style.value === newStyle) !== -1
            // ...and the data for this Style has a non-null dependent_values list
            && !!props.picklistData.find(style => style.value === newStyle).dependent_values
            // ...then
        ) {
            if (initial) {
                return props.picklistData.find(style => style.value === newStyle).dependent_values
            }
            // Update local state with the list of values
            updateSpStyleListState(props.picklistData.find(
                style => style.value === newStyle).dependent_values)
        } else {
            if (initial) {
                return []
            }
            // Update local state to null
            updateSpStyleListState([])
        }
    }

    function handleStyleChange(event) {
        console.log("handleStyleChange to", event.target.value);
        // Update Style & editMode on the parent beverage
        props.updateBeverageState({
            style: event.target.value,
            editMode: true
        })

        // Update the SpStyle picklist based on this new Style
        updateSpStyleList(event.target.value);
    }

    function handleSpStyleChange(event) {
        console.log("handleSpStyleChange to", event.target.value);
        // Update specific_style & editMode on the parent beverage
        props.updateBeverageState({
            specific_style: event.target.value,
            editMode: true
        })
    }

    // Run when initialized
    // updateSpStyleList(props.style);

    // Create the list of options for the Style picklist
    let styleValues = props.picklistData.map(style =>
        <option key={style.value}>{style.value}</option>);

    // Create the list of options for the SpecificStyle picklist
    let i = 0, specificStyleValues = [];
    if (spStyleList.length > 0) {
        while (i < spStyleList.length) {
            specificStyleValues.push(
                <option key={spStyleList[i]}>
                    {spStyleList[i]}
                </option>);
            i += 1;
        }
    }

    // Add a null option to the beginning of both picklists
    styleValues.unshift(<option key={"null"} value={""}>{""}</option>);
    specificStyleValues.unshift(<option key={"null"} value={""}>{""}</option>);

    return (
        <>
            <Form.Group controlId="formStyle" className="input-style input-group">
                <span className="list-item-key">
                    <span className="list-item-key-icon-container">
                        <img alt="Style" src="./icons/noun_Beer_style1_1975813.svg"/>
                    </span>
                    <Form.Label className="list-item-label-sm"
                                hidden={props.forNewBeverage}>Style</Form.Label>
                </span>

                <Form.Control as="select"
                              name="style"
                              size="sm"
                              className="input-picklist list-item-value"
                              value={props.style}
                              onChange={handleStyleChange}>
                    {styleValues}
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formSpecificStyle" className="input-spstyle input-group">
                <span className="list-item-key">
                    <span className="list-item-key-icon-container">
                        <img alt="Specific Style" src="./icons/noun_Beer_style2_5693.svg"/>
                    </span>
                    <Form.Label className="list-item-label-med"
                                hidden={props.forNewBeverage}>Sub-Style</Form.Label>
                </span>

                <Form.Control as="select"
                              name="specific_style"
                              size="sm"
                              className="input-picklist list-item-value"
                              value={props.specific_style}
                              disabled={spStyleList.length === 0}
                              onChange={handleSpStyleChange}>
                    {specificStyleValues}
                </Form.Control>
            </Form.Group>
        </>
    )
}

AttrStyle.defaultProps = {
    style: "",
    specific_style: "",
    picklistData: {
        value: "",
        display_order: 0,
        dependent_values: [""]
    }
}

export default AttrStyle;
