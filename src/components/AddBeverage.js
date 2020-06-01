import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Tooltip from 'react-bootstrap/Tooltip';

function AddBeverage(props) {
    const addBeverageForm =
        <Popover id="add-beverage-popover">
            <Popover.Title as="h3">Add New Beverage</Popover.Title>
            <Popover.Content>
                Form goes here?
            </Popover.Content>
        </Popover>;

    return (
        <div className="add-beverage">
            <OverlayTrigger id="add-beverage-tooltip"
                            placement="left"
                            trigger={["hover", "focus"]}
                            overlay={<Tooltip id="tooltip-disabled">Add Beverage</Tooltip>}>
                <img src="./icons/button_plus.png"
                     alt="Add Beverage"
                     className="add-button-floating"
                     onClick={() => {
                         console.log("Clicked add (tooltip)!")
                     }}/>
            </OverlayTrigger>
            <OverlayTrigger id="add-beverage-overlay-form"
                            trigger="click"
                            placement="left"
                            overlay={addBeverageForm}>
                <img src="./icons/button_plus.png"
                     alt="Add Beverage"
                     className="add-button-floating"
                     // height={"5px"}
                     onClick={() => {
                         console.log("Clicked add (form)!")
                     }}
                     onMouseOver={() => console.log("Hovered over form")}/>
            </OverlayTrigger>

        </div>
    )
}

AddBeverage.defaultProps = {
    something: "nothing"
}

export default AddBeverage;
