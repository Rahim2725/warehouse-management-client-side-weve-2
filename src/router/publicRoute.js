import Contact from "../pages/Contact"
import Blogs from "../pages/Home/Blogs"
import Home from "../pages/Home/Home"
import ForgotPassword from "../pages/Login/ForgotPassword"
import Login from "../pages/Login/Login"
import Register from "../pages/Login/Register"

export const  publicRoute = [
   {path:"/", name:"home", Component: Home},
   {path:"/contact", name:"contact", Component: Contact},
   {path:"/blogs", name:"blogs", Component: Blogs},
   {path:"/login", name:"blogs", Component: Login},
   {path:"/register", name:"blogs", Component: Register},
   {path:"/forgotPassword", name:"ForgotPassword", Component: ForgotPassword},
]