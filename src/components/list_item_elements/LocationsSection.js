import React from 'react';
import LocationContainer from "./LocationContainer";

function LocationsSection(props) {
    const locations = props.locations
        .sort((a, b) => parseFloat(a.display_order) - parseFloat(b.display_order))
        .map(location =>
            <LocationContainer
                name={location.name}
                qty={location.qty}
                qty_cold={location.qty_cold}
                note={location.note}
                handleChange={props.handleChange}/>
        )

    return (
        <>
            {locations}
        </>
    )
}

LocationsSection.defaultProps = {
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

export default LocationsSection;
