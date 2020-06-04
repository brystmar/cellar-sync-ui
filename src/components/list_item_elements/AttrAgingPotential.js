import React from 'react';
import Form from 'react-bootstrap/Form';
import toggle_value_icons from '../../functions/toggle_value_icons';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AttrAgingPotential(props) {
    return (
        <>
            {props.forNewBeverage ?
                <Form.Group as={Row} controlId="formAgingPotential">
                    <Form.Label column={true} sm={10}>
                        Aging Potential
                        <img alt="Aging Potential"
                         src="./icons/spider-solid.svg"
                         className="list-item-icon-key"/>
                    </Form.Label>
                    <Col sm={3}>
                        {mapAgingPotentialIcons(props)}
                    </Col>
                </Form.Group>

                : <Form.Group controlId="formAgingPotential">
                    <img alt="Aging Potential"
                         src="./icons/spider-solid.svg"
                         className="list-item-icon-key"/>

                    {mapAgingPotentialIcons(props)}
                </Form.Group>
            }
        </>

    )
}

function mapAgingPotentialIcons(props) {
    if (props.aging_potential === 1) {
        return <img alt="Ages Well"
                    src="./icons/face-smile-regular.svg"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        aging_potential: toggle_value_icons(props.aging_potential),
                        editMode: true
                    })}/>;
    } else if (props.aging_potential === 3) {
        return <img alt="Ages Poorly"
                    src="./icons/face-frown-regular.svg"
                    className="list-item-icon-value clickable-toggle"
                    onClick={() => props.updateBeverageState({
                        aging_potential: toggle_value_icons(props.aging_potential),
                        editMode: true
                    })}/>;
    } else {
        return <img alt="Ages Okay"
                    src="./icons/face-meh-regular.svg"
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
