import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import TopStories from "./components/TopStories";
import Item from "./components/Item";
import NewStories from "./components/NewStories";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Header />
          <Switch>
            <Route exact path="/" component={TopStories} />
            <Route path="/stories/:page" component={TopStories} />
            <Route exact path="/new" component={NewStories} />
            <Route path="/new/:page" component={NewStories} />
            <Route path="/item/:id" component={Item} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
