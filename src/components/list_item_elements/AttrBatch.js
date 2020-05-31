import React from 'react';

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
                    {/*<span className="svg-inline--fa">b</span>*/}
                    <img src="./icons/noun_Bat_2088669.svg"
                         alt="Batch"
                         className="list-item-icon-key"/>
                </td>

                <td className="list-item-table-value-disabled"
                    // onMouseOver={() => this.toggleEditMode(true)}
                    // onClick={() => {
                    //     this.toggleEditMode(true);
                    //     this.props.updateBeverageState({
                    //         editMode: true
                    //     })
                    // }}>
                    >
                    <input name="batch"
                           type="number"
                           min={0}
                           max={9999}
                           className="input-number"
                           value={this.state.batch}
                           disabled={true}
                           onChange={this.handleChange}
                           // onBlur={() => this.props.updateBeverageState({
                           //     batch: this.state.batch,
                           //     editMode: true
                           // })}
                    />
                </td>
            </>
        )
    }
}

AttrBatch.defaultProps = {
    batch: 0
}

export default AttrBatch;
