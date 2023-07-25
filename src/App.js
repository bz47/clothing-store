import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Kids from "./Components/Kids";
import Women from "./Components/Women";
import Men from "./Components/Men";
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
      </Routes>
    </>
  );
}

export default App;
