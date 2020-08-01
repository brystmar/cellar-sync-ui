import React from 'react';
import AttrLocationName from "./AttrLocationName";
import parse_picklists from "../../functions/parse_picklists";
import AttrQty from "./AttrQty";
import AttrNote from "./AttrNote";

function LocationContainer(props) {
    return (
        <>
            <span className="input-size-loc-container grid-cell input-static">
                <AttrLocationName
                    location={props.name}
                    picklistData={parse_picklists(props.picklistData, "location")}
                    handleChange={props.handleChange}/>
            </span>

            <span className="input-qty-container grid-cell">
                <AttrQty
                    qty={props.qty}
                    qty_cold={props.qty_cold}
                    handleChange={props.handleChange}/>
            </span>

            <span className="input-longtext-container grid-cell">
                <AttrNote
                    note={props.note ? props.note : ""}
                    handleChange={props.handleChange}/>
            </span>
        </>
    )
}

LocationContainer.defaultProps = {
    name: "",
    qty: 0,
    qty_cold: 0,
    note: ""
}

export default LocationContainer;
