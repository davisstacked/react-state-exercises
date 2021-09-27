import React, { useState } from 'react'

const NameForm = () => {

  const [inputs, setInputs] = useState({})
 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You typed: ${inputs.password}, ${inputs.email}, ${inputs.fullName}`);
    setInputs('');
  }

  const handleChange = (e) => {
    setInputs(prevState => ({...prevState, [e.target.name]: e.target.value}))
      
    // setPassword(e.target.value);
    // setEmail(e.target.value);
  }

    return (
      <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name:</label>
        <input
          name="fullName"
          onChange={handleChange}
          value={inputs.fullName}
          type="text"
          />
          <input name="email" type="email" placeholder="email" value={inputs.email} onChange={handleChange}/>
          <input name="password" type="password" placeholder="password" value={inputs.password} onChange={handleChange}/>
        <button>Add!</button>
        </form>
      </div>
    )
}

export default NameForm
