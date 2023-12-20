import React from 'react'
import axios from 'axios';
import { MY_API_KEY, TMDB_BASE_URL } from '../utils/Constant';
import { useEffect } from 'react';


const Getdata = () => {


    useEffect(()=>{
        const fun =async ()=>{
        const {data:{genres}} = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`);
        return genres;
        }    
        fun();
    })

  return (
    <div>Getdata</div>
  )
}

export default Getdata;