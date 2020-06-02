import React from 'react';
import Form from 'react-bootstrap/Form';

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
                </td>

                <td className="list-item-table-value list-item-table-value-disabled">
                    <Form.Control name="year"
                                  type="number"
                                  min={1950}
                                  max={(new Date()).getFullYear() + 1}
                                  className="input-number"
                                  value={this.state.year}
                                  disabled={true}/>
                </td>
            </>
        )
    }
}

AttrYear.defaultProps = {
    year: (new Date()).getFullYear(),
    forNewBeverage: false
}

export default AttrYear;
