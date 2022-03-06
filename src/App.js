import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import PaperDetails from "./pages/paperDetails";
import Twenty from "./pages/2020";
import CollectPapers from "./pages/CollectPapers";

// import PDFDetails from "./pages/PDFDetails";
import Error from "./pages/404/404";

import ReactGA from "react-ga";
import Landing from "./pages/Landing";
var host = window.location.hostname;
if (host !== "localhost") {
  ReactGA.initialize("UA-149879025-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  return (
    <Router>
      {window.location.pathname !== "/single-paper" &&
        window.location.pathname !== "/" && <Header />}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/papers" component={HomePage} />
        <Route path="/about-tusomeni" component={AboutPage} />
        <Route path="/single-paper/:id" component={PaperDetails} />
        <Route path="/2020-papers" component={Twenty} />
        <Route path="/submit-paper" component={CollectPapers} />
        <Route path="*" component={Error} />
      </Switch>
      {window.location.pathname !== "/single-paper" &&
        window.location.pathname !== "/" && <Footer />}
    </Router>
  );
}

export default App;
