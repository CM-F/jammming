import Track from './Track';
import './componentsStyles/Tracklist.css';

function Tracklist(props) {
  const tracks = props.tracks || [];
  return (
    <div className="tracklist">
      {tracks.map((track) => {
        return (
          <Track 
            track={track}
            key={track.id}
            onAdd={props.onAdd}
          />
        );
      })}
    </div>
  );
}

export default Tracklist;