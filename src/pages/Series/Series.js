
import axios from "axios";
import React, { useEffect,useState} from "react";
import SingleContent from "../../SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from "../../components/Genres";
import useGeners from "../../hooks/useGeners";
function Series() {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    //كده مش هيشتغل لازم اضيفه في اليوز افكت
    const genersForUrl=useGeners(selectedGenres)
    const fetchTrending = async () => {
        //طالما ضفت ملف لازم اقفل وارن من جديد env
        //الفكره هنا عاوز احول  المسار الي ارقام يقدر يتعامل معاها  
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genersForUrl}`
        );
        //console.log(data);
        setContent(data.results);
      };
      useEffect(() => {
        fetchTrending();   
        //eslint-disable-next-line     
      }, [page,genersForUrl]);
    return (
        <div>
        <span className='pageTitle'>Series</span>
        <Genres type="tv" 
        selectedGenres={selectedGenres}
        genres={genres} 
        setSelectedGenres={setSelectedGenres} 
        setGenres={setGenres}
        setPage={setPage}/>
    <div className="trending">
    {
      //we us  || because there is name in movie and there is title in tv series
      content &&
        content.map((e) => (
          <SingleContent
            key={e.id}
            id={e.id}
            poster={e.poster_path}
            title={e.title || e.name}
            date={e.release_date || e.first_air_date}
            media_type="TV Series"
            vote={e.vote_average}
          />
        ))
    }
  </div>
  <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Series
