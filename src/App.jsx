import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home.jsx';
import LearnSection from './components/learn/learn1.jsx';
import Dashboard from './components/dashboard.jsx';
import AboutUs from './components/aboutus.jsx';
import FAQ from './components/faq.jsx';
import CourseDetails from './components/coursedetails.jsx';
import PaymentPage from './components/Paymentpage.jsx';
import SignUpPage from './components/signup/signup.jsx';
import LoginPage from './components/login/login.jsx';
import ResetPassword from './components/resetPass/resetPass.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<LearnSection />} />
      <Route path="/course-details" element={<CourseDetails />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;