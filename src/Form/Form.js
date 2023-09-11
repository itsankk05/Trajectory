import React, { useState, useEffect } from "react";
import "./Form.css";
import { Link } from "react-router-dom";

export default function Form({
  name,
  setName,
  selectedEducation,
  setSelectedEducation,
}) {
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

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

  return (
    <div className="container">
      <h1 className="title">Let's Get You Set Up</h1>
      <div className="input-container">
        <input
          className="form-control"
          id="name"
          placeholder=""
          value={name}
          onChange={handleChange}
          required
        />
        <label htmlFor="name" className="form-label">
          Your Name:
        </label>
      </div>
      <div className="input-container">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="email" className="form-label">
          Where should we contact you:
        </label>
      </div>
      <label htmlFor="education">Education</label>
      <div className="dropDownContainer">
        <span className="select-wrapper">
          <select
            className="selectClass"
            defaultValue={"DEFAULT"}
            onChange={handleEducationChange}
            required
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
  );
}
