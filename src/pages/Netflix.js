import React, { useEffect, useState } from 'react'
import axios from "axios";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import TopNav from './TopNav';
import img3 from '../images/b1.jpeg';
import Slidercontainer from '../components.js/Slidercontainer';

const Netflix = () => {

  const [scroll,setscroll] = useState(false);

const [moviesdata,setdata] = useState([]);
  
  const Movie11 = [];

//THE MAIN PROCESS OF DISTRIBUTING THE MOVIE DATABASE TO SEVERAL COLLLECTIONS

const getfetchdata = async()=>{
    
    let g1;
    let movies11;

    const {data:{genres}} =  await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=5f8f3eb03335ed12f6191f205bf8eeb5')
    .catch(error => console.log(error));

    g1=genres;

    for(let i=1;Movie11.length < 80 && i<5;i++)
    {
      fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=5f8f3eb03335ed12f6191f205bf8eeb5&page=${i}`)
      .then(response => response.json())
      .then(data => {

      const r1 = data.results;

      r1.forEach((movie)=>
      {
        const movieGenres = [];
        const array = [];

        movie.genre_ids.forEach((genid)=>{

            const name = g1.find(({id})=> id === genid);
           
            if (name){
             
              movieGenres.push(name.name)
            } 
       
          })
     
          
          fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=5f8f3eb03335ed12f6191f205bf8eeb5&language=en-US`)
          .then(data => data.json())
          .then(res => 
          {
            
            if(res.results[0]!=null ){
             movies11 =  res.results.slice(0,1);
             if(movies11[0]!=null){
            array.push(movies11);
             }
             
              
            
          }
          }).catch(error => console.log("error",error.status));

        if (movie.backdrop_path )
        {

            const moviename = [movie.original_title];
         
            Movie11.push({
             
              id:movie.id,
              name:movie?.original_name ? movie.original_name : movie.original_title,
              image:movie.backdrop_path,
              overview:movie.overview,
              videomovie11:array,
              title:moviename.splice(0),
              genres:movieGenres.slice(0,3)
        
            })   
    }

    })
  setdata(Movie11);
    })
 }    

    return Movie11;
   }

   const [imagedata, setimagedata] = useState('');
   const [overviewdata, setoverviewdata] = useState('');
   const [titledata, settitledata] = useState('');
   const [videodata, setvideodata] = useState('');

   const MyComponent = () => {
    
  
    useEffect(() => {
      const slideshow = () => {
        const idindex = Math.floor(Math.random() * 80);
        const datas = Movie11[idindex];
      
        const r1t = datas.image;
        const r2o = datas.overview;
        const r3p = datas.title;
        const r4v = datas.videomovie11;
        if(r4v[0]){
          const r5v = datas.videomovie11[0][0].key;
          setvideodata(r5v);
        }else{
          setvideodata('jenvje');
        }

        setimagedata(r1t);
        setoverviewdata(r2o);
        settitledata(r3p);
       
      }
  
       setInterval(slideshow, 6000);
  
     
    }, []);

    
  }
 
   MyComponent();
   useEffect(()=>{
   
    getfetchdata();
    
   },[]);



  window.onscroll = () =>{
    setscroll( window.pageYOffset === 0 ? false: true)
    return ()=>(window.onscroll = null)
  }

  const navigate11 = useNavigate();

  return (
    <>
   
 <Herostyles>
  
{ <div className='imgw'>
 <img src={imagedata ? `https://image.tmdb.org/t/p/w500${imagedata}` :img3} alt='nvfsknvk'/>
 </div>}
 <div className='ji'>
 <TopNav scroll={scroll}/>
 </div>
 <div className='main'>

 
   <div className='container'>
     <div className='title'>
       <h1>{titledata ? titledata : "Super Man"}</h1>
       <p>{overviewdata ? overviewdata : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Ithas survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}</p>
     </div>

     <div className='btn'>
       <button  className='playbtn'><Link to={`player/${videodata}`}>Play</Link></button>
       <button className='morebtn'>More</button>
     </div>
   </div>
  
   
   </div>
   <Slidercontainer store={moviesdata} setimagedata={setimagedata} setoverviewdata={setoverviewdata} settitledata={settitledata}/>
    </Herostyles>
    
        
 

    
   
    </>
  )
}

const Herostyles = styled.div`
background-color: black;
overflow-x: hidden;
overflow-y: hidden;

.main{
  position: relative;
  .container{
    position: absolute;
    bottom: 5rem;
  }
}
.imgw{
  filter:brightness(70%);
  box-shadow: 2px 2px 10px red;
}
.title{
  h1{
    font-size: 50px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background:-webkit-linear-gradient(#eee,rgba(137,10,50));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    position: relative;
    top:2.0rem;
    left:1.7rem;
    text-transform: uppercase;
    margin-left: -30px;
  }

  p{
    font-size: 15px;
    font-family:sans-serif;
    font-weight: 50;
    color: whitesmoke;
    width:500px;
height: 100px;
margin-left: 18px;
  }
}

.btn{
  width: 200px;
  height: 30px;
  margin-left: 20px;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;

  a{
    text-decoration: none;
    color: whitesmoke;
  }
  a:hover{
    color: red;
  }
  .playbtn{
  width:50px;
  height: 40px;
  
   
    padding: 6px;
    color: whitesmoke;
    background-color: red;
    border-radius: 10px;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 400px;
    width:75px;
    cursor: pointer;
    border: 1.4px solid red;

  }

  
   .morebtn{
  width:50px;
  height: 40px;
  
   
    padding: 6px;
    color: red;
    background-color: whitesmoke;
    border-radius: 10px;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 400px;
    width:75px;
    cursor: pointer;
    border: 1.4px solid whitesmoke;

  }

  .morebtn:hover{
  width:50px;
  height: 40px;
  
   
    padding: 6px;
    color: whitesmoke;
    background-color: red;
  
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 400px;
    width:75px;
    cursor: pointer;
    border: 1.4px solid red;

  }
  
.playbtn:hover{
  
background-color: whitesmoke;
color: red;
border: 2px solid whitesmoke;

}
}
img{
  width: 100%;
  height: 90vh;

}

.ji{
  position: absolute;
  top:0rem;
}

`
export default Netflix