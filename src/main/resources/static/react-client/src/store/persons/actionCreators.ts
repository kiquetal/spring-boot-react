import {AppDispatch} from "../index";

export const ADD_PEOPLE= "ADD_PEOPLE"
export const DELETE_PEOPLE= "DELETE_PEOPLE"
export const GET_ALL_PEOPLE="GET_PEOPLE";
export interface PersonTypes {
    type:any,
}
interface AddPeople extends PersonTypes {
    type: typeof ADD_PEOPLE,
    payload:any
}
interface DeletePeople extends PersonTypes {
    type: typeof DELETE_PEOPLE
    payload:any
}
interface GetAllPeople extends PersonTypes {
    type: typeof GET_ALL_PEOPLE,
    payload:People[]
}

export interface People {
    name:string,
    role:string
}

export type PeopleTypes = AddPeople | DeletePeople | GetAllPeople


export const obtainPeople = (p:People[]): PeopleTypes => {

    return {
        type: GET_ALL_PEOPLE,
        payload:p
    }
} ;

export const obtainAllPeople=()=> async (dispatch:AppDispatch) => {




}
