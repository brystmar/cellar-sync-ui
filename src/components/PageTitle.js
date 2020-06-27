import React from 'react';

function PageTitle(props) {
    return (
        <div className="page-title">
            <h1>
                {props.logo ? props.logo : ""}
                {props.title}
                {props.includeHr ? <hr/> : ""}
            </h1>
        </div>
    )
}

PageTitle.defaultProps = {
    title: "Default",
    logo: "",
    includeHr: true
}

export default PageTitle;
