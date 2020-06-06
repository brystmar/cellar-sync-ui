import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import AddBeverageForm from './AddBeverageForm';
import Popover from "react-bootstrap/Popover";

// import Tooltip from 'react-bootstrap/Tooltip';

function AddBeverage(props) {
    const addForm =
        <Popover id="add-beverage-popover">
            <Popover.Title as="h3">Add New Beverage</Popover.Title>
            <Popover.Content>
                <AddBeverageForm beerList={props.beverageList}
                                 picklistData={props.picklistData}
                                 updateBeverageList={props.updateBeverageList}/>
            </Popover.Content>
        </Popover>;

    return (
        <div className="add-beverage">
            <OverlayTrigger id="add-beverage-overlay-form"
                            placement="left"
                            trigger="click"
                            overlay={addForm}>
                <img src="./icons/button_plus.png"
                     alt="Add Beverage"
                     className="add-button-floating"
                     onClick={() => {
                         console.log("Clicked add (form)!")
                     }}
                />
            </OverlayTrigger>
        </div>
    )
}

AddBeverage.defaultProps = {
    beverageList: [],
    picklistData: []
}

export default AddBeverage;
