import Blogs from "../pages/Blogs"
import Contact from "../pages/Contact"
import Home from "../pages/Home/Home"
import ForgotPassword from "../pages/Login/ForgotPassword"
import Login from "../pages/Login/Login"

export const  publicRoute = [
   {path:"/", name:"home", Component: Home},
   {path:"/contact", name:"contact", Component: Contact},
   {path:"/blogs", name:"blogs", Component: Blogs},
   {path:"/login", name:"blogs", Component: Login},
   {path:"/forgotPassword", name:"ForgotPassword", Component: ForgotPassword},
]