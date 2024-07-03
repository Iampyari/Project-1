import React, { useState } from 'react';
import './Wrapper.css';


const Wrapper = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Basic client-side validation
    if (username === '' || password === '') {
      setErrorMessage('Please enter both username and password');
      return;
    }

    // Perform authentication logic (e.g., make a request to a server)
    // For simplicity, let's assume a successful login
    console.log('Login successful');
  };

  return (
      <div className="bckgrd">
      
      
       <nav>
        <h2 className="logo">
            E-Billing System
        </h2>

        <h3 className='ho'>Home</h3>
      </nav>
        
<div className='wrapper1'>
        
        <h3 className='log2'>Login</h3><br/>
       
        <div className="box1">
            <label>
              Username:<br/>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="box2">
            <label>
              Password:<br/>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <label>
        <div className="box4">
                    <a href="#">Forgot Password !</a>
                </div><br/>
       <button type="button" className='box5' onClick={handleLogin}>
          Login
        </button>
        {errorMessage && <p className='box' style={{ color: 'red' }}>{errorMessage}</p>}
        <div class="box6">
                  <p>Don't have an account?<a href="#">Sign up</a></p>
                </div>
                </label>
           </div>
      </div>
  
  );
};

export default Wrapper;
