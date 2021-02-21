import {ADD_PROJECT,  ERROR_PROJECT, LOADING_PROJECT, ProjectActionTypes} from "./actionCreators";
import {ProjectModel} from "../../models";
import {HeapProfiler} from "inspector";
import {Reducer} from "redux";
import { ThunkDispatch } from "redux-thunk";
export interface ProjectState  {
    loading:boolean,
    error?:string,
    project?: ProjectModel
}
export const initialType: ProjectState = {
    loading:false,
    error:"",
    project:{
        project_id:"",
        description:"",
        project_identifier:""
    }
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
        default:
            return state;
    }


}