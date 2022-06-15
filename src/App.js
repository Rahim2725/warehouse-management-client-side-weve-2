import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
