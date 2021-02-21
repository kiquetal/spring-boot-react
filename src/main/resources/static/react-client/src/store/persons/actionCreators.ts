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
export type PeopleTypes = AddPeople | DeletePeople

