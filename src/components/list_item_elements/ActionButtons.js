import React from 'react';
import Button from 'react-bootstrap/Button';

function ActionButtons(props) {
    return (
        <>
            <Button type="button"
                    variant="danger"
                    className="list-item-button"
                    size="sm"
                    hidden={!props.editMode}
                    onClick={() => {
                        props.resetBeverageData();
                        // Close the popover when this button is used in the AddBev form
                        // if (props.forNewBeverage) {
                        //     document.body.click()
                        // }
                    }}>Cancel</Button>

            <Button type="submit"
                    variant="primary"
                    className="list-item-button"
                    size="sm"
                    hidden={!props.editMode}>Save</Button>
        </>
    )
}

export default ActionButtons;
