// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './Onboarding';
import Login from './Login';
import Register from './Register';
import TrackingScreen from './TrackingScreen';
import PostLogin from './PostLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/onboarding1" element={<Onboarding step={1} />} />
        <Route path="/onboarding2" element={<Onboarding step={2} />} />
        <Route path="/onboarding3" element={<Onboarding step={3} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tracking" element={<TrackingScreen />} />
        <Route path="/post-login" element={<PostLogin />} />
        <Route path="/" element={<Onboarding step={1} />} />
      </Routes>
    </Router>
  );
}

export default App;
