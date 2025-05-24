// ------------------------
// src/App.js
// ------------------------
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // show splash screen for 2 seconds
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return loading
    ? <SplashScreen />
    : (
      <Router basename={process.env.PUBLIC_URL}>
        <AppRouter />
      </Router>
    );
}

export default App;
