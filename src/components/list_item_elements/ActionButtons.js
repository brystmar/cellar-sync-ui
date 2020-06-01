import React from 'react';
import Button from 'react-bootstrap/Button';

function ActionButtons(props) {
    return (
        <p className="list-item-buttons">
            <Button size="sm"
                    variant="danger"
                    className="list-item-reset-button"
                    hidden={!props.editMode}
                    onClick={() => props.resetBeverageData()}>Cancel</Button>

            <Button size="sm"
                    variant="primary"
                    className="list-item-save-button"
                    hidden={!props.editMode}
                    onClick={() => props.handleSubmit()}>Save</Button>
        </p>
    )
}

export default ActionButtons;
