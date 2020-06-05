import React from 'react';
import Form from 'react-bootstrap/Form';

class AttrUntappd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            untappd: this.props.untappd
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
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
            <Form.Group controlId="formUntappd">
                <img src="./icons/link-solid.svg"
                     alt="Untappd"
                     className="list-item-icon-key"/>
                {this.props.forNewBeverage ? <Form.Label>Untappd</Form.Label> : ""}

                <Form.Control name="untappd"
                              type="text"
                              placeholder="Untappd Link"
                              className="input-text-long list-item-value"
                              value={this.state.untappd}
                              onChange={this.handleChange}/>
            </Form.Group>
        )
    }
}

AttrUntappd.defaultProps = {
    untappd: "",
    forNewBeverage: false
}

export default AttrUntappd;
