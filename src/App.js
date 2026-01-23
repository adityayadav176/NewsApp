import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <Router>
        <NavBar />
 <LoadingBar
        color="#f11946"
        progress={10}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route
            path="/business"
            element={<News pageSize={this.pageSize} key="business" country="us" category="business" />}
          />

          <Route
            path="/entertainment"
            element={<News pageSize={this.pageSize} key="entertainment" country="us" category="entertainment" />}
          />

          <Route
            path="/general"
            element={<News pageSize={this.pageSize} key="general" country="us" category="general" />}
          />

          <Route
            path="/health"
            element={<News pageSize={this.pageSize} key="health" country="us" category="health" />}
          />

          <Route
            path="/science"
            element={<News pageSize={this.pageSize} key="science" country="us" category="science" />}
          />

          <Route
            path="/sports"
            element={<News pageSize={this.pageSize} key="sports" country="us" category="sports" />}
          />

          <Route
            path="/technology"
            element={<News pageSize={this.pageSize} key="technology" country="us" category="technology" />}
          />
        </Routes>

      </Router>
    );
  }
}
