import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch >
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/detail/:id" >
            <Detail />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
