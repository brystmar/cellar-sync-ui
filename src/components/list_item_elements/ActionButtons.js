import React from 'react';

function ActionButtons(props) {
    return (
        <div className="input-buttons">
            <button type="button"
                    className="btn btn-reset-outline"
                    hidden={!props.editMode}
                    onClick={() => {
                        props.resetBeverageData();
                        // Close the popover when this button is used in the AddBev form
                        // if (props.forNewBeverage) {
                        //     document.body.click()
                        // }
                    }}>Cancel</button>

            <button type="submit"
                    className="btn btn-primary-outline"
                    hidden={!props.editMode}>Save</button>
        </div>
    )
}

export default ActionButtons;
