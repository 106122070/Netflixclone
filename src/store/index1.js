import {configureStore,createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import { MY_API_KEY,TMDB_BASE_URL,API1 } from '../utils/Constant';
import axios from 'axios';


let intialState = {
    movies:[],
    genres:[],
    generesloaded10:false,
}
const op = "genre/movie/list";
export const getfetchdata = createAsyncThunk('netflix/genres',async()=>{
 const {data:{genres}} = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=5f8f3eb03335ed12f6191f205bf8eeb5').catch(error => console.log(error)) 
 console.log(genres);
  localStorage.setItem("GENRES",genres);
 return genres
})



const arrayofmovie = (array,moviearray,generes) =>{
    array.forEach((movie)=>{
        const movieGenres = [];
        movie.genre_id.forEach((g1)=>{
            const name = generes.find(({id})=> id === g1);
            if (name) movieGenres.push(name.name)
        })
    if (movie.backdrop_path){
        moviearray.push({
            id:movie.id,
            name:movie?.original_name ? movie.original_name : movie.original_title,
            image:movie.backdrop_path,
            genres:movieGenres.slice(0,3)
        })
    }
    })

}

const getmoviedata = async (api,genres,pagging) =>{
    const Movie11 = [];
    
    for(let i=1;Movie11.length() < 80 && i<10;i++){
     const {data:{results}} = await axios.get(`${api}?${pagging ? `&page=${i}`: ""}`).catch(error =>console.log(error)); 
    arrayofmovie(results,Movie11,genres)
    }
    
    return Movie11
    
    }

export const fetchmovies = createAsyncThunk('netflix/trending',({type},mythunk)=>{

    const {netflix:{genres} } =mythunk.getState();
    
    const data =  getmoviedata(`https://api.themoviedb.org/3/trending/all/week?api_key=5f8f3eb03335ed12f6191f205bf8eeb5`,genres,true);
    console.log(data);
    return data;
});



let netflixslice = createSlice({
    name:"netflix",
    intialState,
    
    reducer:(builder) =>{
        builder.addCase(getfetchdata.fulfilled,(state=intialState,action)=>{
            state.genres = action.payload;
            state.generesloaded10 = true;
            
        })
        builder.addCase(fetchmovies.fulfilled,(state=intialState,action)=>{
            state.movies = action.payload;
        })
    }
    }
    
);





const netflixslicer = netflixslice;

const store = configureStore({

    reducer:{
        netflix:netflixslicer
    },

})

export default store;



