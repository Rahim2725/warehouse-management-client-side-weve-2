import AddProduct from "../pages/Dashboard/user/AddProduct";
import AddReview from "../pages/Dashboard/user/AddReview";
import MyItem from "../pages/Dashboard/user/MyItem";

export const  dashboardRoute = [
   {path:"addReview", name:"add review", Component: AddReview},
   {path:'addProduct', name:"AddProduct", Component: AddProduct},
   {path:'myItems', name:"my item", Component: MyItem},

]