import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { publicRoute } from "./router/publicRoute";
import { privateRoute } from "./router/privateRoute";
import PrivateRoute from "./authentication/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        {
          publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} ></Route>
          ))
        }
        <Route element={<PrivateRoute/>}>
          {
            privateRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} ></Route>
            ))
          }
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
