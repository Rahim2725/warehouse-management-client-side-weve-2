import AddProduct from "../pages/Dashboard/user/AddProduct";
import AddReview from "../pages/Dashboard/user/AddReview";

export const  dashboardRoute = [
   {path:"addReview", name:"home", Component: AddReview},
   {path:'addProduct', name:"AddProduct", Component: AddProduct}

]