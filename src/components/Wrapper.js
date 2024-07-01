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
        <form>
        <h3 className='log2'>Login</h3><br/>
        <label>
        <div className='box'>Username:<br></br>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
           </div>
        </label>
        <br />
        <label>
        <div className='box'>Password:<br/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
           </div>
        </label>
        
        <div className="forgot-pass">
                    <a href="#">Forgot Password !</a>
                </div><br/>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <div class="register-login">
                  <p>Don't have an account?<a href="file:///C:/Users/Asus/OneDrive/Desktop/E-Billing%20System/signup2.html">Sign up</a></p>
                </div>
            </form>
      </div>
  </div>
  );
};

export default Wrapper;
