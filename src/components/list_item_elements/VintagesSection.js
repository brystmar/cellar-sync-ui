import React from 'react';
import AttrBottleDate from "./AttrBottleDate";
import AttrBatch from "./AttrBatch";

function VintagesSection(props) {
    return (
        <>
            <AttrBottleDate
                bottle_date={props.vintage.bottle_date ? props.vintage.bottle_date : ""}
                handleChange={this.handleChange}/>

            <AttrBatch
                batch={props.vintage.batch ? props.vintage.batch : ""}
                handleChange={this.handleChange}/>
        </>
    )
}

VintagesSection.defaultProps = {
    bottle_date: "2020-01-01",
    batch: 0,
    size: "",
    for_trade: false,
    untappd: "",
    note: "",
    display_order: 0,
    locations: [
        {
            name: "",
            qty: 0,
            qty_cold: 0,
            note: "",
            display_order: 0
        }
    ]
}

export default VintagesSection;
