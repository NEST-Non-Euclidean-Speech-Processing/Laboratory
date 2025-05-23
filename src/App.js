// ------------------------
// src/App.js
// ------------------------
import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return loading ? <SplashScreen /> : (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;