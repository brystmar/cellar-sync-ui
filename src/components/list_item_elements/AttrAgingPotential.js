import React from 'react';
import Form from 'react-bootstrap/Form';
import toggle_value_icons from '../../functions/toggle_value_icons';

function AttrAgingPotential(props) {
    return (
        <Form.Group controlId="formAgingPotential">
            <Form.Label>
                <img src="./icons/spider-solid.svg"
                     alt="Aging Potential"
                     className="list-item-icon-key"/>
                {props.forNewBeverage ? "Aging Potential" : ""}
            </Form.Label>
            {mapAgingPotentialIcons(props)}
        </Form.Group>
    )
}

function mapAgingPotentialIcons(props) {
    if (props.aging_potential === 1) {
        return <img src="./icons/face-smile-regular.svg"
                    alt="Ages Well"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        aging_potential: toggle_value_icons(props.aging_potential),
                        editMode: true
                    })}/>;
    } else if (props.aging_potential === 3) {
        return <img src="./icons/face-frown-regular.svg"
                    alt="Ages Poorly"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        aging_potential: toggle_value_icons(props.aging_potential),
                        editMode: true
                    })}/>;
    } else {
        return <img src="./icons/face-meh-regular.svg"
                    alt="Ages Okay"
                    className="list-item-icon-value clickable-toggle"
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
