import React from "react";
import Joi from 'joi';

import {AnyAction, bindActionCreators, Dispatch, Store} from "redux";
import {addProject, ProjectActionTypes} from "../../store/projects/actionCreators";
import { withRouter } from "react-router-dom"
import {AllStatesStore, AppDispatch} from "../../store";
import {RouteComponentProps} from "react-router";

import { connect, ConnectedProps } from 'react-redux';



interface IProps   {
    some?:string,
    loading:boolean,
    addProject1:Function
};

const mapStateToProps=(state:AllStatesStore) => {
    return {
        some : state.projects.project?.project_id,
        loading: state.projects.loading
    };
}

const mapStateDispatch=(dispatch:AppDispatch) => {
    return {
         addProject1:(project:string)=> {
             dispatch(addProject(project))
         }
    }
}

interface IState {
    description:string,
    startDate:string,
    endDate:string,
    projectName:string,
    projectIdentifier:string
}
class AddProject extends React.Component<IProps & RouteComponentProps<{}>, IState>
{

    state: IState = {
        description:"",
        endDate:"",
        projectName:"",
        startDate:"",
        projectIdentifier:""
    };

    inputSchema = Joi.object({

        description:Joi.string().required(),
        projectName:Joi.string().required(),
        endDate:Joi.string().optional().allow(''),
        startDate:Joi.string().optional().allow(''),
        projectIdentifier:Joi.string().allow('')

    });

    constructor(props:IProps & RouteComponentProps<{}>) {
        super(props);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm=(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const { addProject1 } = this.props

        addProject1(this.state.projectName);
        const { error, value } = this.inputSchema.validate(this.state,{abortEarly:false});

        if (!error)
            console.log("no error");
        else
            alert(JSON.stringify(error?.details));
        console.log(JSON.stringify({...this.state}));
    }
    render() {
       const { some, loading } = this.props;

        return(
            <div className="register">
                <div className="container">
                 <span>  El valor es  "{some}" `${loading.toString()}`</span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Project form</h5>
                            <hr/>
                            <form id="form1" onSubmit={this.onSubmitForm}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg "
                                           name="projectName"
                                           onChange={event => this.setState({...this.state,
                                                'projectName':event.target.value }
                                                )}
                                           placeholder="Project Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg"
                                           placeholder="Unique Project ID"
                                           onChange={event => this.setState({...this.state,
                                           "projectIdentifier":event.target.value})}
                                           name="projectIdentifier"
                                           />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg"
                                              name="description"
                                              onChange={event => this.setState({...this.state,
                                              "description":event.target.value})}
                                              placeholder="Project Description"></textarea>
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                           onChange={event => this.setState({...this.state,
                                           "startDate":event.target.value})}
                                           className="form-control form-control-lg" name="startDate"/>
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                           onChange={event => this.setState({...this.state,
                                           "endDate":event.target.value})}
                                           className="form-control form-control-lg" name="endDate"/>
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



 export default  connect(mapStateToProps,mapStateDispatch)(withRouter(AddProject));