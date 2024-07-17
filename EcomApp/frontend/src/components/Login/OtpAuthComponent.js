import React, { useState } from 'react';
import axios from 'axios';

const OtpAuthComponent = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1); 
  // Step 1: Request OTP, Step 2: Verify OTP

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/reqOTP', { email });
      setMessage('OTP has been sent to your email');
      setStep(2);
    } catch (error) {
      setMessage('Error sending OTP');
      console.error(error);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/verifyOTP', { email, otp });
      setMessage(response.data.message);
      if (response.data.message === 'OTP verified') {
        // Proceed with further steps after OTP verification
      }
    } catch (error) {
      setMessage('Error verifying OTP');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>OTP Authentication</h2>
      {step === 1 && (
        <form onSubmit={handleRequestOtp}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Request OTP</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleVerifyOtp}>
          <label>
            OTP:
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </label>
          <button type="submit">Verify OTP</button>
        </form>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default OtpAuthComponent;
