import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class AttrBottleDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            bottleDate: this.props.bottle_date
        }

        this.handleDateChange = this.handleDateChange.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.updateBevState = this.updateBevState.bind(this);
    }

    handleDateChange(newDate) {
        this.setState({
            bottleDate: newDate
        })

        // Update edit mode for the list item
        this.props.updateBeverageState({editMode: true});
    }

    updateBevState(newDate) {
        this.setState({
            bottleDate: newDate
        })
        this.props.updateBeverageState({bottle_date: newDate.toString()})
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
                    <i className="far fa-calendar-alt"/>
                </td>
                <td className="list-item-table-value"
                    onMouseOver={() => this.toggleEditMode(true)}
                    onClick={() => {
                        this.toggleEditMode(true);
                        this.props.updateBeverageState({editMode: true});
                    }}>
                    <DatePicker className="input-date"
                                selected={Date.parse(this.state.bottleDate)}
                                disabled={!this.state.editMode}
                                onChange={this.handleDateChange}
                                onSelect={this.updateBevState}
                                dateFormat="yyyy-MM-dd"
                                useWeekdaysShort={true}
                                onBlur={() => this.props.updateBeverageState({bottle_date: this.state.bottleDate})}/>
                </td>
            </>
        )
    }
}

AttrBottleDate.defaultProps = {
    bottle_date: "2020-01-01"
}

export default AttrBottleDate;
