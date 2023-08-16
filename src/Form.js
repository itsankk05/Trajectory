import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <>
      <div className="container my-5" style={{ textAlign: "center" }}>
        <h1>Enter Your Details</h1>
        <div className="mb-3 my-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name of the Candidate:
          </label>
          <div className="row d-flex justify-content-center">
            <input
              className="form-control w-50"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            E-Mail Address:
          </label>
          <div className="row d-flex justify-content-center">
            <input
              type="email"
              className="form-control w-50"
              id="exampleFormControlInput1"
              placeholder="Enter your email"
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
              <a className="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <Link to="/start">
          <button type="button" className="btn btn-outline-primary">
            Submit
          </button>
        </Link>
      </div>
    </>
  );
}
