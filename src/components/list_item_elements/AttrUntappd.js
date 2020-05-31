import React from 'react';

class AttrUntappd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            untappd: this.props.untappd
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
                    <img src="./icons/link-solid.svg"
                         alt="Untappd Link"
                         className="list-item-icon-key"/>
                    {/*<i className="fas fa-link"/>*/}
                </td>
                <td className="list-item-table-value"
                    onMouseOver={() => this.toggleEditMode(true)}
                    onClick={() => {
                        this.toggleEditMode(true);
                        this.props.updateBeverageState({editMode: true});
                    }}>
                    <input name="untappd"
                           type="text"
                           className="input-text"
                           value={this.state.untappd}
                           disabled={!this.state.editMode}
                           onChange={this.handleChange}
                           onBlur={() => this.props.updateBeverageState({untappd: this.state.untappd})}/>
                </td>
            </>
        )
    }
}

AttrUntappd.defaultProps = {
    untappd: ""
}

export default AttrUntappd;
