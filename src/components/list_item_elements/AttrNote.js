import React from 'react';
import Form from 'react-bootstrap/Form';

function AttrNote(props) {
    return (
        <Form.Group controlId="formNote" className="input-note input-group">
            <span className="list-item-key">
                <img alt="Note"
                     src="./icons/sticky-note-regular.svg"
                     className="list-item-key-icon"/>
                <Form.Label hidden={props.forNewBeverage}>Note</Form.Label>
            </span>

            <Form.Control name="note"
                          type="text"
                          placeholder="Note"
                          className="input-longtext list-item-value"
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
