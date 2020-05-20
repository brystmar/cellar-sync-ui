import React from 'react';

function AttrSize(props) {
    return (
        <>
            <td className="list-item-table-key">
                <i className="fas fa-wine-bottle"/>
                {/*<img src="./icons/noun_wine_bottle_246969.svg"*/}
                {/*     alt="Size"*/}
                {/*     className="list-item-icon-key"/>*/}
                {/*<img src="./icons/noun_Wine_Bottles_1922141.svg"*/}
                {/*     alt="Size"*/}
                {/*     className="list-item-icon-key"/>*/}
            </td>
            <td className="list-item-table-value"
                onClick={() => props.updateBeverageState({editMode: true})}>
                {props.size}
            </td>
        </>
    )
}

export default AttrSize;
