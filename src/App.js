import './App.css';
import Post from './components/Post'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <div className="main-div">
        <div className="middle-container">
          <Search/>
          <Post/>
          <Post/>
        </div>
      </div>
    </div>
  );
}

export default App;
