import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";

const Body = ()=>{

    return (
        <div id="appbody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      );
}
export default Body;