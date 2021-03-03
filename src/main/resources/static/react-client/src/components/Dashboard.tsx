import * as React from 'react';
import {useEffect} from "react";
import ProjectItem from "./project/ProjectItem";
import CreateProjectButton from "./project/CreateProjectButton";
import {useDispatch, useSelector, useStore} from "react-redux";
import {AllStatesStore, AppDispatch} from "../store";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {getAllProjects} from "../store/projects/actionCreators";


export interface IProps
{
    name:String
}

const DashBoard:React.FunctionComponent<IProps & RouteComponentProps> = props => {

    const allProjects:unknown  = useSelector<AllStatesStore>(state => state.projects.allProjects);

    const loading = useSelector<AllStatesStore>(state => state.projects.loading);
    const  dispatch  = useDispatch<AppDispatch>();

    useEffect(()=>{
        dispatch(getAllProjects());
    },[])

    return (<div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {
                        loading ? <span>cargando</span>:<div>cargado</div>
                    }

                    <h1 className="display-4 text-center">Projects</h1>
                    <br/>
                    <CreateProjectButton/>
                    <br/>
                    <hr/>
                     <ProjectItem/>
                </div>
            </div>
        </div>
    </div>)

    }

export default withRouter(DashBoard);