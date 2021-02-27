import {AppDispatch} from "../index";



 import axios, {AxiosError} from "axios";
export const ADD_PROJECT = "ADD_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const LOADING_PROJECT = "LOADING_PROJECT";
export const ERROR_PROJECT = "ERROR_PROJECT";

const client = axios.create({baseURL:"http://localhost:8080"})

export interface ProjectTypes {
     type:any,
}
interface AddProjectType extends ProjectTypes {
   type:typeof ADD_PROJECT,
    payload:{
       project_id:string
    }
}
interface RemoveProjectType extends ProjectTypes {
    type:typeof REMOVE_PROJECT
}
interface LoadingType extends  ProjectTypes {
    type: typeof LOADING_PROJECT
}
interface ErrorProjectType extends ProjectTypes {
    type:typeof ERROR_PROJECT,
    payload:string
}
export type ProjectActionTypes = LoadingType| AddProjectType | RemoveProjectType |  ErrorProjectType;

export const loadingProject = ():ProjectActionTypes => {
    return {
        type: LOADING_PROJECT
    }
};
export const errorProject = (error:string):ProjectActionTypes => {
    return {
        type: ERROR_PROJECT,
        payload:"Hubo este error"+error
    }
};
export const projectAdded  =(projectId:string):ProjectActionTypes => {
    return {
        type:ADD_PROJECT,
        payload:{
            project_id:projectId
        }
    }
};

export const getAllProjects = () => async (dispatch:AppDispatch) => {
    dispatch(loadingProject)

    try {
        const response = await client.get("/api/projects/all")

    }
    catch (e:any)
    {
        console.log((e as AxiosError).message)
    }

}

export const addProject = (project:string) => async (dispatch:AppDispatch) => {
    dispatch(loadingProject())
    try {


        const response = await  client.get("/api/projects/all");
        console.log(JSON.stringify(response));



    }
    catch (e:any)
    {
        const message=(e as AxiosError).message;
        console.log(message);
        dispatch(errorProject(message));
    }
}