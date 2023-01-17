import './App.css';
import Raw from './components/Raw';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <Nav/>
          <Banner/>
          <Raw title="Trending in India" 
          fetchUrl={requests.fetchTrending}
          />
          <Raw title="Netflix originals" 
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow="true"
          />
          <Raw title="Top rated" 
          fetchUrl={requests.fetchTopRated}
          />
          <Raw title="Action" 
          fetchUrl={requests.fetchActionMovies}
          />
          <Raw title="Comedy" 
          fetchUrl={requests.fetchComedyMovies}
          />
          <Raw title="Horror" 
          fetchUrl={requests.fetchHorrorMovies}
          />
          <Raw title="Romance" 
          fetchUrl={requests.fetchRomanceMovies}
          />
          <Raw title="Documentries" 
          fetchUrl={requests.fetchDocumentaries}
          />
          
          
      </header>
    </div>
  );
}

export default App;
