import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';
//useHistory replaced by useNavigate
// history.push() doesnt work --> history() works
function Login() {

    const history = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  
    const signIn = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history('/')
            })
            .catch(error=>alert(error.message))

    }
   const register = e=>{
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //it successfully created a new user
            console.log(auth);
            if(auth){
                history('/')
            }
        })
        .catch(error=>alert(error.message))
   }
  
  
  
    return (
    <div className='login'>
        <img src="https://listverse.com/wp-content/uploads/2013/07/amazon-e1372909416607.jpg" 
        alt="" className="login__logo" />

        <div className="login__container">
            <h1>Sign In</h1>
            <form >
                <h5>E-mail</h5>
                <input type="email" value={email} onChange=
                {e =>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange=
                {e => setPassword(e.target.value)}/>
          
                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign in</button>
               
            </form>
        <small>
            By signing-in you agree to the conditions of use and sale.
            Please see our Privacy Notice, our Cookies Notice and our 
            Interest-based ads notice.
        </small>
        <button  onClick={register}
        className='login__registerButton'>Create your account</button>
        </div>
    </div>
  )
}

export default Login