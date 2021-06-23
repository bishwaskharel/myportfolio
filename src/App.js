import React from "react";
// Import Router
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Import Pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import OurWork from "./pages/OurWork";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id" >
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
