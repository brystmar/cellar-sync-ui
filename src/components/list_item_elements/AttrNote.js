import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrNote(props) {
    return (
        <Form.Group controlId="formNote" className="form-input-group">
            <img alt="Note"
                 src="./icons/sticky-note-regular.svg"
                 className="list-item-icon-key"/>
            <Form.Label hidden={props.forNewBeverage}>Note</Form.Label>

            <Form.Control name="note"
                          type="text"
                          placeholder="Note"
                          className="input-text-long list-item-value"
                          value={props.note}
                          onChange={props.handleChange}/>
        </Form.Group>
    )
}

AttrNote.defaultProps = {
    note: "",
    forNewBeverage: false
}

export default AttrNote;
