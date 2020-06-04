import React from 'react';
import Form from 'react-bootstrap/Form';
// import DatePicker from 'react-datepicker';
// import DateTimeField from '@texada/date-picker';
// import '@texada/date-picker/dist/styles.min.css';

class AttrBottleDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottle_date: this.props.bottle_date
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
            <Form.Group controlId="formBottleDate">
                <img alt="Bottle Date"
                     src="./icons/calendar-alt-regular.svg"
                     className="list-item-icon-key"/>
                {this.props.forNewBeverage ? <Form.Label>Bottle Date</Form.Label> : ""}

                <Form.Control name="bottle_date"
                              type="text"
                              value={this.state.bottle_date}
                              placeholder="YYYY-MM-DD"
                              className="input-text list-item-value"
                              onChange={this.handleChange}
                              disabled={!this.props.forNewBeverage}/>
            </Form.Group>
        )
    }
}

AttrBottleDate.defaultProps = {
    bottle_date: "",
    forNewBeverage: false
}

export default AttrBottleDate;
