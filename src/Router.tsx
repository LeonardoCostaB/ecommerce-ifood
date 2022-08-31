import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutUs } from "./pages/About-us";


export function Router() {
   return (
      <Routes>
         <Route path="/" element={ <Home /> } />
         <Route path="/about-us" element={ <AboutUs /> } />
      </Routes>
   );
};
