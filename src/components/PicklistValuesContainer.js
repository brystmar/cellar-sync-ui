import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LocationDisplay from "./LocationDisplay";

function PicklistValuesContainer(props) {
    // const locationData = props.data.map(picklist =>
    //     <LocationDisplay name={picklist.list_name}
    //                      values={picklist.list_values}/>);

    return (
        <>
            <Tabs defaultActiveKey="location" id="picklist-values-container">
                <Tab eventKey="location" title="Location">
                    Location location location!
                </Tab>
                <Tab eventKey="size" title="Size">
                    Size matters
                </Tab>
                <Tab eventKey="style" title="Style">
                    What's your style?
                </Tab>
            </Tabs>
            <p>
                {JSON.stringify(props.data[0].list_name)}
                {JSON.stringify(props.data[0].list_values)}
                <br/>
                {JSON.stringify(props.data[1].list_name)}
                <br/>
                {JSON.stringify(props.data[2].list_name)}
                <br/>
                {/*{locationData}*/}
                {/*{typeof (locationData)}*/}
                {/*{JSON.stringify(props.data[1])}*/}
                {/*<br/>*/}
                {/*{JSON.stringify(props.data[2])}*/}
            </p>
        </>
    )
}

PicklistValuesContainer.defaultProps = {
    // location: ['Default', 'Home', 'Wine Storage'],
    // size: ['Defaults', '750 mL', '22 oz', '500 mL', '375 mL'],
    // style: ['Defaults', 'Rauchbier', 'Rat Beer']
    data: [
        {
            list_name: [],
            list_values: [],
            last_modified: 0
        },
        {
            list_name: [],
            list_values: [],
            last_modified: 0
        },
        {
            list_name: [],
            list_values: [],
            last_modified: 0
        }
    ]
}

export default PicklistValuesContainer;
