import React, { useRef } from 'react';
import {
  authenticateUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword
} from '../utils/firebase/firebase.utils';
import './SignUpScreen.css';

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();
    try {
      const authUser = await createAuthUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(authUser);
    } catch (err) {
      alert(err.message);
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    authenticateUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => console.log(authUser))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="john@example.com" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signupScreen__gray">New to Netflicks? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
