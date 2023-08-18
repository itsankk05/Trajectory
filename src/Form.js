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
      <div className="container my-5" style={{ textAlign: "center" }}>
        <h1>Enter Your Details</h1>
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

        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle w-50 my-3"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Education
          </button>
          <ul className="dropdown-menu w-50" style={{ height: "auto" }}>
            <li>
              <Link to="/">Action</Link>
            </li>
            <li>
              <Link to="/">Another action</Link>
            </li>
            <li>
              <Link to="/">Something else here</Link>
            </li>
          </ul>
        </div>
        <Link to={isFormValid ? "/start" : "#"}>
          <button
            type="submit"
            className="btn btn-outline-primary"
            disabled={!isFormValid}
          >
            Submit
          </button>
        </Link>
      </div>
    </>
  );
}
