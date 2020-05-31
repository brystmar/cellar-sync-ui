import React from 'react';

class AttrQty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            qty: this.props.qty
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
                    <img src="./icons/hashtag-solid.svg"
                         alt="Quantity (overall)"
                         className="list-item-icon-key"/>
                    {/*<i className="fas fa-hashtag"/>*/}
                </td>

                <td className="list-item-table-value"
                    onMouseOver={() => this.toggleEditMode(true)}
                    onClick={() => {
                        this.toggleEditMode(true);
                        this.props.updateBeverageState({editMode: true});
                    }}>
                    <input name="qty"
                           type="number"
                           min={0}
                           max={99}
                           className="input-number"
                           value={this.state.qty}
                           disabled={!this.state.editMode}
                           onChange={this.handleChange}
                           onBlur={() => this.props.updateBeverageState({qty: this.state.qty})}/>
                </td>
            </>
        )
    }
}

AttrQty.defaultProps = {
    qty: 0
}

export default AttrQty;
