import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Kids from "./Components/Kids";
import Women from "./Components/Women";
import Men from "./Components/Men";
import Hot from "./Components/Hot";
import Jewelry from "./Components/Jewelry";
import Shoes from "./Components/Shoes";
import Jackets from "./Components/Jackets";
import Pants from "./Components/Pants";
import Login from "./Components/Login";
import Basket from "./Components/Basket";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Banner />}></Route>
        <Route exact path="/Kids" element={<Kids />}></Route>
        <Route path="/Women" element={<Women />}></Route>
        <Route path="/Men" element={<Men />}></Route>
        <Route path="/Hot" element={<Hot />}></Route>
        <Route path="/Jewlery" element={<Jewelry />}></Route>
        <Route path="/Shoes" element={<Shoes />}></Route>
        <Route path="/Jackets" element={<Jackets />}></Route>
        <Route path="/Pants" element={<Pants />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Basket" element={<Basket />}></Route>
      </Routes>
    </>
  );
}

export default App;
