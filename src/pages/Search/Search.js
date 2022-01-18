import React, { useState ,useEffect} from "react";
import { Button, Tab, Tabs, TextField } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import axios from 'axios'
import SingleContent from "../../SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
function Search() {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState()

  //ازاي اغير لون ترقيم الصفحات
const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fff",
    },
  },
});



const fetchSearch = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
    // console.log(data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  window.scroll(0, 0);
  fetchSearch();
  // eslint-disable-next-line
}, [type, page]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div style={{ display: "flex", margin: "15px 0" }}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />

          <Button style={{ marginLeft: 10 }} variant="contained" onClick={fetchSearch}>
            {" "}
            <SearchIcon />{" "}
          </Button>
        </div>
        <Tabs value={type} indicatorColor="primary" textColor="primary" onChange={(event,newValue)=>{
            setType(newValue)
            setPage(1)
        }}
        style={{paddingBottom:5}}
        >
            <Tab style={{width:"50%"}} label="Search Movie"/>
            <Tab style={{width:"50%"}} label="Search TV Series"/>
            <Tab/>
        </Tabs>
      </ThemeProvider>
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
              media_type={type? "tv" : "movie"}
              vote={e.vote_average}
            />
          ))
      }
      {
        searchText&&
        !content&&( type ? <h1>Not TV Series</h1>:<h1>Not Movie</h1>)
      }
    </div>
    {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
}

export default Search;
