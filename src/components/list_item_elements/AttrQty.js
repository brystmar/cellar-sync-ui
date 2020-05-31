import React from 'react';

class AttrQty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: this.props.qty,
            qty_cold: this.props.qty_cold
        }

        this.handleChange = this.handleChange.bind(this);
        this.validateQtyCold = this.validateQtyCold.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.validateQtyCold();

        // Update local state
        this.setState({
            [name]: value
        })

        // Update state of the parent beverage
        this.props.updateBeverageState({
            [name]: value,
            editMode: true
        })
    }

    validateQtyCold() {
        // Ensures that qty >= qty_cold
        if (this.state.qty < this.state.qty_cold) {
            this.setState({
                qty_cold: this.state.qty
            })
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
                           onBlur={this.validateQtyCold}/>
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
                           onBlur={this.validateQtyCold}/>
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
