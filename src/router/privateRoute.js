import Blogs from "../pages/Home/Blogs";
import ServiceInfo from "../pages/Home/ServiceInfo";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";


export const privateRoute = [
   {path:"/service", name:"contact", Component: ServiceDetails},
   {path:"/blogs", name:"blogs", Component: Blogs},
   {path:"/service/:serviceId", name:"", Component: ServiceInfo },
   {path:"/services", name:"services", Component: ServiceDetails},
]