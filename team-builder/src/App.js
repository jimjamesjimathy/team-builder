import './App.css';
import React, { useState } from 'react';
import Form from './Components/Form';

function App() {
const [members, setMembers] = useState([]);
const [values, setValues] = useState({name: '', email: '', role: ''});

const onSubmit = () => {
  setMembers([values, ...members]);
  setValues({name: '', email: '', role: ''})
}
const onChange = (name, value) => {
  setValues({ ...values, [name]: value})
}

return(
    <div className='App'>
      <h1>Join the team!</h1>
      <h3>Enter in some info about yourself!</h3>
    <Form 
    values={values}
    change={onChange}
    submit={onSubmit}
    />

    {members.map((member, index) => {
      return(
        <div key={index} className='new-card'>
          {member.name}, {member.email}, {member.role}
        </div>
      )
    })}

    </div>
  );
}

export default App;
