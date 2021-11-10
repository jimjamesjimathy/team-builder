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
      <div className='text-wrap'>
        <h1>Join the team!</h1>
        <h3>Enter in some info about yourself!</h3>
      </div>
    <Form 
    values={values}
    change={onChange}
    submit={onSubmit}
    />

    {members.map((member, index) => {
      return(
        <div key={index} className='new-card'>
          <div>
            {member.name}
          </div>
          <div>
          {member.email}
          </div>
          <div>
           {member.role}
          </div>
        </div>
      )
    })}

    </div>
  );
}

export default App;
