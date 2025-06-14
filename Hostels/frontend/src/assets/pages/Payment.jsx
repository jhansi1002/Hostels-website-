import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/Payment.css";
import axios from "axios";

// Utility function to load Razorpay script
const loadRazorpay = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

const PaymentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    email: "",
    enrollmentId: "",
    paymentMethod: "Credit/Debit Card",
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
    bankName: "",
    accommodationType: "AC",
    year: "1",
    amount: "140000",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    confirm: false,
    enteredAmount: "",
  });

  const [errors, setErrors] = useState({});

  // Check if we have data from context or localStorage
  useEffect(() => {
    // Get enrollment ID from URL query params if available
    const params = new URLSearchParams(location.search);
    const idFromUrl = params.get('enrollmentId');
    
    if (idFromUrl) {
      setFormData(prev => ({...prev, enrollmentId: idFromUrl}));
      validateEnrollmentId(idFromUrl);
    }
    
    // Try to get data from localStorage as a fallback
    const storedData = localStorage.getItem("hostelFormData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData.enrollmentId) {
        setFormData(prev => ({
          ...prev,
          studentName: parsedData.fullName || "",
          studentId: parsedData.studentId || "",
          email: parsedData.email || "",
          enrollmentId: parsedData.enrollmentId
        }));
        validateEnrollmentId(parsedData.enrollmentId);
      }
    }
  }, [location]);

  const amountMapping = {
    "1": { AC: "140000", "Non AC": "100000" },
    "2": { AC: "130000", "Non AC": "97000" },
    "3": { AC: "130000", "Non AC": "95000" },
    "4": { AC: "130000", "Non AC": "95000" },
  };

  // Function to validate enrollment ID with backend
  const validateEnrollmentId = async (id) => {
    if (!id) return;
    
    setIsVerifying(true);
    try {
      const response = await axios.post("http://localhost:5000/api/payment/validate-enrollment", {
        enrollmentId: id
      });
      
      if (response.data.valid) {
        setIsVerified(true);
        setErrors(prev => ({...prev, enrollmentId: ""}));
        
        // Auto-populate form with returned student data if available
        if (response.data.student) {
          setFormData(prev => ({
            ...prev,
            studentName: response.data.student.fullName || prev.studentName,
            studentId: response.data.student.studentId || prev.studentId,
            email: response.data.student.email || prev.email
          }));
        }
      } else {
        setIsVerified(false);
        setErrors(prev => ({...prev, enrollmentId: "Invalid Enrollment ID"}));
      }
    } catch (error) {
      console.error("Error validating enrollment ID:", error);
      setIsVerified(false);
      setErrors(prev => ({...prev, enrollmentId: "Error validating ID"}));
    } finally {
      setIsVerifying(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      let updatedData = { ...prev, [name]: type === "checkbox" ? checked : value };
      if (name === "accommodationType" || name === "year") {
        updatedData.amount = amountMapping[updatedData.year][updatedData.accommodationType];
      }
      return updatedData;
    });

    // When enrollment ID changes, validate it
    if (name === "enrollmentId" && value.trim() !== "") {
      validateEnrollmentId(value);
    }
  };

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.enrollmentId.trim()) {
      newErrors.enrollmentId = "Enrollment ID is required";
    } else if (!isVerified) {
      newErrors.enrollmentId = "Invalid Enrollment ID. Please check your email for the correct ID";
    }

    if (!formData.studentName.trim()) newErrors.studentName = "Student name is required";
    if (!formData.studentId.trim()) newErrors.studentId = "Student ID is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (formData.enteredAmount && parseInt(formData.enteredAmount) > parseInt(formData.amount)) {
      newErrors.enteredAmount = "Entered amount cannot exceed the required amount";
    }
    if (!formData.confirm) newErrors.confirm = "You must confirm the details";
    
    setErrors(newErrors);
    
    return Object.keys(newErrors).length === 0;
  };

  const handleBackToEnrollment = () => {
    navigate("/"); // Redirect back to the enrollment form
  };

  // Function to handle Razorpay payment
  const initiatePayment = async () => {
    try {
      // Load Razorpay script
      await loadRazorpay();
      
      // Set amount to pay (either entered amount or full amount)
      const amountToPay = formData.enteredAmount 
        ? parseInt(formData.enteredAmount) 
        : parseInt(formData.amount);
      
      // Create an order on your backend
      const orderResponse = await axios.post("http://localhost:5000/api/payment/create-order", {
        amount: amountToPay,
        enrollmentId: formData.enrollmentId,
        studentName: formData.studentName,
        studentId: formData.studentId,
        email: formData.email,
        accommodationType: formData.accommodationType,
        year: formData.year
      });
      
      if (!orderResponse.data || !orderResponse.data.id) {
        throw new Error("Failed to create payment order");
      }
      
      // Configure Razorpay payment options
      const options = {
        key: "rzp_test_YOUR_KEY_HERE", // Replace with your actual Razorpay key
        amount: amountToPay * 100, // Amount in paise (Razorpay expects amount in smallest currency unit)
        currency: "INR",
        name: "College Hostel",
        description: `Hostel Fee Payment - ${formData.accommodationType}`,
        order_id: orderResponse.data.id,
        prefill: {
          name: formData.studentName,
          email: formData.email,
        },
        notes: {
          enrollmentId: formData.enrollmentId,
          studentId: formData.studentId,
          year: formData.year,
          accommodationType: formData.accommodationType
        },
        theme: {
          color: "#3399cc"
        },
        handler: function(response) {
          // Handle successful payment
          handlePaymentSuccess(response);
        },
        modal: {
          ondismiss: function() {
            console.log("Payment dismissed");
          }
        }
      };
      
      // Initialize Razorpay and open payment window
      const razorpay = new window.Razorpay(options);
      razorpay.open();
      
    } catch (error) {
      console.error("Payment failed:", error);
      setErrors(prev => ({...prev, general: "Payment initialization failed. Please try again."}));
    }
  };
  
  // Handle successful payment
  const handlePaymentSuccess = async (paymentResponse) => {
    try {
      // Send payment verification data to your backend
      const verifyResponse = await axios.post("http://localhost:5000/api/payment/verify", {
        razorpay_payment_id: paymentResponse.razorpay_payment_id,
        razorpay_order_id: paymentResponse.razorpay_order_id,
        razorpay_signature: paymentResponse.razorpay_signature,
        enrollmentId: formData.enrollmentId
      });
      
      if (verifyResponse.data.success) {
        // Navigate to success page with payment details
        navigate("/payment-success", { 
          state: { 
            paymentId: paymentResponse.razorpay_payment_id,
            amount: formData.enteredAmount || formData.amount,
            studentName: formData.studentName,
            enrollmentId: formData.enrollmentId
          } 
        });
      } else {
        setErrors(prev => ({...prev, general: "Payment verification failed. Please contact support."}));
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
      setErrors(prev => ({...prev, general: "Payment verification failed. Please contact support."}));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.enrollmentId.trim() || !isVerified) {
      // Simply show error message for invalid enrollment
      setErrors(prev => ({...prev, enrollmentId: "Invalid Enrollment ID. Please check your email or enroll first."}));
      return;
    }

    if (validateForm()) {
      initiatePayment();
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Form</h2>
      
      {errors.general && <p className="error general-error">{errors.general}</p>}
      
      <form onSubmit={handleSubmit}>
        {/* Student Details */}
        <fieldset>
          <legend>Student Details</legend>
          <label>
            Name: 
            <input 
              type="text" 
              name="studentName" 
              value={formData.studentName} 
              onChange={handleChange} 
            />
          </label>
          {errors.studentName && <p className="error">{errors.studentName}</p>}
          
          <label>
            ID: 
            <input 
              type="text" 
              name="studentId" 
              value={formData.studentId} 
              onChange={handleChange} 
            />
          </label>
          {errors.studentId && <p className="error">{errors.studentId}</p>}
          
          <label>
            Email: 
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </label>
          {errors.email && <p className="error">{errors.email}</p>}
          
          <label>
            Enrollment ID: 
            <input 
              type="text" 
              name="enrollmentId" 
              value={formData.enrollmentId} 
              onChange={handleChange} 
            />
            {isVerifying && <span className="verifying">Verifying...</span>}
            {isVerified && <span className="verified">✓ Verified</span>}
          </label>
          <label className="Note">Note: If the entered enrollment id verified then remaining process will be displayed</label>
          {errors.enrollmentId && (
            <div>
              <p className="error">{errors.enrollmentId}</p>
              <button 
                type="button" 
                className="back-button" 
                onClick={() => navigate("/hostelform")}
              >
                Back to Enrollment Form
              </button>
            </div>
          )}
        </fieldset>

        {/* Only show the rest of the form if enrollmentId is verified */}
        {isVerified && (
          <>
            {/* Payment Details */}
            <fieldset>
              <legend>Payment Details</legend>
              <label>Payment Method:
                <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                  <option>Credit/Debit Card</option>
                  <option>UPI</option>
                  <option>Net Banking</option>
                </select>
              </label>

              {formData.paymentMethod === "Credit/Debit Card" && (
                <>
                  <label>Card Number: <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} maxLength="16" /></label>
                  <label>Expiry Date: <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} maxLength="5" /></label>
                  <label>CVV: <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} maxLength="3" /></label>
                </>
              )}

              {formData.paymentMethod === "UPI" && (
                <label>UPI ID: <input type="text" name="upiId" value={formData.upiId} onChange={handleChange} /></label>
              )}

              {formData.paymentMethod === "Net Banking" && (
                <label>Bank Name: <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} /></label>
              )}
            </fieldset>

            {/* Accommodation Type */}
            <fieldset>
              <legend>Accommodation & Fees</legend>
              <label>
                <input type="radio" name="accommodationType" value="AC" checked={formData.accommodationType === "AC"} onChange={handleChange} />
                AC
              </label>
              <label>
                <input type="radio" name="accommodationType" value="Non AC" checked={formData.accommodationType === "Non AC"} onChange={handleChange} />
                Non AC
              </label>

              <label>Year:
                <select name="year" value={formData.year} onChange={handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </label>

              <p>Amount: ₹{formData.amount}</p>
              <label>Enter Amount:
                <textarea name="enteredAmount" value={formData.enteredAmount} onChange={handleChange} placeholder="Enter the amount to pay" />
              </label>
              {errors.enteredAmount && <p className="error">{errors.enteredAmount}</p>}
            </fieldset>

            {/* Billing Address */}
            <fieldset>
              <legend>Billing Address</legend>
              <label>Address: <input type="text" name="address" value={formData.address} onChange={handleChange} /></label>
              <label>City: <input type="text" name="city" value={formData.city} onChange={handleChange} /></label>
              <label>State: <input type="text" name="state" value={formData.state} onChange={handleChange} /></label>
              <label>Zip Code: <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} /></label>
            </fieldset>

            {/* Confirmation */}
            <label className="confirm-checkbox">
              <input 
                type="checkbox" 
                name="confirm" 
                checked={formData.confirm} 
                onChange={handleChange} 
              /> 
              I confirm that the payment details are correct
            </label>
            {errors.confirm && <p className="error">{errors.confirm}</p>}

            <button type="submit" className="pay-button" >Pay Now</button>
          </>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;