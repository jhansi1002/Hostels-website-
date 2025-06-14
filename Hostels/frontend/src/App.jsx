import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/pages/Navbar";
import Home from "./assets/pages/Home";
import HostelForm from "./assets/pages/hostelform";
import DetailsPage from "./assets/pages/DetailsPage";
import ComplaintForm from "./assets/pages/ComplaintForm";
import ComplaintList from "./assets/pages/ComplaintList";
import Payment from "./assets/pages/Payment"; 
import { FormProvider } from "./assets/pages/FormContext";
import GirlsHostel from "./assets/pages/women";
import GirlsHostelStaff from "./assets/pages/womenstaff";
import InternationalHostel from "./assets/pages/international";
import InternationalHostelStaff from "./assets/pages/internationalStaff";
import BoysHostel from "./assets/pages/BoysHostel";
import BoysHostelStaff from "./assets/pages/BoysStaff";
import Bookings from "./assets/pages/Bookings";
import BoysHostelsBooking from "./assets/pages/BoysHostelsBooking";
import GirlsHostelsBooking from "./assets/pages/GirlsHostelsBooking";
import BoysAC from "./assets/pages/BoysAC";
import BoysNonAC from "./assets/pages/BoysNonAC";
import GirlsAC from "./assets/pages/GirlsAC";
import GirlsNonAC from "./assets/pages/GirlsNonAC";

function App() {
  return (
    <FormProvider>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hostelform" element={<HostelForm />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/payment" element={<Payment />} /> {/* Added Payment Route */}
        <Route path="/complaint" element={<ComplaintForm />} /> {/* Added Payment Route */}
        <Route path="/complaintList" element={<ComplaintList />} /> {/* Added Payment Route */}
        <Route path="/girls-hostel" element={<GirlsHostel />} /> {/* Added Payment Route */}
        <Route path="/girls-hostel-staff" element={<GirlsHostelStaff />} /> {/* Added Payment Route */}
        <Route path="/boys-hostel" element={<BoysHostel />} /> {/* Added Payment Route */}
        <Route path="/boys-hostel-staff" element={<BoysHostelStaff />} /> {/* Added Payment Route */}
        <Route path="/international" element={<InternationalHostel />} /> {/* Added Payment Route */}
        <Route path="/international-staff" element={<InternationalHostelStaff />} /> {/* Added Payment Route */}
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings/boys" element={<BoysHostelsBooking />} />
        <Route path="/bookings/girls" element={<GirlsHostelsBooking />} />
        <Route path="/bookings/boys/ac" element={<BoysAC />} />
        <Route path="/bookings/boys/non-ac" element={<BoysNonAC />} />
        <Route path="/bookings/girls/ac" element={<GirlsAC />} />
        <Route path="/bookings/girls/non-ac" element={<GirlsNonAC />} />
      </Routes>
    </Router>
    </FormProvider>
  );
}

export default App;