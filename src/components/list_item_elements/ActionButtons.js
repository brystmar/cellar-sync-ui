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
                    onClick={props.resetBeverageData}>Cancel</Button>

            <Button type="submit"
                    variant="primary"
                    className="list-item-button"
                    size="sm"
                    hidden={!props.editMode}>Save</Button>
        </>
    )
}

export default ActionButtons;
