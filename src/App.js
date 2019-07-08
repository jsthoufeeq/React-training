import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/homeComponent';
import RegisterComponent from './components/registerComponent';
import ProductsComponent from './components/productsComponent';
import NotFound from './components/notFound';

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {

  let [a, setA] = useState(''); //setBar -- change the 'bar' variable.  [a, setA] = [a'values, setState]
  const updateParent = (data) => {
    setA((a) => 
      a = data
    );
  }

  return (
    <div className="App">
      {/* <h3>Demonstrate value---> {a}</h3> */}
      {/* <HomeComponent foo="from parent" fromChild={updateParent}></HomeComponent> */}

      <Router>


        <ul>
          <li>
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">Products</Link>
          </li>
        </ul>
                

        <Switch>
          <Route path="/home" exact component={HomeComponent}></Route>
          <Route path="/register" exact component={RegisterComponent}></Route>
          <Route path="/products/:id" exact component={ProductsComponent}></Route>
          <Route component={NotFound}></Route>
        </Switch>

      </Router>

      {/* <RegisterComponent></RegisterComponent> */}
    </div>
  );
}

export default App;
