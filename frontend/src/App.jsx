import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contacts from "./contact/Contacts";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./context/AuthContext";
import Loading from "./components/Loading"; // Import the Loading component

function App() {
  const { isAuthenticated, isLoading } = useAuth(); // Get loading state

  if (isLoading) {
    return <Loading />; // Show the loading spinner while determining auth status
  }

  return (
    <>
      <div className="bg-darkTheme dark:bg-white dark:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={isAuthenticated ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
