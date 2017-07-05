import React, {Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TopStories from './components/TopStories'
import {Switch, Route} from 'react-router-dom'
import Item from './components/Item'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Header/>
          <Switch>
            <Route exact path='/' component={TopStories}/>
            <Route path='/item/:id' component={Item}/>
          </Switch>
          <Footer/>
        </div>

      </div>
    );
  }
}

export default App;
