import './App.css';
import MovieList from './components/MovieList/MovieList';
import SelectedMovie from './components/SelectedMovie/SelectedMovie';


function App() {
  return (
    <div className="App">
      <div>
        <MovieList />
        <SelectedMovie />
      </div>
    </div>
  );
}

export default App;
