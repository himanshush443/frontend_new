import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Route, Router, useHistory } from 'react-router';


import './App.css';
import Main from './main/Main';
import Sales from './sales/Sales';

function App() {
  const [company, setCompany] = useState("");
  const [clientDashboard, setClientdashboard] = useState(false);
 
  const toggleCompany = (company) => {
    setCompany(company);
  }; 

  // const apiKey = 'AIzaSyDCyrPiAOAeqLWEuuDrnVWg5RcBUQv3BLA'
  // const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDCyrPiAOAeqLWEuuDrnVWg5RcBUQv3BLA'


  return (
    <div className="App">
      <Router>
        {/* <Route exact path="/:main" component={Main} /> */}
        {/* <Route exact path="/main" component={Main} /> */}
        {/* <Route exact path="/" component={Main} />
        <Route exact path="/sales" component={Sales} /> */}
      </Router>
    </div>
  );
}

export default App;
