import React from 'react';
import Form from 'react-bootstrap/Form';

class AttrNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
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
            <>
                <td className="list-item-table-key">
                    <img src="./icons/sticky-note-regular.svg"
                         alt="Note"
                         className="list-item-icon-key"/>
                </td>

                <td className="list-item-table-value">
                    <Form.Control name="note"
                                  type="text"
                                  placeholder="Notes"
                                  className="input-text"
                                  value={this.state.note}
                                  onChange={this.handleChange}/>
                </td>
            </>
        )
    }
}

AttrNote.defaultProps = {
    note: ""
}

export default AttrNote;
