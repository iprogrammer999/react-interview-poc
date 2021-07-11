import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardComponent from "./dashboard-component";
import { configs } from "../../configs";

const DashboardContainer = (props) => {
  const [employees, setEmployees] = useState([]); // this should be global store
  const [filteredEmps, setFilteredEmps] = useState([]); // internal state

  useEffect(() => {
    const url = `${configs.host}${configs.endPoint}`;

    axios
      .get(url)
      .then((res) => {
        console.log("result: ", res);
        if (res && res.status === 200 && res.data && res.data.result) {
          setEmployees(res.data.result);
          setFilteredEmps(res.data.result);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleKeyUp = (e) => {
    const { value } = e.target;
    const emps = employees.filter(
      (item) => item.username && item.username.toLowerCase().includes(value)
    );
    setFilteredEmps(emps);
  };

  const handleDelete = (id) => {
    const url = `${configs.host}${configs.endPoint}/${id}`;
    console.log(id);
    axios
      .delete(url)
      .then((res) => {
        if (res && res.status === 200 && res.data && res.data.result) {
          setEmployees(res.data.result);
          setFilteredEmps(res.data.result);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleAssendingSort = () => {
    setFilteredEmps(employees => {
     employees.sort(function(a, b) {
      return a.age - b.age;
    })
    return [...employees];
  })

  };

  const handleDesendingSort = () => {
    setFilteredEmps(employees => {
      employees.sort(function(a, b) {
       return b.age - a.age;
     })
     return [...employees];
   })
  };

  return (
    <DashboardComponent
      {...props}
      employees={filteredEmps}
      handleKeyUp={handleKeyUp}
      handleDelete={handleDelete}
      handleAssendingSort={handleAssendingSort}
      handleDesendingSort={handleDesendingSort}
    />
  );
};

export default DashboardContainer;
