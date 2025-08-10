import React, {useState, useCallback} from 'react';
import './componentsStyles/Jammming.css';

import SearchBar from './SearchBar';
import SearchResults from './SearchResult';
import Playlist from './Playlist';

function Jammming() {

    const tracksArr = [
      {name: "Baby", artist: "Royal Republic", album: "Weekend Man", id: "0001"},
      {name: "Happy", artist: "C2C", album: "Tetra", id: "0002"},
      {name: "Space Station No. 9", artist: "YOOOO", album: "NEXUS-2060", id: "0003"},
      {name: "Space Station No. 6", artist: "CAPSULE", album: "NEXUS-2060", id: "0004"}
    ];
  
    const [searchResults, setSearchResults] = useState(tracksArr);
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [playlistTracks, setPlaylistTracks] = useState([]);

    const addTrack = useCallback(
        (track) => {
            if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
                return;
            
            setPlaylistTracks((prevTracks) => [...prevTracks, track]);
        },
        [playlistTracks] 
    );

    const removeTrack = useCallback (
        (track) => {
            setPlaylistTracks((prevTracks) => prevTracks.filter((currentTrack) => currentTrack.id !== track.id));
            }, []);
    
    const updatePlaylistName = useCallback((name) => {
        setPlaylistName(name);
    }, []);

    let savePlaylist;

    return (
        <section id="projects">
            <div class="breaking-news">
                <h2>JAMMMING</h2>
            </div>
            <div class="project container">
                <p class="presentation">Search your favorites songs and made your playlist on Spotify (sorry for the users of Deezer...).</p>
                <SearchBar />
                <div class="results-playlist-container">
                    <SearchResults searchResults={searchResults} onAdd={addTrack}/>
                    <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onSave={savePlaylist} />
                </div>
            </div>
        </section>
    );
}

export default Jammming;