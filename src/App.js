import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Search from './components/Search/Search';
import SelectedMovie from './components/SelectedMovie/SelectedMovie';
import UserGreet from './UserGreet/UserGreet';


function App() {
  return (
    <div className="App ml-3">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={<UserGreet />}
          />
          <Route
            path="/search"
            element={<Search />}
          />
          <Route
            path="/selectedmovie"
            element={<SelectedMovie />}
          />
          <Route
            path="/movielist"
            element={<MovieList />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
