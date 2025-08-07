import './componentsStyles/SearchBar.css';

function SearchBar() {
  return (
        <form class="searchBar">
            <input type="text" id="searchBar" name="searchBar" placeholder="Search for title, artist, album..."></input>
            <button>SEARCH</button>
        </form>
  );
}

export default SearchBar;