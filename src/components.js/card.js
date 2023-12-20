import React,{useState,useRef, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


import {BsCheck} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";
import {RiThumbUpFill,RiThumbDownFill} from "react-icons/ri";
import {BiChevronDown} from "react-icons/bi";
import {collection,addDoc} from 'firebase/firestore'
import { firestore1 } from '../utils/fire-base';


export default React.memo (function Card({Moviedata,keyvideos}) {
    
    const [onHovered ,setHonvered] = useState(false);
    const navigate = useNavigate();
    
    const addMovies = (movieimages) =>{
        const getimages = collection(firestore1,'movies');
        addDoc(getimages,{movieimages,keyvideos,"moviename":Moviedata.name,"genres":Moviedata.genres,"access":true})
        .then(res => console.log(res))
        .catch(error => console.log(error.message));
    }

    return (
        <Cardstyle 
        onMouseEnter={()=>setHonvered(true)} 
        onMouseLeave={()=>setHonvered(false)}>
   <div className='head1'>
            <img classname="img1" src={`https://image.tmdb.org/t/p/w500${Moviedata.image}`} alt="picture"  ></img>
            </div>

{
onHovered && (
<>
<div className='main'>
        <div className='hover'>
            <div className='image-video-wrapper'>
                <img src={`https://image.tmdb.org/t/p/w500${Moviedata.image}`} alt="picture" onClick={()=>navigate('/player')} width={"200px"} height={"100px"}></img>

<iframe
  autoplay
  controls
  loop
  src={`https://www.youtube.com/embed/${keyvideos}`}
  frameborder="0"
  
></iframe>
</div>
           
      
      <div className='info-container'>
      
        <h3 className='moviename' >
        <Link to={`/player/${keyvideos}`} >
            {
                Moviedata.name
}
</Link>
</h3>



<div className='icons'>
    <div className='controls'>

        
        <RiThumbUpFill title="play" />
        <RiThumbDownFill title='Dis like'/>
       
        
        <AiOutlinePlus title='Add to my list' onClick={()=>addMovies(Moviedata.image)}/>
        
       

    </div>
    <div className='info'>
        <BiChevronDown title="More info"/>
    </div>
</div>
<div className='genre'>
    <ul>
       {
        Moviedata.genres.map((genres1)=>{
          return  <li>{genres1}</li>
        })

       }
    </ul>
</div>

        </div> 
        </div>
        </div>
    </>      
)}
  
    </Cardstyle>  
  )
}

)
const Cardstyle = styled.div`

max-width: 230px;
width:230px;
cursor: pointer;
position: relative;



.head1{
    margin-top: 1rem;
height: 100%;

img{
    border-radius: 0.5rem;
    width:200px;
    height:130px;
    z-index:20;
    gap:2px;
    box-shadow: 1px 3px 10px red;
}
}

.hover{

    z-index:1000;
    height:300px;
    width: 20rem;
    position:absolute;
    top:-55vh;
    left:20px;
    .hover:hover{
        left:24px;
        transition:.3s ease-in;
    }
   
    border-radius: 0.4rem;
    border:1.3px solid white;
    background-color: black;
    box-shadow: 1px 3px 10px whitesmoke ;
    .image-video-wrapper{
        position: relative;
        height:150px;
        img{
            width:20rem;
            height:100%;
            object-fit: cover;
            border-radius: 0.4rem;
            z-index:4;
            position: absolute;
            
            top:0;
            left:0px;
            
        }
        iframe{
            position: absolute;
            width:100%;
            height:175px;
            object-fit: cover;
            border-radius: 0%.2rem;
            
         
            top:0px;
            z-index:48;
            left:0px;
        }
    }
    .info-container{
        display: flex;
        flex-flow:column;
        padding: 1rem;
        gap:0.5rem;
    }
    .moviename{
       position: relative;
top:-10px;
/* text-decoration: none; */

a{
       color:red;
       list-style-type: none;
       text-decoration: none;
   }

       color: red;
        font-size: 18px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 300;
       
    }
  
    .icons{
        color: whitesmoke;
        display: flex;
        justify-content: space-between;
        position: relative;
        top:-15px;
        .controls{
            display: flex;
            gap:1.3rem;
        }

        svg{
            border:0.1rem solid white;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor:pointer;
            transition: 0.3s ease-in-out;
            &hover{
                
                
                color: aliceblue;
            }


        }
    }
    .genre{
        
        ul{
            display: flex;
            flex-flow: row;
            gap: 2.4rem;
            position: relative;
        top:-15px;
        left:-20px;
            color: red;
            font-size: 15px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-weight: 100;
            margin-top: 10px;
            list-style-type:none ;
        }
    }

}

`

