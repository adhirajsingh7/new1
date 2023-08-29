import React, { useState } from 'react'
import { Button, FormControl, FormControlLabel, TextField, Typography } from '@mui/material'
import '../Styles/UserPage.css'
import { useLocation } from 'react-router-dom'


const UserPage = () => {

  const location = useLocation();

  const loggedUser = location.state.loggedUser;

  // console.log(loggedUser)

  const [editUser ,setEditUser] = useState(loggedUser)
  const [ischange, setIschange] = useState(false)

  const handleChange =(e)=>{
    setIschange(true)
    const name = e.target.name;
    const value = e.target.value;

    setEditUser({...editUser, [name] : value})
    console.log(name ,value)
  }

  const handleSubmit =()=>{
    if(ischange){
      const newUser = localStorage.setItem(`${editUser.email}`,JSON.stringify(editUser))
      console.log('Value was changed')
    }
    else{
      console.log('Value was not changed')
    }
    
  }

  const handleStorage = ()=>{
      console.log(JSON.parse(localStorage.getItem(`${editUser.email}`)))
  }

  return (
    <>
    <div>UserPage</div>

    <div className="flex-container">

      <div className="ImageContainer">
          {/* <img className="loginImage" src={SignupImage} alt="" /> */}
        </div>

        <div>
        <FormControl>
          <div>
          <TextField className="formItems"
            variant="outlined"
            label="First name"
            type="text"
            name="fname"
            onChange={handleChange}
            value={editUser.fname}
          />
          </div>

          <div>
          <TextField className="formItems"
            variant="outlined"
            label="Last name"
            type="text"
            name="lname"
            onChange={handleChange}
            value={editUser.lname}
          />
          </div>
          
          <div>
          <TextField className="formItems"
            variant="outlined"
            label="Email"
            type="text"
            name="email"
            onChange={handleChange}
            value={editUser.email}
          />
          </div>
          
          <div>
          <TextField className="formItems"
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={editUser.password}
          />
          </div>

         

          <div>
          <Button className="formItems" size="large" type="submit" variant="contained" onClick={handleSubmit}>Submit</Button>
          </div>
          

          
      <div>
        <Button color="error" variant="outlined" onClick={handleStorage}>Get local storage DATA</Button>
      </div>
      



        </FormControl>
        </div>


      </div>
          </>

  )
}

export default UserPage