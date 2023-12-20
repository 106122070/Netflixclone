import React, { useState,useEffect } from 'react'
import {collection,onSnapshot} from 'firebase/firestore';

import { firestore1 } from '../utils/fire-base';
import TopNav from './TopNav'
import styled from 'styled-components'
import Card2 from '../components.js/card2';
const Mylist = () => {

const [scroll,setscroll] = useState(true);
const [moviesdata11,setmovies] = useState([]);
const [onhover,sethonver] = useState(false);
const array =[];

const moviecollections = collection(firestore1,'movies');
  window.onscroll = () =>{
    setscroll( window.pageYOffset === 0 ? true: true)
    return ()=>(window.onscroll = null)
  }

  
  /* useEffect(()=>{

  const getmovies = () =>{
    const getmovies = collection(firestore1,'movies');
    getDocs(getmovies)
    .then(res =>{
        const mov = res.docs.map(doc =>( {
            videos:doc.data().keyvideos,
            image:doc.data().movieimages,
            name:doc.data().moviename,
            genres:doc.data().genres,
            access:doc.data().access,
            id:doc.id
        }));
        setmovies(mov);
    })
.catch(error => console.log(error));  
}

getmovies();
  },[]); */


  useEffect(()=>{

    const unsubscribe =  onSnapshot(moviecollections,(snapshot)=> {
      const mov = snapshot.docs.map(doc =>( {
        videos:doc.data().keyvideos,
        image:doc.data().movieimages,
        name:doc.data().moviename,
        genres:doc.data().genres,
        access:doc.data().access,
        id:doc.id
    }));
    setmovies(mov);

    })
    return ()=>{
      unsubscribe();
    }
      
  },[]);


  if(moviesdata11[0]){
    console.log(moviesdata11);
  
    array.push(moviesdata11);
    console.log("done",array);
  }

  setTimeout(()=>{
sethonver(true);
  },500);



  return (
   
   <>
   <Styledlist>
    <header className='head'>
   <TopNav scroll={scroll}/>
   </header>
    <div className='container'>
      <header>
      <div className='header'>
        <h2>Movie Watch List</h2>
      </div>
      </header>
       <main>
        <div className='row'>
      { 
       onhover && ( 
        
        
          
            moviesdata11.map((doc,index) => {
              
        
               return <div className='allcolumns'><Card2 Moviedata={doc} index={index} keyvideos={doc.videos} id1={doc.id}/></div>
                   
                 })
      
       )}
       </div>
       </main>
    </div>
    </Styledlist>
    </>
  ) 
}

const Styledlist= styled.div`

background-color: black;
.head{
  position: relative;
  top:0px;
}
.container{
  position: relative;
  top:40px;
  width: 100%;
  height:40rem;
  .header{
    position: absolute;
    top:30px;
    color: red;
    width:78.9rem;
    height: 4rem;
    box-shadow: 2px 5px 7px whitesmoke;
    background-color:lightblack;
    filter: brightness(80%);
  }

  .allcolumns{
   margin-top: 100px;
    float:left;
  
    width:18.33%;
    margin-left: 20px;
    padding-top:-10px;
    margin-bottom: -100px;
  }
  .row::after{
    
    content:'';
    clear:both;
    display: table;

  }
 
}

`

export default Mylist