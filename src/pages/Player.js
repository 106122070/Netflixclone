import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {BsArrowLeft} from 'react-icons/bs';
import vedio from '../images/watch.htm'
import { useParams } from 'react-router-dom';


const Player = () => {
 const {id} = useParams();
 const navigate = useNavigate();
  
  return (
    <Navigate>
    <div className='player'>
      <div className='leftarrow'>
        <div
         className='styled1'>
 <BsArrowLeft onClick={()=>navigate(-1)}/>
         </div>
       
        </div> 
        
        <div className='video1'>

{/* <video src={`https://www.youtube.com/embed/${moviekey}`} autoPlay loop controls /> */}
<iframe
  width="1250"
  height="100%"
  src={`https://www.youtube.com/embed/${id}`}
  frameBorder="0"
></iframe>

        </div>
        </div>
    </Navigate>
  )
}

const Navigate = styled.div`
*{
  background-color: black;
}


  .player{
   position: relative;
    overflow-y: hidden;
    background-color: aliceblue;
    .video1{
      width:100%;
      height: 35rem;
    }
    .leftarrow{
      position:absolute;
  cursor: pointer;

      top:0px;
      left:15px;
      font-size: 55px;
.styled1{
  position: absolute;
 
}
.styled1:hover{

  top:10px;
  transition: .5s ease-in-out;
}
      svg{
        color: red;
        filter: brightness(100);
        filter:blur(100);
/*         border: 3px solid red; */
        background-color: transparent;
      }
    }
  }
  
  `

export default Player