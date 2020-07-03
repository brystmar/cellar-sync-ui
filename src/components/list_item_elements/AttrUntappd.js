import React from 'react';

function AttrUntappd(props) {
    return (
        <span className="input-untappd input-group">
            <span className="list-item-key">
                <span className="list-item-key-icon-container">
                    <img alt="Untappd" src="./icons/link-solid.svg"/>
                </span>
                <label className="list-item-label-med"
                            hidden={props.forNewBeverage}>Untappd</label>
            </span>

            <input name="untappd"
                          type="text"
                          placeholder="https://untappd.com/b/..."
                          className="input-longtext list-item-value"
                          value={props.untappd}
                          onChange={props.handleChange}/>
        </span>
    )
}

AttrUntappd.defaultProps = {
    untappd: "",
    forNewBeverage: false
}

export default AttrUntappd;
