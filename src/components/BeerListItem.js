import React from 'react';

function BeerListItem(props) {
    return (
        <p>
            Name: {props.name} <br/>
            Brewery: {props.producer} <br/>
            Year: {props.year} <br/>
            Batch: {props.batch} <br/>
            Bottle Date: {props.bottleDate} <br/>
            Size: {props.size} <br/>
        </p>
    )
}

export default BeerListItem;
