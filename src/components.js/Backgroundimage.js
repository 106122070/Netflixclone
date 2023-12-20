import React from 'react'
import img1 from '../images/b1.jpeg';
import styled from 'styled-components';
const Backgroundimage = () => {
  return (
    <div>
        <Background1>
        <img src={img1} alt='backgroundimages'/>
    </Background1>
    </div>

  )
}


const Background1 = styled.div`

body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}
img{
  position: fixed;
    width:250vh;
    height:130vh;
  top:0px;
  left:0px;
    filter: brightness(40%);
    overflow-x: hidden;
}


` 

export default Backgroundimage