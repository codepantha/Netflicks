import React from 'react';
import './SignUpScreen.css';

const SignUpScreen = () => {
  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  }

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="john@example.com" />
        <input type="password" placeholder="password" />
        <button type="submit" onClick={signIn}>Sign In</button>

        <h4>
          <span className="signupScreen__gray">New to Netflicks? </span>
          <span className="signupScreen__link" onClick={register}>Sign Up Now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
