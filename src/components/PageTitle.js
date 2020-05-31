import React from 'react';

function PageTitle(props) {
    return (
        <h1 className="page-title">
            <img src="./icons/cellar-logo.jpg"
                 alt="Trade Value: High"/>
            {props.title}
            {props.includeHr ? <hr/> : ""}
        </h1>
    )
}

PageTitle.defaultProps = {
    title: "Default Title",
    includeHr: true
}

export default PageTitle;
