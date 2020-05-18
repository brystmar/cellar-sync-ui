import React from 'react';

function AttrAgingPotential(props) {
    // Map values to icons
    let agingPotential = <i className="far fa-meh clickable-toggle"/>
    // onClick={() => props.updateBeverageState({aging_potential: 3})}/>

    if (props.aging_potential) {
        if (props.aging_potential === 1) {
            agingPotential = <i className="far fa-smile clickable-toggle"/>
            // onClick={() => props.updateBeverageState({aging_potential: 2})}/>
        } else if (props.aging_potential === 3) {
            agingPotential = <i className="far fa-frown clickable-toggle"/>
            // onClick={() => props.updateBeverageState({aging_potential: 1})}/>
        }
    }

    return (
        <>
            <td className="list-item-table-key">
                <i className="fas fa-spider"/>
            </td>
            <td className="list-item-table-value"
                onClick={() => props.updateBeverageState({aging_potential: props.aging_potential + 1})}>
                {agingPotential}
            </td>
        </>
    )
}

export default AttrAgingPotential;
