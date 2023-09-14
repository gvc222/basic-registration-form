import React, {useState} from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (e) => 
  setValues({...values, firstName: e.target.value})

  const handleLastNameInputChange = (e) => 
  setValues({...values, lastName: e.target.value})

  const handleEmailInputChange = (e) => 
  setValues({...values, email: e.target.value})

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true)
    } 
    setSubmit({submit: !submit})
  }
  return (
    
    <div className='form-container'>
      <form className='register-form'>
        <div id="title">Registration Form</div>
        {(submit && valid) ? <div className="success-message">Success! Thank you for registering.</div> : null}
        <input value={values.firstName} type="text" className="form-field" placeholder="First Name" onChange={handleFirstNameInputChange}/>
        {(submit && values.firstName === '') ? <span>Please enter a first name</span> : null}
        <input value={values.lastName} type="text" className="form-field" placeholder="Last Name" onChange={handleLastNameInputChange}/>
        {(submit && values.lastName === '') ? <span>Please enter a last name</span> : null }
        <input value={values.email} type="text" className="form-field" placeholder="Email Address" onChange={handleEmailInputChange}/>
        {(submit && values.email === '') ? <span>Please enter an email address</span> : null}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default App;
