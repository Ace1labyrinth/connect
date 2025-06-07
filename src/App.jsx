import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Apptheme } from './theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowItWorksPage from './pages/HowItWorksPage';
import ServicesPage from './pages/ServicesPage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfessionalProfilePage from './pages/ProfessionalProfilePage';

const App = () => {
  return (
    <ThemeProvider theme={Apptheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="how-it-works" element={<HowItWorksPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="profile/:name" element={<ProfessionalProfilePage />} />
            <Route path="join" element={<JoinPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
