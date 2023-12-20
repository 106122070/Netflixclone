
import React, { useState } from 'react';
import { fireAuth } from '../utils/fire-base';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import HeaderPage from '../components.js/HeaderPage';
import Backgroundimage from '../components.js/Backgroundimage';


const LogIn = () => {
    
    const [email,setemail] = useState("");
   const [password,setpassword] = useState("");
const navigate1 = useNavigate();

const handlesubmit = async () =>{
try {
    await signInWithEmailAndPassword(fireAuth,email,password);
    onAuthStateChanged(fireAuth,(currentuser)=>{
        if (currentuser) navigate1('/');
      });
    

} catch (error) {
    console.log(error);
}
}



  return (
<Wrapper>

<Backgroundimage/>
<HeaderPage />
    
    <div className='form-wrapper'>
        <div className='form'>
        <h2>Login</h2>
        <input type='email' placeholder='Email Address' name="email"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        />
        <input type='password' placeholder='Enter your password' name="password"
         value={password}
         onChange={(e)=>setpassword(e.target.value)} />
        <button className='w1' onClick={()=>handlesubmit()}>
            Login
        </button>
        </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.form-wrapper{
    width:330px;
    height: 350px;
    top:100px;
    left:430px;
    padding:30px;
    border-radius: 30px;
   
    position: absolute;
    background-color: rgba(0,0,0,85%);
}

.form{
    display: flex;
    position: absolute;
    left:40px;
    height: 250px;
    justify-content: space-between;
    flex-flow:column;
}

input{
    width:300px;
    height: 40px;
    border-radius: 9px;
    border: 2px solid white;
}
h2{
    font-size: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 500;
    color: whitesmoke;
}

.w1{
    position: absolute;
    width: 180px;
    height: 48px;
    top:280px;
    left:65px;
    color: whitesmoke;
    background-color: red;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 400;
    border-radius: 9px;
    cursor: pointer;
    border:2px solid red;
   
}
.w1:hover{
    cursor: pointer;
    color: red;
    top:270px;
    transition: all .3s;
    background-color: whitesmoke;
    border: none;
}
`

export default LogIn