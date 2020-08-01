import React from 'react';
import AttrBottleDate from "./AttrBottleDate";
import AttrBatch from "./AttrBatch";
import AttrSize from "./AttrSize";
import parse_picklists from "../../functions/parse_picklists";

function VintageContainer(props) {
    return (
        <>
            <AttrBottleDate
                bottle_date={props.vintage.bottle_date ? props.vintage.bottle_date : ""}
                handleChange={this.handleChange}/>

            <AttrBatch
                batch={props.vintage.batch ? props.vintage.batch : ""}
                handleChange={this.handleChange}/>

            <span className="input-size-loc-container grid-cell input-static">
                <AttrSize
                    size={props.size}
                    picklistData={parse_picklists(props.picklistData, "size")}
                    handleChange={props.handleChange}/>
            </span>
        </>
    )
}

VintageContainer.defaultProps = {
    vintages: [
        {
            bottle_date: "2020-01-01",
            batch: 0,
            size: "",
            for_trade: false,
            untappd: "",
            note: "",
            locations: [
                {
                    name: "",
                    qty: 0,
                    qty_cold: 0,
                    note: ""
                }
            ]
        }
    ]
}

export default VintageContainer;
