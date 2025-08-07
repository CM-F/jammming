import './componentsStyles/SearchResults.css';
import Track from './Track';

function SearchResults() {
  return (
    <div class="searchResult">
        <h3>Results</h3>
        <div class="result">
            <Track />
            <Track />
            <Track />
        </div>
    </div>
  );
}

export default SearchResults;