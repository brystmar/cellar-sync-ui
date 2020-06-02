import React from 'react';
import Form from 'react-bootstrap/Form';

class AttrBatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            batch: this.props.batch
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
                    <img src="./icons/noun_Bat_2088669.svg"
                         alt="Batch"
                         className="list-item-icon-key"/>
                </td>

                <td className="list-item-table-value list-item-table-value-disabled">
                    <Form.Control type="number"
                                  name="batch"
                                  size="sm"
                                  min={0}
                                  max={99999}
                                  placeholder="Batch #"
                                  className="input-number"
                                  id="input-batch-number"
                                  value={this.state.batch}
                                  disabled={true}
                                  onChange={this.handleChange}/>
                </td>
            </>
        )
    }
}

AttrBatch.defaultProps = {
    batch: 0
}

export default AttrBatch;
