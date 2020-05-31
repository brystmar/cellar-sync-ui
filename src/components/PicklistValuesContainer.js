import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LocationPicklistValues from './LocationPicklistValues';
import SizePicklistValues from './SizePicklistValues';
import StylePicklistValues from './StylePicklistValues';
import parse_picklists from '../functions/parse_picklists';

function PicklistValuesContainer(props) {
    // TODO: Clean this up
    let realData = <div>no data</div>;

    if (props.data.length > 0) {
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
        <>
            {realData}
        </>
    )
}

PicklistValuesContainer.defaultProps = {
    data: []
}

export default PicklistValuesContainer;
