import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LocationPicklist from './LocationPicklist';
import SizePicklist from './SizePicklist';
import StylePicklist from './StylePicklist';

function PicklistValuesContainer(props) {
    let locationData, styleData, sizeData, i=0;

    // Parse the data for each type of picklist
    while (i < props.data.length) {
        if (props.data[i].list_name === "size") {
            sizeData = props.data[i].list_values;
        } else if (props.data[i].list_name === "style") {
            styleData = props.data[i].list_values;
        } else if (props.data[i].list_name === "location") {
            locationData = props.data[i].list_values;
        }
        i += 1;
    }

    return (
        <>
            <Tabs defaultActiveKey="location" id="picklist-values-container">
                <Tab eventKey="location" title="Location">
                    <LocationPicklist data={locationData}/>
                </Tab>
                <Tab eventKey="size" title="Size">
                    <SizePicklist data={sizeData}/>
                </Tab>
                <Tab eventKey="style" title="Style">
                    <StylePicklist data={styleData}/>
                </Tab>
            </Tabs>
        </>
    )
}

PicklistValuesContainer.defaultProps = {
    // location: ['Default', 'Home', 'Wine Storage'],
    // size: ['Defaults', '750 mL', '22 oz', '500 mL', '375 mL'],
    // style: ['Defaults', 'Rauchbier', 'Rat Beer']
    data: [
        {
            list_name: "location",
            list_values: [],
            last_modified: 0
        },
        {
            list_name: "size",
            list_values: [],
            last_modified: 0
        },
        {
            list_name: "style",
            list_values: [],
            last_modified: 0
        }
    ]
}

export default PicklistValuesContainer;
