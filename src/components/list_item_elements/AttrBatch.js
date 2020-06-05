import React from 'react';
import Form from 'react-bootstrap/Form';

class AttrBatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            batch: this.props.batch
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })

        if (this.props.forNewBeverage) {
            this.props.updateBeverageState({
                [name]: value,
                editMode: true
            })
        }
    }

    render() {
        return (
            <Form.Group>
                <img alt="Batch"
                     src="./icons/noun_Bat_2088669.svg"
                     className="list-item-icon-key"/>
                {this.props.forNewBeverage ? <Form.Label>Batch</Form.Label> : ""}

                <Form.Control name="batch"
                              type="number"
                              min={0}
                              max={9999}
                              placeholder="b#"
                              className="input-number list-item-value"
                              id="input-batch-number"
                              value={this.state.batch}
                              disabled={!this.props.forNewBeverage}
                              onChange={this.handleChange}/>
            </Form.Group>
        )
    }
}

AttrBatch.defaultProps = {
    batch: 0,
    forNewBeverage: false
}

export default AttrBatch;
