import React from 'react'
/* import { useNavigate } from 'react-router-dom'; */
import {AiOutlineLogout} from 'react-icons/ai';
import { Link,useNavigate } from 'react-router-dom';
import { fireAuth } from '../utils/fire-base';
import { signOut, onAuthStateChanged } from 'firebase/auth';

import imglogo from '../images/logo.png';
import styled from 'styled-components';


const TopNav = ({scroll}) => {

    const navigateq = [{
        "name":"Movie","link":"/movie"
    },
    {
        "name":"Home","link":"/"
    },
    {
        "name":"My list","link":"/mylist"
    },
{
        "name":"Tv shows","link":"/tvshow"
    }]
    const navigate1 = useNavigate();

    onAuthStateChanged(fireAuth,(currentuser)=>{
        if (!currentuser) navigate1('/login');
      });
    
  return (
<Stylestopnav>
    <div className={`${scroll ? "scroll" : "notscroll"}`}>
    <div className='leftside'>
        <Link to='/'>
        <img src={imglogo} alt='logo'/>
        </Link>
    </div>
    <div className='rightside'>{
        <>
        <ul className='links'>{
        navigateq.map((data1)=>{
            
       return  <li className='common' key={data1.name}><Link to={data1.link}>{data1.name}</Link></li>
       
        })}
        </ul>
        <button onClick={()=>signOut(fireAuth)}><AiOutlineLogout/></button>
        </>
}</div>
</div>
    </Stylestopnav>
  )
}

const Stylestopnav = styled.div`

body{
    z-index:1200;
    position: relative;
}

.rightside{
    button{
        width:37px;
border-radius: 18px;
        height: 37px;
        position:absolute;
        top:15px;
        right: 20px;
        background-color: red;
        border: none;
        cursor: pointer;
        svg{
            
            color:whitesmoke;
            width: 25px;
            height: 25px;
        }
    }
    button:hover{
        top:10px;
        transition: all .3s;
    }

}
.scroll{
    position:fixed;
    width: 100%;
    height:70px;
    z-index:1200;
    display: flex;
    flex-flow:column;
    box-shadow: 1px 3px 10px red ;
    justify-content: space-around;
    background-color: black;
}


.notscroll{
    position:fixed;
    width: 100%;
    height:70px;
    z-index:1200;
    display: flex;
    flex-flow:column;
    justify-content: space-around;

}
.links{
    width:400px;
    position: absolute;
    top: 7px;
    right:60px;
    display: flex;
    flex-flow:row;
    justify-content: space-around;
}

li{
    list-style-type: none;
    a{
       
    position:relative;
    color:whitesmoke;
    text-decoration: none;
    font-size: 19px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

a:hover{

color:red;
top:-3px;
transition: all .3s;
font-size: 19px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}}

.leftside{
    img{
 position: absolute;
    top: 10px;
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
}

`
export default TopNav