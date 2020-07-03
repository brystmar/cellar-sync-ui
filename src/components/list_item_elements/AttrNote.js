import React from 'react';

function AttrNote(props) {
    return (
        <span className="input-note input-group">
            <span className="list-item-key">
                <span className="list-item-key-icon-container">
                    <img alt="Note" src="./icons/sticky-note-regular.svg"/>
                </span>
                <label className="list-item-label-sm"
                       hidden={props.forNewBeverage}>Note</label>
            </span>

            <input name="note"
                   type="text"
                   placeholder="Note"
                   className="input-longtext list-item-value"
                   value={props.note}
                   onChange={props.handleChange}/>
        </span>
    )
}

AttrNote.defaultProps = {
    note: "",
    forNewBeverage: false
}

export default AttrNote;
