import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LocationPicklistValues from './LocationPicklistValues';
import SizePicklistValues from './SizePicklistValues';
import StylePicklistValues from './StylePicklistValues';
import parse_picklists from '../functions/parse_picklists';

function PicklistValuesContainer(props) {
    let realData = <div>no data</div>;

    if (props.data !== "default") {
        let picklists = parse_picklists(props.data);

        realData = <div className="picklist-values-container">
            <Tabs defaultActiveKey="location" id="picklist-values-container">
                <Tab eventKey="location" title="Location">
                    <LocationPicklistValues data={picklists.location}/>
                </Tab>
                <Tab eventKey="size" title="Size">
                    <SizePicklistValues data={picklists.size}/>
                </Tab>
                <Tab eventKey="style" title="Style">
                    <StylePicklistValues data={picklists.style}/>
                </Tab>
            </Tabs>
        </div>
    }

    return (
        {realData}
    )
}

PicklistValuesContainer.defaultProps = {
    // location: ['Default', 'Home', 'Wine Storage'],
    // size: ['Defaults', '750 mL', '22 oz', '500 mL', '375 mL'],
    // style: ['Defaults', 'Rauchbier', 'Rat Beer']
    // data: [
    //     {
    //         list_name: "location",
    //         list_values: [],
    //         last_modified: 0
    //     },
    //     {
    //         list_name: "size",
    //         list_values: [],
    //         last_modified: 0
    //     },
    //     {
    //         list_name: "style",
    //         list_values: [],
    //         last_modified: 0
    //     }
    // ],
    data: "default"
}

export default PicklistValuesContainer;
