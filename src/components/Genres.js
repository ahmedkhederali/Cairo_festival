import React, { useEffect } from 'react'
import axios from "axios";
import { Chip } from '@material-ui/core';
function Genres({selectedGenres,genres,setSelectedGenres,setGenres,setPage,type}) {
   const handleAdd=(genre)=>{
    setSelectedGenres([...selectedGenres,genre])
    setGenres(genres.filter((g)=>g.id!==genre.id))
    setPage(1)
   }
   const handleRemove=(genre)=>{
    setSelectedGenres(selectedGenres.filter((selected)=>selected.id!==genre.id))
    setGenres([...genres,genre])
    setPage(1)
   }
    const fetchTrending = async () => {
        //طالما ضفت ملف لازم اقفل وارن من جديد env
        const{data}=await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`) 
               console.log(data.genres)
               setGenres(data.genres)
      };

      //من غير دول []
      //equal to component did update
      useEffect(()=>{
        fetchTrending()
        return()=>{
            setGenres({})
        };
        //eslint-disable-next-line
      },[])
     
    return (
        <div style={{padding:"6px 0"}}>
        {
            selectedGenres &&  selectedGenres.map((e)=>(
                <Chip style={{margin:2}} clickable sixe="small" key={e.id} label={e.name} color='primary' onDelete={()=>handleRemove(e)}/>
            ))
        }
        {
            genres &&  genres.map((e)=>(
                <Chip style={{margin:2}} clickable sixe="small" key={e.id} label={e.name} onClick={()=>handleAdd(e)} />
            ))
        }
        </div>
    )
}

export default Genres
