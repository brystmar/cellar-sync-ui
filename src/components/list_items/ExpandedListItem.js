import React from 'react';
import './styles/list_items.css';
import ELIButtons from './ELIButtons';
import set_trade_value_icon from '../../functions/set_trade_value_icon'

class ExpandedListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    handleSubmit() {

    }

    render() {
        console.log(this.props.data);
        console.log(this.state.editMode);

        return (
            <div className="expanded-list-item">
                <table className="expanded-list-table">
                    <tbody>
                    <tr>
                        <td className="list-item-table-key">
                            <i className="fas fa-map-marked-alt"/>
                        </td>
                        <td className="list-item-table-value">
                            {this.props.data.location}
                        </td>
                    </tr>
                    <tr>
                        <td className="list-item-table-key">
                            <i className="fas fa-hashtag"/>
                        </td>
                        <td className="list-item-table-value">
                            {this.props.data.qty}
                        </td>
                    </tr>
                    <tr>
                        <td className="list-item-table-key">
                            <i className="fas fa-wine-bottle"/>
                            {/*<img src="./icons/noun_wine_bottle_246969.svg"*/}
                            {/*     alt="Size"*/}
                            {/*     className="list-item-icon-key"/>*/}
                            {/*<img src="./icons/noun_Wine_Bottles_1922141.svg"*/}
                            {/*     alt="Size"*/}
                            {/*     className="list-item-icon-key"/>*/}
                        </td>
                        <td className="list-item-table-value">
                            {this.props.data.size}
                        </td>
                    </tr>
                    <tr>
                        <td className="list-item-table-key">
                            <i className="fas fa-calendar-alt"/>
                        </td>
                        <td className="list-item-table-value">
                            {this.props.data.year}
                        </td>
                    </tr>
                    <tr>
                        <td className="list-item-table-key">
                            <i className="far fa-calendar-alt"/>
                        </td>
                        <td className="list-item-table-value">
                            {this.props.data.bottle_date}
                        </td>
                    </tr>
                    <tr>
                        <td className="list-item-table-key">
                            {/*<span className="svg-inline--fa">b</span>*/}
                            <img src="./icons/noun_Bat_2088669.svg"
                                 alt="Batch"
                                 className="list-item-icon-key"/>
                        </td>
                        <td className="list-item-table-value">
                            {this.props.data.batch}
                        </td>
                    </tr>
                    <tr>
                        <td className="list-item-table-key">
                            <img src="./icons/noun_Beer_style1_1975813.svg"
                                 alt="Style"
                                 className="list-item-icon-key"/>
                        </td>
                        <td className="list-item-table-value">
                            {this.props.data.style}
                        </td>
                    </tr>
                    <tr>
                        <td className="list-item-table-key">
                            <img src="./icons/noun_Beer_style2_5693.svg"
                                 alt="Specific Style"
                                 className="list-item-icon-key"/>
                        </td>
                        <td className="list-item-table-value">
                            {this.props.data.specific_style}
                        </td>
                    </tr>
                    <tr>
                        <td className="list-item-table-key">
                            {/*<i className="fas fa-money-check-alt"/>*/}
                            <i className="fas fa-euro-sign"/>
                        </td>
                        <td className="list-item-table-value">
                            {set_trade_value_icon(this.props.data.trade_value)}
                        </td>
                    </tr>
                    <tr>
                        <td className="list-item-table-key">
                            {/*<span className="svg-inline--fa">⇆</span>*/}
                            <i className="fas fa-exchange-alt"/>
                        </td>
                        <td className="list-item-table-value">
                            {!!this.props.data.for_trade ? this.props.data.for_trade ?
                                <img src="./icons/noun_true_2049512.svg"
                                     alt="For Trade? Yes."
                                     className="list-item-icon-value"/>
                                : <img src="./icons/noun_False_2049513.svg"
                                       alt="For Trade? No."
                                       className="list-item-icon-value"/>
                                : <img src="./icons/noun_true_or_false_2946218.svg"
                                       alt="For Trade? Unknown."
                                       className="list-item-icon-value"/>}
                        </td>
                    </tr>
                    <tr>
                        <td className="list-item-table-key">
                            <i className="fas fa-spider"/>
                        </td>
                        <td className="list-item-table-value">
                            {this.props.data.aging_potential}
                        </td>
                    </tr>
                    <tr>
                        <td className="list-item-table-key">
                            <i className="fas fa-link"/>
                        </td>
                        <td className="list-item-table-value">
                            {this.props.data.untappd}
                        </td>
                    </tr>
                    <tr>
                        <td className="list-item-table-key">
                            <i className="far fa-sticky-note"/>
                        </td>
                        <td className="list-item-table-value">
                            {this.props.data.note}
                        </td>
                    </tr>
                    </tbody>
                </table>

                <ELIButtons editMode={this.state.editMode}
                            toggleEditMode={this.toggleEditMode}/>
            </div>
        )
    }
}

export default ExpandedListItem;
