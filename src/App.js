import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import PaperDetails from "./pages/paperDetails";
import Twenty from "./pages/2020";

// import PDFDetails from "./pages/PDFDetails";
import Error from "./pages/404/404";
import renderIf from "render-if";

import ReactGA from "react-ga";
var host = window.location.hostname;
if (host !== "localhost") {
  ReactGA.initialize("UA-149879025-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  return (
    <Router>
      {renderIf(window.location.pathname !== "/single-paper")(<Header />)}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-tusomeni" component={AboutPage} />
        <Route path="/single-paper/:id" component={PaperDetails} />
        <Route path="/2020-papers" component={Twenty} />
        <Route path="*" component={Error} />
        {/* <Route path="/single-paper-pdf" component={PDFDetails} /> */}
      </Switch>
      {renderIf(window.location.pathname !== "/single-paper")(<Footer />)}
    </Router>
  );
}

export default App;
