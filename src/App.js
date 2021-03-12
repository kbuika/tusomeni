import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import PaperDetails from "./pages/paperDetails";
import PDFDetails from "./pages/PDFDetails";
import renderIf from "render-if";

function App() {
  return (
    <Router>
      {renderIf(window.location.pathname !== "/single-paper-pdf")(<Header />)}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-tusomeni" component={AboutPage} />
        <Route path="/single-paper/:id" component={PaperDetails} />
        <Route path="/single-paper-pdf" component={PDFDetails} />
      </Switch>
      {renderIf(window.location.pathname !== "/single-paper-pdf")(<Footer />)}
    </Router>
  );
}

export default App;
