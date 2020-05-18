import React from 'react';

function AttrBatch(props) {
    return (
        <>
            <td className="list-item-table-key">
                {/*<span className="svg-inline--fa">b</span>*/}
                <img src="./icons/noun_Bat_2088669.svg"
                     alt="Batch"
                     className="list-item-icon-key"/>
            </td>
            <td className="list-item-table-value">
                {props.batch}
            </td>
        </>
    )
}

export default AttrBatch;
