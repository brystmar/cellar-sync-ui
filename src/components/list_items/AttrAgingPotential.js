import React from 'react';
import toggle_value_icons from '../../functions/toggle_value_icons';

function AttrAgingPotential(props) {
    return (
        <>
            <td className="list-item-table-key">
                <i className="fas fa-spider"/>
            </td>
            <td className="list-item-table-value">
                {mapAgingPotentialIcons(props)}
            </td>
        </>
    )
}

function mapAgingPotentialIcons(props) {
    if (props.aging_potential === 1) {
        return <img src="./icons/face-smile-regular.svg"
                    alt="Ages Well"
                    className="list-item-icon-value"
                    onClick={() => props.updateBeverageState({
                        aging_potential: toggle_value_icons(props.aging_potential)
                    })}/>;
    } else if (props.aging_potential === 3) {
        return <img src="./icons/face-frown-regular.svg"
                    alt="Ages Poorly"
                    className="list-item-icon-value"
                    onClick={() => props.updateBeverageState({
                        aging_potential: toggle_value_icons(props.aging_potential)
                    })}/>;
    } else {
        return <img src="./icons/face-meh-regular.svg"
                    alt="Ages Okay"
                    className="list-item-icon-value"
                    onClick={() => props.updateBeverageState({
                        aging_potential: toggle_value_icons(props.aging_potential)
                    })}/>;
    }
}

export default AttrAgingPotential;
