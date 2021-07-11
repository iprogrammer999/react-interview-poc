import axios from 'axios';
import React, { useReducer, useState } from "react";
import { validateInput } from "../../utils";
import { useHistory } from "react-router-dom";
import HomeComponent from "./home-component";
import { configs } from '../../configs'

const initialState = {
  username: { value: "", hasError: true, error: "Name cannot be empty" },
  age: { value: 0, hasError: true, error: "Age cannot be empty" },
  designation: { value: "", hasError: true, error: "Designation cannot be empty" },
  company: { value: [], hasError: true, error: "Company cannot be empty" },
  isFormValid: false,
  isSubmitted: false
};

const reducer = (state, action) => {
  console.log()
  switch (action.type) {
    case "UPDATE_FORM":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const HomeContainer = (props) => {
  const [formData, dispatch] = useReducer(reducer, initialState);
  const [submitError, setSubmitError] = useState('');
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_FORM',
      payload: {
        [name]: {
          value,
          ...validateInput(name, value),
        },
        isSubmitted: false
      },
    });
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: 'UPDATE_FORM',
      payload: {
        isSubmitted: true
      }
    })

    const payload = {
      username: formData.username.value,
      age: formData.age.value,
      company: formData.company.value,
      designation: formData.designation.value,
    }

    const url = `${configs.host}${configs.endPoint}`

    axios.post(url, payload)
      .then(result => {
        history.push("/dashboard");
      })
      .catch(e => {
        console.log(e)
        setSubmitError('Failed to create employee')
      })

    console.log("hello", formData)
  }

  return (
    <HomeComponent
      {...props}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      formData={formData}
      submitError={submitError}
    />
  );
};

export default HomeContainer;
