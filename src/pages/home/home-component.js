import React from "react";
import style from "./home-styles.css";

const HomeComponent = ({ handleInputChange, handleSubmit, formData, submitError }) => {
  const {
    username,
    age,
    designation,
    company,
    isFormValid,
    isSubmitted,
  } = formData;
  console.log('child render..');
  return (
    <div className={style.container}>
      <h1 className={"text-center"}>Welcome to Employee Dashboard</h1>
      <form className={`border ${style.form}`} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            name={"username"}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="username"
            onChange={handleInputChange}
          />
          {isSubmitted && username.hasError && (
            <span className={"text-danger"}>{`${username.error}`}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="age">Age: </label>
          <input
            name={"age"}
            type="number"
            className="form-control"
            id="age"
            onChange={handleInputChange}
          />
          {isSubmitted && age.hasError && (
            <span className={"text-danger"}>{`${age.error}`}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation: </label>
          <input
            name={"designation"}
            type="text"
            className="form-control"
            id="designation"
            onChange={handleInputChange}
          />
          {isSubmitted && designation.hasError && (
            <span className={"text-danger"}>{`${designation.error}`}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="company">company: </label>
          <input
            name={"company"}
            type="text"
            className={`form-control`}
            id="company"
            onChange={handleInputChange}
          />
          {isSubmitted && company.hasError && (
            <span className={"text-danger"}>{`${company.error}`}</span>
          )}
        </div>

        {
          submitError && <div className="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
        }

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomeComponent;
