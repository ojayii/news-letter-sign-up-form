import React, { useState } from 'react';
import Regular from "./Regular";
import Success from "./Success";

const App = () => {

  const [formData, setFormData] = useState({
  });
  const [finalData, setFinalData] = useState("");
  let [emailTest, setEmailTest] = useState(/^[(\w\d\W)+]+@[(\w\d\W)+]+@+[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i)
  const handleFormSubmit = () => {
    setFormData("test@test@"+formData)
  };
  
  const reload = () => {
    window.location.reload();
  }

  // console.log(typeof(formData))
  // console.log("test@"+formData)
  // console.log(emailTest.test(formData))

  return (
    <>
      {
        typeof(formData) === "object" ? (
          <Regular formData={formData} setFormData={setFormData} setFinalData={setFinalData} onSubmit={handleFormSubmit} />
        ) : typeof(formData) === "string" && !emailTest.test(formData) ? (
          <Regular formData={formData} setFormData={setFormData} setFinalData={setFinalData} onSubmit={handleFormSubmit} errorMsg={<p className="error-msg">Valid email required</p>} />
        ) : <Success reload={reload} />

      }
    </>
  )
}

export default App;