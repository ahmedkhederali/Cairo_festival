import "./App.css";
import "./index.css";
import Header from "./Header";
import SimpleBottomNavigation from "./components/MainNav";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./pages/Trending/Trending";
import Movie from "./pages/Movies/Movie";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/*" element={<Trending />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
