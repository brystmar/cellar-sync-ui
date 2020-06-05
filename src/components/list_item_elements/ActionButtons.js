import React from 'react';
import Button from 'react-bootstrap/Button';

function ActionButtons(props) {
    return (
        <div className="list-item-buttons">
            <Button type="reset"
                    variant="danger"
                    className="list-item-reset-button"
                    size="sm"
                    hidden={!props.editMode}
                    onClick={props.resetBeverageData}>Cancel</Button>

            <Button type="submit"
                    variant="primary"
                    className="list-item-save-button"
                    size="sm"
                    hidden={!props.editMode}
                    onClick={props.handleSubmit}>Save</Button>
        </div>
    )
}

export default ActionButtons;
