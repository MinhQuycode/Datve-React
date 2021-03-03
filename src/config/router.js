import Home from "../pages/home";
import Detail from '../pages/detail/index';
import Login from "../pages/login";
import Dashboard  from "../pages/dashboard";
import User from "../pages/user";
import Booking from "../pages/booking";
export const mainRouter = [
    {
        path:"/",
        exact : true,
        Component : Home,
    },
    {
        path:"/sign-in",
        exact : false,
        Component : Login,
    },
    {
        path:"/detail/:movieCode",
        exact : false,
        Component : Detail,
    },
    {
        path:"/booking/:code",
        exact : false,
        Component : Booking,
    }
]

export const adminRouter = [
    {
        path:"/admin",
        exact : true,
        Component : Dashboard,
    },
    {
        path:"/admin/user",
        exact : false,
        Component : User,
    },
]