import { Route } from "react-router-dom";
import Header from "../../components/header"
import ScrollToTop from "../../components/scroll-to-top";

const HomeLayout = (props) =>{
    return (
    <> 
        <Header/>
        <main style={{marginTop:"50px"}}>
            {props.children}
        </main>
    </>
    );
};

const  RouteMain = (props) =>{
    const {Component, ...routes} = props;
    return (
        <Route {...routes}>
            <HomeLayout>
                <ScrollToTop/>
                <Component/>
            </HomeLayout>
        </Route>
    )
}

export default RouteMain;