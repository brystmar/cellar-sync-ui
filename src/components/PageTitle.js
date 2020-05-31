import React from 'react';

function PageTitle(props) {
    return (
        <h1 className="page-title">
            {props.logo ? props.logo : ""}
            {props.title}
            {props.includeHr ? <hr/> : ""}
        </h1>
    )
}

PageTitle.defaultProps = {
    title: "Default",
    logo: "",
    includeHr: true
}

export default PageTitle;
