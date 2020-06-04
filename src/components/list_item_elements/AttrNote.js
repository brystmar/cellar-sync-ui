import React from 'react';
import Form from 'react-bootstrap/Form';

class AttrNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: this.props.note
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;

        // Update local state
        this.setState({
            [name]: value
        })

        // Update parent beverage state
        this.props.updateBeverageState({
            [name]: value,
            editMode: true
        })
    }

    render() {
        return (
            <Form.Group controlId="formNote">
                <img alt="Note"
                     src="./icons/sticky-note-regular.svg"
                     className="list-item-icon-key"/>
                {this.props.forNewBeverage ? <Form.Label>Note</Form.Label> : ""}

                <Form.Control name="note"
                              type="text"
                              placeholder="Note"
                              className="input-text-long list-item-value"
                              value={this.state.note}
                              onChange={this.handleChange}/>
            </Form.Group>
        )
    }
}

AttrNote.defaultProps = {
    note: "",
    forNewBeverage: false
}

export default AttrNote;
