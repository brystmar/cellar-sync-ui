import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PicklistValues from './PicklistValues';
import StylePicklistValues from './StylePicklistValues';
import parse_picklists from '../functions/parse_picklists';

function PicklistValuesContainer(props) {
    // TODO: Make the picklist container less janky
    let realData = <div>""</div>;

    if (props.data.length > 0) {
        let picklists = parse_picklists(props.data);

        realData =
            <div className="picklist-values-container">
                <Tabs defaultActiveKey="location" id="picklist-values-container">
                    <Tab eventKey="location" title="Location">
                        <PicklistValues data={picklists.location}
                                        picklistName="location"
                                        updatePicklist={props.updatePicklist}/>
                    </Tab>
                    <Tab eventKey="size" title="Size">
                        <PicklistValues data={picklists.size}
                                        picklistName="size"
                                        updatePicklist={props.updatePicklist}/>
                    </Tab>
                    <Tab eventKey="style" title="Style">
                        <StylePicklistValues data={picklists.style}
                                             picklistName="style"
                                             updatePicklist={props.updatePicklist}/>
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
