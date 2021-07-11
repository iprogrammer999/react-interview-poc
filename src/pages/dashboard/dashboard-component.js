import React from "react";
import { Link } from "react-router-dom";
import style from "./dashboard-styles.css";

const SearchComponent = ({ handleKeyUp }) => {
  return (
    <div className={style.container}>
      <input
        className="form-control mr-sm-2 py-4 my-4"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleKeyUp}
        // onKeyDown={handleKeyUp}
      />
      <Link to="/">Back</Link>
    </div>
  );
};

const DashboardComponent = ({ employees, handleKeyUp, handleDelete, handleAssendingSort, handleDesendingSort  }) => {
  return (
    <div>
      <SearchComponent handleKeyUp={handleKeyUp} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Username</th>
            <th scope="col">
              Age
              <span onClick={handleAssendingSort}>
                <img
                  className={style.imgStyles}
                  src={
                    "https://freepikpsd.com/media/2019/10/up-icon-png-7-Transparent-Images.png"
                  }
                  alt="logo"
                />
              </span>
              <span onClick={handleDesendingSort}>
                <img
                  className={`${style.imgStyles} ${style.downArrow}`}
                  src={
                    "https://freepikpsd.com/media/2019/10/up-icon-png-7-Transparent-Images.png"
                  }
                  alt="logo"
                />
              </span>
            </th>
            <th scope="col">Designation</th>
            <th scope="col">Company</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(employees) &&
            employees.map((employee, index) => {
              const { username, age, designation, company, _id } = employee;
              return (
                <tr key={`${username}-${index}`}>
                  <th scope="row">{index}</th>
                  <td>{username}</td>
                  <td>{age}</td>
                  <td>{designation}</td>
                  <td>{company}</td>
                  <td onClick={() => handleDelete(_id)}>
                    <img
                      className={style.imgStyles}
                      src={
                        "https://cdn.iconscout.com/icon/free/png-256/bin-2782756-2316163.png"
                      }
                      alt="logo"
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardComponent;
