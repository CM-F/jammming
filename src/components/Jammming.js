import SearchBar from './SearchBar';
import SearchResults from './SearchResult';
import Playlist from './Playlist';
import './componentsStyles/Jammming.css';

function Jammming() {
  return (
        <section id="projects">
            <div class="breaking-news">
                <h2>JAMMMING</h2>
            </div>
            <div class="project container">
                <p class="presentation">Search your favorites songs and made your playlist on Spotify (sorry for the users of Deezer...).</p>
                <SearchBar />
                <div class="results-playlist-container">
                    <SearchResults />
                    <Playlist />
                </div>
            </div>
        </section>
  );
}

export default Jammming;