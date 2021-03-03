import { Route } from "react-router-dom";
import ScrollToTop from "../../components/scroll-to-top";
const AdminLayout = (props) =>{
    // console.log(props)
    return <>
        <div style ={{display:'flex'}}>
            <div>Side bar</div>
            <div>
                <header>Header</header>
                <main>{props.children}</main>            
            </div>
        </div>
    </>
}

const RouteAdmin = (props) =>{
    const {Component ,...routes} = props;
    return (
    <Route {...routes}>
        <AdminLayout>
            <ScrollToTop/>
            <Component/>
        </AdminLayout>
    </Route>
    );
}
export default RouteAdmin;