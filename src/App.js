import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import TopStories from "./components/TopStories";
import Item from "./components/Item";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Header />
          <Switch>
            <Route exact path="/" component={Pagination} />
            <Route path="/item/:id" component={Item} />
            <Route path="/stories/:page" component={Pagination} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
