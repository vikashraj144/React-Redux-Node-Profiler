import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import {Row, Col} from 'react-bootstrap';
import Footer from './components/layout/Footer';
import About from './components/About';
import Header from './components/layout/Header';
import Experience from './components/Experience';

const rightContainer = {
  color: 'red',
  border: '2px solid pink'
};
const rowHeight = {
  height: '530px',
}
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header></Header>
            <Row style={rowHeight}>
              <Col xs={12} style={rightContainer}>
                  <Switch>
                      <Route path='/' component={Home} exact/>
                      <Route path='/about' component={About} />
                      <Route path='/Experience' component={Experience} />
                      <Route path='/404Error' component={PageNotFound} />
                  </Switch>
              </Col>
            </Row>
          {/* <Footer/> */}
        </div>
      </Router>
    );
  }
}

export default App;
