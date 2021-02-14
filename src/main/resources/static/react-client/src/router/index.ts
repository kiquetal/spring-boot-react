import DashBoard from "../components/Dashboard";

interface IRoutes {

    path:string,
    name:string,
    component:any,
    exact?:boolean

}

const routes:IRoutes[] = [{
    component:DashBoard,
    path:'/',
    name:"Dashboard",
    exact:true
}]

export default routes;