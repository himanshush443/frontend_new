import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, useHistory } from 'react-router-dom';


import './App.css';
import Main from './main/Main';
import CarInsuranceProposalForm from './sales/components/CarInsurance/CarInsuranceProposalForm';
import DetailConfirmation from './sales/components/CarInsurance/DetailConfirmation';
import InspectionConfirmation from './sales/components/CarInsurance/InspectionConfirmation';
import InsuranceList from './sales/components/CarInsurance/InsuranceList';
import MotorForm from './sales/components/CarInsurance/MotorForm';
import PaymentConfirmation from './sales/components/CarInsurance/PaymentConfirmation';
import ReviewConfirmation from './sales/components/CarInsurance/ReviewConfirmation';
import ThankyouPage from './sales/components/common/ThankyouPage';
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
        <Route exact path="/" component={Main} />
        <Route exact path="/sales" component={Sales} />

        <Route exact path="/:company/motor-form" component={MotorForm} />
        <Route exact path="/:company/car-insurance" component={InsuranceList} />
        <Route exact path="/:company/car-insurance-proposal-form" component={CarInsuranceProposalForm} />
        <Route exact path="/:company/review-confirmation" component={ReviewConfirmation} />
        <Route exact path="/:company/payment-confirmation" component={PaymentConfirmation} />
        <Route exact path="/:company/detail-confirmation" component={DetailConfirmation} />
        <Route exact path="/:company/inspection-confirmation" component={InspectionConfirmation} />

        <Route exact path="/:company/thankyou" component={ThankyouPage} />
      </Router>
    </div>
  );
}

export default App;
