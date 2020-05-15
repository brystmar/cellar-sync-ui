import React from 'react';

function ExpandedListItem(props) {
    console.log("Data:");
    console.log(props.data)
    let tradeValue;
    if (props.data.trade_value) {
        if (props.trade_value === 1) {
            tradeValue = "⬆"
        } else if (props.trade_value === 2) {
            tradeValue = "⬌"
        } else if (props.trade_value === 3) {
            tradeValue = "⬇"
        } else {
            tradeValue = ""
        }
    } else {
        tradeValue = ""
    }

    return (
        <div className="expanded-list-item">
            <i className="fas fa-map-marked-alt"/> {props.data.location}
            <br/>
            <i className="fas fa-hashtag"/> {props.data.qty}  &nbsp;
            <i className="fas fa-wine-bottle"/> {props.data.size}
            <br />
            <i className="fas fa-calendar-alt"/> {props.data.year}
            <br />
            <i className="far fa-calendar-alt"/> {props.data.bottle_date}
            <br />
            <span className="svg-inline--fa">b</span> {props.data.batch}
            <br />
            style: {props.data.style} <span className="svg-inline--fa">→</span> specific style: {props.data.specific_style}
            <br />
            {/*<span className="svg-inline--fa">⇆</span>*/}
            <i className="fas fa-money-check-alt"/> {tradeValue}
            <br />
            <i className="fas fa-exchange-alt"/>
            {!!props.data.for_trade ? props.data.for_trade ? "✓" : "⃠" : ""}
            <br />
            <i className="fas fa-spider"/> {props.data.aging_potential}
            <br/>
            <i className="fas fa-link"/> {props.data.untappd}
            <br/>
            <i className="far fa-sticky-note"/> {props.data.note}
            <br />
        </div>
    )
}

export default ExpandedListItem;
