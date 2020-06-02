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
    }

    render() {
        return (
            <Form.Group>
                <Form.Label>
                    <img src="./icons/noun_Bat_2088669.svg"
                         alt="Batch"
                         className="list-item-icon-key"/>
                    {this.props.forNewBeverage ? "Batch / Blend" : ""}
                </Form.Label>

                <Form.Control name="batch"
                              type="number"
                              min={0}
                              max={99999}
                              placeholder="Batch #"
                              className="input-number list-item-value"
                              id="input-batch-number"
                              value={this.state.batch}
                              disabled={true}
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
