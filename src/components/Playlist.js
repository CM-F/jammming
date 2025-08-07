import Tracklist from "./Tracklist";
import './componentsStyles/Playlist.css'

function Playlist() {
  return (
    <>
    <div class="playlist-container">
        <div class="playlist">
            <form class="playlistName">
                <input type="text" id="playlistName" name="playlistName" placeholder="Your playlist title"></input>
            </form>
            <Tracklist />
        </div>
        <button class="save-button">SAVE TO SPOTIFY</button>
    </div>
    </>
  );
}

export default Playlist;