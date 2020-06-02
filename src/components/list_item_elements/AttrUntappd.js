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
            <>
                <td className="list-item-table-key">
                    <img src="./icons/link-solid.svg"
                         alt="Untappd Link"
                         className="list-item-icon-key"/>
                </td>
                <td className="list-item-table-value">
                    <Form.Control name="untappd"
                                  type="text"
                                  placeholder="Untappd Link"
                                  className="input-text"
                                  value={this.state.untappd}
                                  onChange={this.handleChange}/>
                </td>
            </>
        )
    }
}

AttrUntappd.defaultProps = {
    untappd: ""
}

export default AttrUntappd;
