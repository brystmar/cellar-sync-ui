import React from 'react';

class AttrNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            note: this.props.note
        }

        this.handleChange = this.handleChange.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    toggleEditMode(enabled = NaN) {
        if (isNaN(enabled)) {
            this.setState({
                editMode: !this.state.editMode
            })
        } else {
            this.setState({
                editMode: enabled
            })
        }
    }

    render() {
        return (
            <>
                <td className="list-item-table-key">
                    <img src="./icons/sticky-note-regular.svg"
                         alt="Note"
                         className="list-item-icon-key"/>
                    {/*<i className="far fa-sticky-note"/>*/}
                </td>

                <td className="list-item-table-value"
                    onMouseOver={() => this.toggleEditMode(true)}
                    onClick={() => {
                        this.toggleEditMode(true);
                        this.props.updateBeverageState({editMode: true});
                    }}>
                    <input name="note"
                           type="text"
                           className="input-text"
                           value={this.state.note}
                           disabled={!this.state.editMode}
                           onChange={this.handleChange}
                           onBlur={() => this.props.updateBeverageState({note: this.state.note})}/>
                </td>
            </>
        )
    }
}

AttrNote.defaultProps = {
    note: ""
}

export default AttrNote;
