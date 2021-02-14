import * as React from 'react';
import {useEffect} from "react";
import ProjectItem from "./project/ProjectItem";


export interface IProps
{
    name:String
}

const DashBoard:React.FunctionComponent<IProps> = props => {
    useEffect(()=>{
        console.log(props.name);
    },[])

    return (<div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Projects</h1>
                    <br/>
                    <a href="ProjectForm.html" className="btn btn-lg btn-info">
                        Create a Project
                    </a>
                    <br/>
                    <hr/>
                     <ProjectItem/>
                </div>
            </div>
        </div>
    </div>)

    }

export default DashBoard;