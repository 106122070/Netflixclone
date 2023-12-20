import React, { useState } from 'react';
import { fireAuth } from '../utils/fire-base';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


import styled from 'styled-components';
import HeaderPage from '../components.js/HeaderPage';
import Backgroundimage from '../components.js/Backgroundimage';


const SignUp = () => {

    const [showpassword,setpassword] = useState(false);
    const [formdata,setformdata] = useState({email:"",password:""});
    const navigate1 = useNavigate();
  const handlefun = async() =>{

try {
    const {email,password} = formdata;
    await createUserWithEmailAndPassword(fireAuth,email,password);
    navigate1('/login');
   
} catch (error) {
    console.log(error);
}
  }



    return (


    <>
    <Container>
    <Backgroundimage/>
    <HeaderPage login/>
    <div className = 'main'>
    
    <div className='content'>
    <h1>Unlimited movies, Tvshow and more...</h1>
    <h2>Watch anywhere , Cancel Anytime</h2>
    <h4>Ready to watch ?enter your email to create or start an netflix app </h4>
    </div>
    <div className='form'>

        {
            showpassword ? (<> <input type='password' placeholder='Enter your password' name="password"
            value={formdata.password}
            onChange={(e)=>setformdata({...formdata,[e.target.name]:e.target.value})}
            />  </>):
<><input type='email' placeholder='Email Address' name="email"
 value={formdata.email}
 onChange={(e)=>setformdata({...formdata,[e.target.name]:e.target.value})}
/></>
        }
   {
    !showpassword ? (<button className='common' onClick={()=>setpassword(true)}>Get Started</button>) : (<button className='common' onClick={()=>handlefun()}>Sign Up</button>)
   }
    
    </div>
    </div>

    </Container>
    
   
    </>
  )
}
const Container = styled.div`

    position: relative;

.main{
    position: absolute;
    width: 600px;
    height: 200px;
   
top:80px;
left:280px;
padding: 40px;
}
.content{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: whitesmoke;
 
}

.form{
    position: absolute;
    display: flex;
    flex-flow: row;
   left:50px;
    top:220px;
    width:120px;
    height: 50px;
    width: 100%;
}

h2{
    color:whitesmoke;
}
input{
    width:480px;
    height:45px;
    border-radius: 2px;
    border: 1.7px solid white;
}

h2{
    color:red;
}

h5{
    color: whitesmoke;
}

button{
    
    padding: 6px;
    color: whitesmoke;
    background-color: red;
  width: 70px;
border-radius: 10px;
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 400px;
    border: 2px solid red;
    cursor: pointer;
    
}
button:hover{
   
    cursor: pointer;
color: red;
background-color: whitesmoke;
border: none;
}

.common{
    padding: 6px;
    color: whitesmoke;
    background-color: red;
  width: 100px;
border-radius: 2px;
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 400px;
    border: 2px solid red;
    cursor: pointer;
}


`

export default SignUp