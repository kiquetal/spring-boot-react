import { composeWithDevTools } from 'redux-devtools-extension';
import thunk ,{ThunkMiddleware,ThunkAction} from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware, Action} from "redux";
import { ProjectState, reducerProject} from "./projects/reducers";
import {ProjectActionTypes} from "./projects/actionCreators";
const rootReducer= combineReducers<AllStatesStore>({
    projects:reducerProject
});


export interface AllStatesStore {
    projects:ProjectState
}

/*
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AllStatesStore,
    unknown,
    ProjectActionTypes
    >
*/
const middleware = thunk as ThunkMiddleware<AllStatesStore,ProjectActionTypes>;


const store= createStore(rootReducer,
                composeWithDevTools(applyMiddleware(middleware))
                );


export type AppDispatch = typeof store.dispatch


export default store;