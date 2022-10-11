import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {BrowserRouter as Router,Routes, Route}
 from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
function App() {

const [{},dispatch ] = useStateValue();

useEffect(() => {
  //will only run once when the app component loads
auth.onAuthStateChanged(authUser =>{
  console.log('The user is>>',authUser);

  if(authUser){
    //the user just logged in/ the user was logged
    dispatch({
      type: 'SET_USER',
      user: authUser
    })
  } else{
    //the user is logged out
    dispatch({
      type: 'SET_USER',
      user:null
    })
  }

})
  
}, [])




  return (
    <Router>
      <div className="app">
      
      <Routes>
        <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
        <Route path="/" element={[<Header/>,<Home/>]}/>
        <Route path="/payment" element={[<Header/>,<Payment/>]}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

      

    </div>
    </Router>
    
  );
}

export default App;
