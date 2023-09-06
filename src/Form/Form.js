import React, { useState, useEffect } from "react";
import "./Form.css";
import { Route, Routes, Link } from "react-router-dom";
import Footer from "../Footer";

export default function Form({
  name,
  setName,
  selectedEducation,
  setSelectedEducation,
}) {
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event) => {
    // 👇 Store the input value to local state
    setName(event.target.value);
  };

  const handleEducationChange = (event) => {
    setSelectedEducation(event.target.value); // Update the selected education
  };

  useEffect(() => {
    document.title = "Form - Trajectory";

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsFormValid(
      name.trim() !== "" && email.trim() !== "" && selectedEducation !== ""
    );
  }, [name, email, selectedEducation]);

  return (
    <>
      <div
        className="container my-5"
        style={{
          textAlign: "center",
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
              className="form-control w-50"
              id="exampleFormControlInput1"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <label htmlFor="lang">Education</label>
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
              <option value="3">12th Standard- Commerece</option>
              <option value="4">12th Standard- Arts</option>
            </select>
          </span>
        </div>

        <Link to={isFormValid ? "/start" : "#"}>
          <button
            type="submit"
            className="btn btn-outline-primary"
            disabled={!isFormValid}
            style={{ marginTop: "15px", width: "200px", height: "50px" }}
            // onClick={console.log(selectedEducation)}
          >
            Submit
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
