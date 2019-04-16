import React, { Component } from 'react';
import './App.css';

import Layout from '../src/pages/Layout';
import Home from '../src/pages/HomeContent';
import Projects from '../src/pages/Projects';
import { Switch, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Layout>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/projects' component={Projects}></Route>
          {/* <Route path='/about' component={About}></Route>
          <Route path='/services' component={Services}></Route>
          <Route path='/mobile' component={MobileServices}></Route>
          <Route path='/seo' component={SEO} ></Route>
          <Route path='/contact' component={Contact} ></Route>
          <Route path='/blog' component={Blog} ></Route> */}
        </Switch>
      </div>
      </Layout>
    );
  }
}

export default App;