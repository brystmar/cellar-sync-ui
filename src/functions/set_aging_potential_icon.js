import React from 'react';

function set_aging_potential_icon(aging_potential) {
    if (aging_potential) {
        if (aging_potential === 1) {
            return <i className="far fa-smile"/>
        } else if (aging_potential === 2) {
            return <i className="far fa-meh"/>
        } else if (aging_potential === 3) {
            return <i className="far fa-frown"/>
        } else {
            return <i className="far fa-meh"/>
        }
    } else {
        return <i className="far fa-meh"/>
    }    
}

export default set_aging_potential_icon;
