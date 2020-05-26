import React from 'react';

function LocationDisplay(props) {
    console.log("LD props:")
    console.log(props)
    return (
        <>
            {JSON.stringify(props)}
        </>
    )
}

export default LocationDisplay;
