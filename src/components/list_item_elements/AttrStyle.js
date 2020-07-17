import React, {useState} from 'react';

function AttrStyle(props) {
    const [spStyleList, updateSpStyleListState] = useState(updateSpStyleList(props.style, true));

    function updateSpStyleList(newStyle = "", calledDuringInitialization = false) {
        // Each Style has its own list of SpecificStyles
        // Update this dependent list when Style changes
        // console.log("Calling updateSpStyleList, newStyle =", newStyle, ", initial =", initial);
        if (// If picklistData is not empty
            props.picklistData.length > 0
            // ...and there's data for the current Style
            && props.picklistData.findIndex(style => style.value === newStyle) !== -1
            // ...and the data for this Style has a non-null dependent_values list
            && !!props.picklistData.find(style => style.value === newStyle).dependent_values
            // ...then
        ) {
            let output = props.picklistData.find(style => style.value === newStyle).dependent_values;
            if (calledDuringInitialization) {
                // Prevents an infinite loop since this function is called during init
                return output
            }
            // Update local state with the list of values
            updateSpStyleListState(output)
        } else {
            // picklistData is empty
            if (calledDuringInitialization) {
                return []
            } else {
                updateSpStyleListState([])
            }
        }
    }

    function handleStyleChange(event) {
        console.log("handleStyleChange to", event.target.value);
        // Update Style & editMode on the parent beverage
        props.updateBeverageState({
            style: event.target.value,
            specific_style: "",
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
            <span className="input-style input-group">
                <span className="list-item-key">
                    <span className="list-item-key-icon-container">
                        <img alt="Style" src="./icons/noun_Beer_style1_1975813.svg"/>
                    </span>
                    <label className="list-item-label-sm"
                           hidden={props.forNewBeverage}>Style</label>
                </span>

                <select name="style"
                        size="sm"
                        className="input-picklist list-item-value"
                        value={props.style}
                        onChange={handleStyleChange}>
                    {styleValues}
                </select>
            </span>

            <span className="input-spstyle input-group">
                <span className="list-item-key">
                    <span className="list-item-key-icon-container">
                        <img alt="Specific Style" src="./icons/noun_Beer_style2_5693.svg"/>
                    </span>
                    <label className="list-item-label-med"
                           hidden={props.forNewBeverage}>Sub-Style</label>
                </span>

                <select name="specific_style"
                        size="sm"
                        className="input-picklist list-item-value"
                        value={props.specific_style}
                        disabled={spStyleList.length === 0}
                        onChange={handleSpStyleChange}>
                    {specificStyleValues}
                </select>
            </span>
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
