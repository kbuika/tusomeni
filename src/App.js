import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import PaperDetails from "./pages/paperDetails";
// import PDFDetails from "./pages/PDFDetails";
import renderIf from "render-if";

import ReactGA from "react-ga";
ReactGA.initialize("265507721");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Router>
      {renderIf(window.location.pathname !== "/single-paper")(<Header />)}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-tusomeni" component={AboutPage} />
        <Route path="/single-paper/:id" component={PaperDetails} />
        {/* <Route path="/single-paper-pdf" component={PDFDetails} /> */}
      </Switch>
      {renderIf(window.location.pathname !== "/single-paper")(<Footer />)}
    </Router>
  );
}

export default App;
