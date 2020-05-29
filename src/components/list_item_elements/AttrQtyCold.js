import React from 'react';

class AttrQtyCold extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            qty_cold: this.props.qty_cold
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
                    {/*<img src="./icons/snowflake-regular.svg"*/}
                    {/* alt="Qty Cold"*/}
                    {/* className="list-item-icon-key"/>*/}
                    <i className="far fa-snowflake"/>
                </td>

                <td className="list-item-table-value"
                    onMouseOver={() => this.toggleEditMode(true)}
                    onClick={() => {
                        this.toggleEditMode(true);
                        this.props.updateBeverageState({editMode: true});
                    }}>
                    <input name="qty_cold"
                           type="number"
                           min={0}
                           max={99}
                           className="input-number"
                           value={this.state.qty_cold}
                           disabled={!this.state.editMode}
                           onChange={this.handleChange}
                           onBlur={() => this.props.updateBeverageState({qty: this.state.qty_cold})}/>
                </td>
            </>
        )
    }
}

AttrQtyCold.defaultProps = {
    qty_cold: 0
}

export default AttrQtyCold;
