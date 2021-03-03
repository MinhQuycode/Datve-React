import "./App.css";
import Home from "./pages/home";
import Detail from './pages/detail/index'
import DanhSachNguoiDung from "./pages/detail/DanhSachNguoiDung";
import Hook from "./pages/hook";
import Login from "./pages/login";
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Header from "./components/header";
import {mainRouter,adminRouter} from "./config/router";
import RouteMain from "./teamplate/main";
import RouteAdmin from "./teamplate/admin";
import Guard from "./HOC/guard";


function App() {
  const renderMainRouter = (listRouter) => {
    return listRouter.map((router,index)=>{
      //cach 1
      // const {path,exact,Component} = router;
      // return (
      // <Route path={path} exact={exact}>
      //   <Component/>
      // </Route>
      // );
      //cách 2 render props
      // const { Component, ...props} = router;
      // return (
      //   <Route {...props}>
      //   <Component/>
      //  </Route>
      // )
      return <RouteMain {...router} key={index}/>
    });
  }
  function reanderAdminRouter(listRouter) {
    return listRouter.map((router,index)=>{
      // console.log(router)
      // const {Component,...props} = router;
      return(
      <Guard>
          <RouteAdmin {...router} key={index}/>
      </Guard>

      )
    })
  }
  return (
    <>
     <BrowserRouter>
     <Switch>
       {/* path="/" <==> url=http:/localhost:3000/ exact : Để tăng độ chính xác của url
       <Route path="/" exact>
          <Home/>
        </Route>
      path="/sign-in" <==> url=http:/localhost:3000/sign-in
      <Route path="/sign-in">
          <Login/>
        </Route>
      path="/" <==> url=http:/localhost:3000/detail/1314
      <Route path="/detail/:movieCode">
          <Detail/>
        </Route> */}
        {renderMainRouter(mainRouter)}
        {reanderAdminRouter(adminRouter)}
     </Switch>
     </BrowserRouter>
    </>
  );
}
export default App;
