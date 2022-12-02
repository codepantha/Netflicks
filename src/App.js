import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { getCurrentUser } from './utils/firebase/firebase.utils';

function App() {
  const user = null;

  useEffect(() => {
    getCurrentUser()
      .then((authUser) => {
        if (authUser) console.log(authUser)
        else {
          // logged out
        }
      })
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
