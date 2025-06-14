import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/PaymentSuccess.css';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const paymentDetails = location.state || {};

  // Function to handle navigation back to home
  const handleGoHome = () => {
    navigate('/');
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  return (
    <div className="payment-success-container">
      <div className="success-card">
        <div className="success-icon">
          <svg viewBox="0 0 24 24" width="64" height="64">
            <circle cx="12" cy="12" r="11" fill="#4CAF50" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" />
          </svg>
        </div>
        
        <h1>Payment Successful!</h1>
        
        <div className="payment-details">
          <p><strong>Payment ID:</strong> {paymentDetails.paymentId || 'N/A'}</p>
          <p><strong>Student Name:</strong> {paymentDetails.studentName || 'N/A'}</p>
          <p><strong>Enrollment ID:</strong> {paymentDetails.enrollmentId || 'N/A'}</p>
          <p><strong>Amount Paid:</strong> {formatCurrency(paymentDetails.amount || 0)}</p>
          <p><strong>Date:</strong> {new Date().toLocaleString()}</p>
        </div>
        
        <p className="success-message">
          Your hostel fee payment has been processed successfully. A confirmation has been sent to your registered email address.
        </p>
        
        <div className="action-buttons">
          <button className="print-button" onClick={() => window.print()}>
            Print Receipt
          </button>
          <button className="home-button" onClick={handleGoHome}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;