import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />

        <Routes>
          <Route
            path="/business"
            element={<News pageSize={6} key="business" country="us" category="business" />}
          />

          <Route
            path="/entertainment"
            element={<News pageSize={6} key="entertainment" country="us" category="entertainment" />}
          />

          <Route
            path="/general"
            element={<News pageSize={6} key="general" country="us" category="general" />}
          />

          <Route
            path="/health"
            element={<News pageSize={6} key="health" country="us" category="health" />}
          />

          <Route
            path="/science"
            element={<News pageSize={6} key="science" country="us" category="science" />}
          />

          <Route
            path="/sports"
            element={<News pageSize={6} key="sports" country="us" category="sports" />}
          />

          <Route
            path="/technology"
            element={<News pageSize={6} key="technology" country="us" category="technology" />}
          />
        </Routes>

      </Router>
    );
  }
}
