import React from 'react';

class AttrQty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: this.props.qty,
            qty_cold: this.props.qty_cold
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;

        // Validate that qty >= qty_cold
        if (name === "qty") {
            if (value >= this.state.qty_cold) {
                // Update local state
                this.setState({
                    qty: value
                })

                // Update state of the parent beverage
                this.props.updateBeverageState({
                    [name]: value,
                    editMode: true
                })
            } else {
                // Reduce qty_cold to match qty
                this.setState({
                    qty: value,
                    qty_cold: value
                })
            }
        } else if (name === "qty_cold") {
            if (value <= this.state.qty) {
                this.setState({
                    qty_cold: value
                })

                // Update state of the parent beverage
                this.props.updateBeverageState({
                    [name]: value,
                    editMode: true
                })
            } else {
                this.setState({
                    qty_cold: value
                })
            }
        }
    }

    render() {
        return (
            <>
                <td className="list-item-table-key">
                    <img src="./icons/hashtag-solid.svg"
                         alt="Quantity (overall)"
                         className="list-item-icon-key"/>
                    {/*<i className="fas fa-hashtag"/>*/}
                </td>

                <td className="list-item-table-value">
                    <input name="qty"
                           type="number"
                           min={0}
                           max={99}
                           className="input-number"
                           value={this.state.qty}
                           onChange={this.handleChange}
                           onBlur={this.handleChange}/>
                </td>

                <td className="list-item-table-key">
                    <img src="./icons/snowflake-regular.svg"
                         alt="Qty Cold"
                         className="list-item-icon-key"/>
                    {/*<i className="far fa-snowflake"/>*/}
                </td>

                <td className="list-item-table-value">
                    <input name="qty_cold"
                           type="number"
                           min={0}
                           max={this.state.qty}
                           className="input-number"
                           value={this.state.qty_cold}
                           onChange={this.handleChange}
                           onBlur={this.handleChange}/>
                </td>
            </>
        )
    }
}

AttrQty.defaultProps = {
    qty: 0,
    qty_cold: 0
}

export default AttrQty;
