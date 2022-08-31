import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutUs } from "./pages/About-us";
import { Contact } from "./pages/Contact";
import { Dealer } from "./pages/Dealer";

export function Router() {
   return (
      <Routes>
         <Route path="/" element={ <Home /> } />
         <Route path="/about-us" element={ <AboutUs /> } />
         <Route path="/contact" element={ <Contact /> } />
         <Route path="/dealer" element={ <Dealer /> } />
      </Routes>
   );
};
