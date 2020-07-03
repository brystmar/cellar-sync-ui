import React from 'react';
import toggle_value_icons from '../../functions/toggle_value_icons';

function AttrAgingPotential(props) {
    return (
        <>
            <span className="input-aging input-group">
                <span className="list-item-key">
                    <span className="list-item-key-icon-container">
                        <img alt="Aging Potential" src="./icons/spider-solid.svg"/>
                    </span>
                    <label className="list-item-label-lg">
                        Ages Well
                    </label>
                </span>
                <span className="list-item-value clickable-toggle">
                    {mapAgingPotentialIcons(props)}
                </span>
            </span>
        </>

    )
}

function mapAgingPotentialIcons(props) {
    if (props.aging_potential === 1) {
        return <img alt="Ages Well"
                    src="./icons/face-smile-regular.svg"
                    onClick={() => props.updateBeverageState({
                        aging_potential: toggle_value_icons(props.aging_potential),
                        editMode: true
                    })}/>;
    } else if (props.aging_potential === 3) {
        return <img alt="Ages Poorly"
                    src="./icons/face-frown-regular.svg"
                    onClick={() => props.updateBeverageState({
                        aging_potential: toggle_value_icons(props.aging_potential),
                        editMode: true
                    })}/>;
    } else {
        return <img alt="Ages Okay"
                    src="./icons/face-meh-regular.svg"
                    onClick={() => props.updateBeverageState({
                        aging_potential: toggle_value_icons(props.aging_potential),
                        editMode: true
                    })}/>;
    }
}

AttrAgingPotential.defaultProps = {
    aging_potential: 0,
    forNewBeverage: false
}

export default AttrAgingPotential;
