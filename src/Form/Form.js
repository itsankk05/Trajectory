import React, { useState, useEffect } from "react";
import "./Form.css";
import { Route, Routes, Link } from "react-router-dom";
import Footer from "../Footer";
import formImage from "./form_image.png"; // Import the image

export default function Form({
  name,
  setName,
  selectedEducation,
  setSelectedEducation,
}) {
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleEducationChange = (event) => {
    setSelectedEducation(event.target.value);
  };

  useEffect(() => {
    document.title = "Form - Trajectory";
  }, []);

  useEffect(() => {
    setIsFormValid(
      name.trim() !== "" && email.trim() !== "" && selectedEducation !== ""
    );
  }, [name, email, selectedEducation]);

  const validateEmail = (value) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (!isFormValid) {
      setEmailError("Please enter a valid email address");
    } else {
      // Handle form submission logic here
      
      // For example, navigate to another page
    }
  };

  return (
    <>
    <img src="form_image.png" style={{    maxWidth: "100%",
    position: "absolute",
    marginTop: "-410px",
    marginLeft: "200px",
    height: "auto"}}/>
      <div
        className="container my-5 "
        style={{
          color: "white",
          width: "100vw",
          minHeight: "100vh",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Lets Get You Set Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 my-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Your Name:<span className="required">*</span>
            </label>
            <div className="row d-flex justify-content-center">
              <input
                className="form-control w-50"
                id="exampleFormControlInput1"
                placeholder="Name"
                value={name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Where should we contact you:<span className="required">*</span>
            </label>
            <div className="row d-flex justify-content-center">
              <input
                type="email"
                className={`form-control w-50 ${
                  emailError ? "is-invalid" : ""
                }`}
                id="exampleFormControlInput1"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && (
                <div className="invalid-feedback">{emailError}</div>
              )}
            </div>
          </div>
          <label htmlFor="lang">Education:<span className="required">*</span></label>
          <div
            className="dropDownContainer"
            style={{ backgroundColor: "#212529" }}
          >
            <span className="select-wrapper">
              <select
                className="selectClass"
                defaultValue={"DEFAULT"}
                onChange={handleEducationChange}
              >
                <option value="DEFAULT" disabled>
                  Select Education
                </option>
                <option value="1">10th Standard</option>
                <option value="2">12th Standard- Science</option>
                <option value="3">12th Standard- Commerce</option>
                <option value="4">12th Standard- Arts</option>
              </select>
            </span>
          </div>

          {/* Add the image */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={formImage}
              alt="Form Image"
              style={{ maxWidth: "100%", height: "auto",    maxWidth: "100%",
              position: "absolute",
              marginTop: "-410px",
              marginLeft: "350px",
              height: "auto" }}
            />
          </div>

          <Link to={isFormValid ? "/start" : "#"}>
            <button
              type="submit"
              className="btn btn-outline-primary"
              disabled={!isFormValid}
              style={{ marginTop: "15px", width: "200px", height: "50px" }}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
}
