import React from 'react';
import Button from 'react-bootstrap/Button';

function ELIButtons(props) {
    return (
        <p className="list-item-edit-button">
            <Button size="sm"
                    variant="success"
                    className="list-item-edit-button"
                    hidden={props.editMode}
                    onClick={() => props.toggleEditMode()}>
                Edit</Button>

            <Button size="sm"
                    variant="danger"
                    className="list-item-cancel-button"
                    hidden={!props.editMode}
                    onClick={() => props.toggleEditMode()}>
                Cancel</Button>

            <Button size="sm"
                    variant="primary"
                    className="list-item-save-button"
                    hidden={!props.editMode}
                    onClick={() => props.handleSubmit()}>
                Save</Button>
        </p>
    )
}

export default ELIButtons;
