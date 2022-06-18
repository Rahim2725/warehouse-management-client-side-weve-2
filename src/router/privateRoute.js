import Blogs from "../pages/Blogs";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";


export const privateRoute = [
   {path:"/service", name:"contact", Component: ServiceDetails},
   {path:"/blogs", name:"blogs", Component: Blogs},
   {path:"/services", name:"services", Component: ServiceDetails},
]