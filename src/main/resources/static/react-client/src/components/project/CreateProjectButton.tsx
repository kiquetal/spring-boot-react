import React from "react";

import { Link } from "react-router-dom";

const CreateProjectButton:React.FunctionComponent<{}> = ()=>{

    return(
        <React.Fragment>
        <Link to="/addProject" href="ProjectForm.html" className="btn btn-lg btn-info">
            Create a Project
        </Link>
        </React.Fragment>
    );


}

export default CreateProjectButton;