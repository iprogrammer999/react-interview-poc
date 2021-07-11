export function validateInput(name, value) {
  let hasError = false;
  let error = '';
  switch (name) {
    case "username":
      if (value.trim() === "") {
        hasError = true;
        error = "Name cannot be empty!";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "age":
      if (value === 0 || value < 18) {
        hasError = true;
        error = "Please enter valid age!";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "designation":
      if (value.trim() === "") {
        hasError = true;
        error = "Designation cannot be empty!";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "skills":
      if (value.trim() === "") {
        hasError = true;
        error = "Skills cannot be empty!";
      } else {
        hasError = false;
        error = "";
      }
      break;
    default:
      break;
  }

  console.log("fjadslkf: ", name, value, hasError, error)


  return {
    hasError,
    error,
  };
}
