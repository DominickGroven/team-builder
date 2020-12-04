
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import teamForm from './teamForm';
import teamMember from './teamMember';

//dropdown?
const memberOutput = {
  fname:'',
  lname:'',
  email:'',
  role:''
};



function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [teamForm, setTeamForm] = useState(memberOutput)
  
  //formValue
  const updateForm = (inputName, inputValue) => {
    setTeamForm({...teamForm, [inputName]: inputValue})
  }
  
  // submit form values
  const submitForm = () => {
    const newTeamMember = {
      fname: teamForm.fname.trim(),
      lname: teamForm.lname.trim(),
      email: teamForm.email.trim(),
      role: teamForm.role,
    }
      //To make sure nothing is left blank
  if (!newTeamMember.fname || !newTeamMember.lname || !newTeamMember.email || !newTeamMember.role)
    return; 

    axios
      .post('sampleapi.com', newTeamMember)
      .then((res) => {
        console.log(newTeamMember);
        setTeamMembers([newTeamMember, ...teamMembers]);
        setTeamForm(memberOutput);
      })
      .catch(err => {
        console.error(err);
      })
}

  useEffect(() => {
    axios.get('sampleapi.com')
      .then((res) => {
        setTeamMembers(res.data);
      
  })
}, [])

return(
  <div className="App">
    <h1>Team Builder Form</h1>
    <teamForm
      values={teamForm}
      update={updateForm}
      submit={submitForm}
    />

    {teamMembers.map((member) => {
      console.log(member, "showing")
      return <teamMember key={member.id} details={member} />;
    })}
  </div>
  );
}

export default App
