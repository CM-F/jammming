import { useCallback } from "react";
import Tracklist from "./Tracklist";
import './componentsStyles/Playlist.css'

function Playlist(props) {
  const handleNameChange = useCallback ((event) => {props.onNameChange(event.target.value);
  },
  [props.onNameChange]  
);

  return (
    <>
    <div class="playlist-container">
        <div class="playlist">
            <form class="playlistName">
                <input onChange={handleNameChange} type="text" id="playlistName" name="playlistName" defaultValue={props.playlistName}></input>
            </form>
            <Tracklist playlistTracks={props.playlistTracks} isRemoval={true} onRemove={props.removeTrack} />
        </div>
        <button onClick={props.savePlaylist} className="save-button">SAVE TO SPOTIFY</button>
    </div>
    </>
  );
}

export default Playlist;