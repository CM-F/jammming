import React from 'react';
import './componentsStyles/SearchResults.css';
import Tracklist from './Tracklist';

function SearchResults(props) {
  return (
    <div class="searchResult">
        <h3>Results</h3>
        <div class="result">
            <Tracklist tracks={props.searchResults} onAdd={props.onAdd}/>
        </div>
    </div>
  );
}

export default SearchResults;