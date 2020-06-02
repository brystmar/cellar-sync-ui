import React from 'react';
import Form from "react-bootstrap/Form";

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
                // Only update if the value changed
                // `value` is a string here for some reason
                if (value.toString() !== this.state.qty.toString()) {
                    // Update local state
                    this.setState({
                        qty: value
                    })

                    // Update state of the parent beverage
                    this.props.updateBeverageState({
                        [name]: value,
                        editMode: true
                    })
                }
            } else {
                // Reduce qty_cold to match qty
                this.setState({
                    qty: value,
                    qty_cold: value
                })
            }
        } else if (name === "qty_cold") {
            if (value <= this.state.qty) {
                // Only update if the value changed
                if (value.toString() !== this.state.qty_cold.toString()) {
                    this.setState({
                        qty_cold: value
                    })

                    // Update state of the parent beverage
                    this.props.updateBeverageState({
                        [name]: value,
                        editMode: true
                    })
                }
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
                <Form.Group controlId="formQty">
                    <Form.Label>
                        <img src="./icons/hashtag-solid.svg"
                             alt="Quantity (overall)"
                             className="list-item-icon-key"/>
                         {this.props.forNewBeverage ? "Qty" : ""}
                    </Form.Label>

                    <Form.Control name="qty"
                                  type="number"
                                  min={0}
                                  max={99}
                                  placeholder="Qty"
                                  className="input-number list-item-value"
                                  value={this.state.qty}
                                  onChange={this.handleChange}
                                  onBlur={this.handleChange}/>
                </Form.Group>

                <Form.Group controlId="formQtyCold">
                    <Form.Label>
                        <img src="./icons/snowflake-regular.svg"
                             alt="Qty Cold"
                             className="list-item-icon-key"/>
                        {this.props.forNewBeverage ? "Qty Cold" : ""}
                    </Form.Label>

                    <Form.Control name="qty_cold"
                                  type="number"
                                  min={0}
                                  max={this.state.qty}
                                  placeholder="Qty Cold"
                                  className="input-number list-item-value"
                                  value={this.state.qty_cold}
                                  onChange={this.handleChange}
                                  onBlur={this.handleChange}/>
                </Form.Group>
            </>
        )
    }
}

AttrQty.defaultProps = {
    qty: 0,
    qty_cold: 0,
    forNewBeverage: false
}

export default AttrQty;
