import React from "react";
interface IProps {
    name:string
}
class AddProject extends React.Component<IProps, {}>
{
    constructor(props:IProps) {
        super(props);
    }

    render() {
        return(
       <div>
           <h1>Add Project</h1>
       </div>
        );
    }
}
export default AddProject;