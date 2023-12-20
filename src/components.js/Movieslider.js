import React from 'react'
import Card from './card'
import styled from 'styled-components';
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { useRef,useState } from 'react';


export default React.memo(function Movieslider ({data,title})  {

    const listref = useRef();
    const [sliderpostion, setsliderpostion] = useState(0);

    
    const handledirection = (direction) =>{
        let distance = listref.current.getBoundingClientRect().x-70;
        if (direction === 'left' && sliderpostion > 0){
            listref.current.style.transform = `translateX(${300 + distance}px)`;
            console.log(sliderpostion);
if (sliderpostion<0){
   
}
                setsliderpostion(sliderpostion-1);
                
        }
else{
    setsliderpostion(sliderpostion+1);
}

        if (direction === 'right' && sliderpostion < 3){
            listref.current.style.transform = `translateX(${-300 + distance}px)`;
            console.log(sliderpostion);
            
            setsliderpostion(sliderpostion + 1);
        }else{
            setsliderpostion(sliderpostion-1);
        }
    }

  return (
    
    <Container>
        <h2>{title}</h2>
    <div className='wrapper'>
        <div className='slider-action left'>
            <AiOutlineLeft onClick={()=>handledirection('left')}/>
        </div>
        <div className='slider' ref={listref}>
    {
        data.map((movie,index)=>{

           if(movie.videomovie11[0]!=null){
            return <Card Moviedata={movie} index = {index} keyvideos={movie.videomovie11[0][0].key} /> 
           }else{
            return <Card Moviedata={movie} index = {index} keyvideos={movie.videomovie11} /> 
           }
           
        })
    }
    </div>
    <div className={'slider-action right'}>
            <AiOutlineRight onClick={()=>handledirection('right')}/>
        </div>
    </div>
    </Container>
  )

})

const Container = styled.div`

position:relative;
padding: 0.6rem 0rem;
h2{
  
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 500;
    font-size: 30px;
    color: darkred;
    filter: brightness(160%);
  
  margin-left: -65rem;
}

.wrapper{
 .slider{
    display: flex;
    width:max-content;
    transform: translateX(3px);
    transition: .3s ease-in-out;
    margin-left: 15px;
 }   

 .slider-action{
    display: flex;
    align-items: center;
    justify-content: center;
    
   position: absolute;
    bottom: 0;
    top: 2.8rem;
    height: 100%;
    
    width:50px;
  z-index: 1000;
    transition: 1s ease-in-out;
  svg{
    font-size: 30px;
    cursor: pointer;
    color: whitesmoke;
  }

 }
 .left{
    left:-10px;
 }
 .right{
    right:0px;
 }
}

`

