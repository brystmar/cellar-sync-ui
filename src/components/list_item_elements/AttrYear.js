import React from 'react';

class AttrYear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            year: this.props.year
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
                    <img src="./icons/calendar-alt-solid.svg"
                         alt="Year"
                         className="list-item-icon-key"/>
                    {/*<i className="fas fa-calendar-alt"/>*/}
                </td>

                <td className="list-item-table-value"
                    onMouseOver={() => this.toggleEditMode(true)}
                    onClick={() => {
                        this.toggleEditMode(true);
                        this.props.updateBeverageState({editMode: true});
                    }}>
                    <input name="year"
                           type="number"
                           min={1980}
                           max={2050}
                           className="input-number"
                           value={this.state.year}
                           disabled={!this.state.editMode}
                           onChange={this.handleChange}
                           onBlur={() => this.props.updateBeverageState({year: this.state.year})}/>
                </td>
            </>
        )
    }
}

AttrYear.defaultProps = {
    year: 2020
}

export default AttrYear;
