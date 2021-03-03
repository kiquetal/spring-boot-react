import {ADD_PROJECT, ERROR_PROJECT, GET_ALL_PROJECTS, LOADING_PROJECT, ProjectActionTypes} from "./actionCreators";
import {ProjectModel} from "../../models";
import {Reducer} from "redux";

export interface ProjectState  {
    loading:boolean,
    error?:string,
    project?: ProjectModel,
    allProjects:ProjectModel[]
}
export const initialType: ProjectState = {
    loading:false,
    error:"",
    project:{
        project_id:"",
        description:"",
        project_identifier:""
    },
    allProjects:[]
}
export const reducerProject:Reducer = (state=initialType,action:ProjectActionTypes):ProjectState => {
    switch (action.type){
        case  ADD_PROJECT:
            return {...state,
                     loading:false,
                    error:"ningun error",
                    project:{
                        project_id:action.payload.project_id,
                        description:"",
                        project_identifier:""
                    }
                      };
            break;
        case LOADING_PROJECT: {
            return {...state,loading:true,error:"no error"};
        }
        case ERROR_PROJECT: {
            return {...state,error:action.payload,loading:false}
        }
        case GET_ALL_PROJECTS:  {
            return  { ...state,
                        allProjects:action.payload,loading:false}
        }
        default:
            return state;
    }


}