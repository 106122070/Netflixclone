import React from 'react'
import imglogo from '../images/logo.png';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const HeaderPage = (props) => {
    const navigate = useNavigate();
  return (
    <>
   <Headerstyle1>
    <div className='mainhead'>
    <Link to='/'>
    <img src={imglogo} alt='logonetflix' />
    </Link>
       <button onClick={()=>navigate((props.login)? '/login' : '/SignUp')}>{
        props.login ? "Log In" : "Sign In" 
       }</button>
    </div>
    </Headerstyle1>
    </>
  )
}


const Headerstyle1 = styled.div`

body{
    position: relative;
}


img{
 position: absolute;
    top: 20px;
    left: 20px;
width:150px;
height: 50px;
filter: brightness(190%);
cursor: pointer;
}
img:hover{
top:15px;
transition: all .3s;
}

button{
    position: absolute;
    right:50px;
    top:25px;
    padding: 6px;
    color: whitesmoke;
    background-color: red;
    border-radius: 10px;
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 400px;
    width:65px;
    cursor: pointer;
    border: 1.4px solid red;
}

button:hover{
top:16px;
transition: all .3s;
background-color: whitesmoke;
color: red;
border: 2px solid whitesmoke;

}
`



export default HeaderPage