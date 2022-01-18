import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../SingleContent/SingleContent";
import "./Trending.css";
function Trending() {
  const [page,setPage]=useState(1)
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    //طالما ضفت ملف لازم اقفل وارن من جديد env
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    //console.log(data.results);
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
    //لازمة السطر علشان فيه تحذير بيطلع فبشيله
    //eslint-disable-next-line
  }, [page]);
  return (
    <div>
      <span className="pageTitle">Trending</span>
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
                media_type={e.media_type}
                vote={e.vote_average}
              />
            ))
        }
      </div>
      <CustomPagination setPage={setPage}/>
    </div>
  );
}

export default Trending;
