import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopStories from "./components/TopStories";
import ShowStories from "./components/ShowStories";
import AskStories from "./components/AskStories";
import JobStories from "./components/JobStories";
import Item from "./components/Item";
import User from "./components/User";
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
            <Route exact path="/ask" component={AskStories} />
            <Route path="/ask/:page" component={AskStories} />
            <Route exact path="/jobs" component={JobStories} />
            <Route path="/jobs/:page" component={JobStories} />
            <Route exact path="/show" component={ShowStories} />
            <Route path="/show/:page" component={ShowStories} />
            <Route path="/item/:id" component={Item} />
            <Route path="/user/:id" component={User} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
