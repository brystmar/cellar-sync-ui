import React from 'react';
import Form from 'react-bootstrap/Form';

class AttrStyle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: this.props.style ? this.props.style : "",
            spStyle: this.props.specific_style ? this.props.specific_style : "",
            spStyleList: []
        }

        this.updateSpStyleList = this.updateSpStyleList.bind(this);
        this.handleStyleChange = this.handleStyleChange.bind(this);
        this.handleSpStyleChange = this.handleSpStyleChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // Update when the form resets
        if (this.props.style !== "" && nextProps.style === "") {
            // Props were reset
            this.updateSpStyleList("");
            return true;
        } else if (this.state.style !== nextState.style || this.state.spStyle !== nextState.spStyle) {
            // Local state update
            return true;
        } else {
            return false;
        }
    }

    componentDidMount() {
        this.updateSpStyleList(this.state.style);
    }

    updateSpStyleList(newStyle = "") {
        // Each Style has its own list of SpecificStyles, so update this dependent list when Style changes
        // console.log("Updating SpStyleList, newStyle: `" + newStyle + "`");
        if (// If picklistData is not empty
            this.props.picklistData.length > 0
            // ...and there's data for the current Style
            && this.props.picklistData.findIndex(style => style.value === newStyle) !== -1
            // ...and the data for this style has a non-null dependent_values list
            && !!this.props.picklistData.find(style => style.value === newStyle).dependent_values) {
            this.setState({
                spStyleList: this.props.picklistData.find(style => style.value === newStyle).dependent_values
            })
            // console.log("newStyle `" + newStyle + "` found, updating SS list to:");
            // console.log(this.props.picklistData.find(style => style.value === newStyle).dependent_values)
            // console.log("List exists? " + !!this.props.picklistData.find(style => style.value === newStyle).dependent_values);
            // console.log("")
        } else {
            this.setState({
                spStyle: "",
                spStyleList: []
            })
            // console.log("newStyle `" + newStyle + "` NOT found, SpStyleList = [].");
        }
    }

    handleStyleChange(event) {
        // console.log("Changing style from `" + this.state.style + "` to `" + event.target.value + "`");
        // Update local state w/new Style & reset the spStyle
        this.setState({
            style: event.target.value,
            spStyle: ""
        })

        // Update the SpStyle picklist based on this new Style
        this.updateSpStyleList(event.target.value);

        // Update Style & editMode on the parent beverage
        this.props.updateBeverageState({
            style: event.target.value,
            editMode: true
        })
    }

    handleSpStyleChange(event) {
        // console.log("SpStyle changed");
        // Update local state w/new SpStyle
        this.setState({
            spStyle: event.target.value
        })

        // Update specific_style & editMode on the parent beverage
        this.props.updateBeverageState({
            specific_style: event.target.value,
            editMode: true
        })
    }

    render() {
        // Create the list of options for the Style picklist
        let styleValues = this.props.picklistData.map(style =>
            <option key={style.value}>{style.value}</option>);

        // Create the list of options for the SpecificStyle picklist
        let i = 0, specificStyleValues = [];
        if (this.state.spStyleList.length > 0) {
            while (i < this.state.spStyleList.length) {
                specificStyleValues.push(
                    <option key={this.state.spStyleList[i]}>
                        {this.state.spStyleList[i]}
                    </option>);
                i += 1;
            }
        }

        // Add a null option to the beginning of both picklists
        styleValues.unshift(<option key={"null"} value={""}>{""}</option>);
        specificStyleValues.unshift(<option key={"null"} value={""}>{""}</option>);

        return (
            <>
                <Form.Group controlId="formStyle">
                    <img alt="Style"
                         src="./icons/noun_Beer_style1_1975813.svg"
                         className="list-item-icon-key"/>
                    {this.props.forNewBeverage ? <Form.Label>Style</Form.Label> : ""}

                    <Form.Control as="select"
                                  name="style"
                                  size="sm"
                                  className="input-picklist list-item-value"
                                  value={this.state.style}
                                  onChange={this.handleStyleChange}>
                        {styleValues}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formSpecificStyle">
                    <img alt="Specific Style"
                         src="./icons/noun_Beer_style2_5693.svg"
                         className="list-item-icon-key"/>
                    {this.props.forNewBeverage ? <Form.Label>Specific Style</Form.Label> : ""}

                    <Form.Control as="select"
                                  name="specific_style"
                                  size="sm"
                                  className="input-picklist list-item-value"
                                  value={this.state.spStyle}
                                  disabled={this.state.spStyleList.length === 0}
                                  onChange={this.handleSpStyleChange}>
                        {specificStyleValues}
                    </Form.Control>
                </Form.Group>
            </>
        )
    }
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
