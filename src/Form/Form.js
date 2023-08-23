import React, { useState, useEffect } from "react";
import "./Form.css";
import { Link } from "react-router-dom";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(name.trim() !== "" && email.trim() !== "");
  }, [name, email]);

  return (
    <>
      <div
        className="container my-5"
        style={{ textAlign: "center", color: "white" }}
      >
        <h1>Lets Get You Set Up</h1>
        <div className="mb-3 my-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name of the Candidate:<span className="required">*</span>
          </label>
          <div className="row d-flex justify-content-center">
            <input
              className="form-control w-50"
              id="exampleFormControlInput1"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            E-Mail Address:<span className="required">*</span>
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
            <select className="selectClass" defaultValue={"DEFAULT"}>
              <option value="DEFAULT" disabled>
                Education
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
          >
            Submit
          </button>
        </Link>
      </div>
    </>
  );
}
