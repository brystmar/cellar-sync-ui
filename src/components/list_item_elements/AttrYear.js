import React from 'react';
import Form from 'react-bootstrap/Form';

class AttrYear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: this.props.year
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Form.Group controlId="formYear">
                <Form.Label>
                    <img src="./icons/calendar-alt-solid.svg"
                         alt="Year"
                         className="list-item-icon-key"/>
                    {this.props.forNewBeverage ? "Year" : ""}
                </Form.Label>
                <Form.Control name="year"
                              type="number"
                              min={1950}
                              max={(new Date()).getFullYear() + 1}
                              placeholder="Year"
                              className="input-number list-item-value"
                              value={this.state.year}
                              disabled={!this.props.forNewBeverage}/>
            </Form.Group>
        )
    }
}

AttrYear.defaultProps = {
    year: "",
    forNewBeverage: false
}

export default AttrYear;
