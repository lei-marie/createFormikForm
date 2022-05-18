import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
  // initial values correspond to each of the values on the page
    initialValues: {
      email: '',
      password: ''
    },
  //handle submit button
    onSubmit: values => {
      console.log('form', values);
      alert("Login Successful")
    },
  //handle validations
    validate: values => {
      let errors ={};
      if(values.email === ''){ errors.email = 'Field Required'} else
      if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      if(!values.password) errors.password = 'Field Required';
      return errors;
    }
  });
  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <div>Email</div>
      <input name="email" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.email}/>
      {formik.errors.email ? <div style={{color:'blue'}}>{formik.errors.email}</div>: null}
      <div>Password</div>
      <input name="password" id="pswField" type="text" onChange={formik.handleChange} value={formik.values.password}/>
      {formik.errors.password ? <div id="pswError" style={{color:'blue'}}>{formik.errors.password}</div>: null}
      <br/>
      <button type="submit">Submit</button>
    </form>
  </div>
  );
}

export default App;
