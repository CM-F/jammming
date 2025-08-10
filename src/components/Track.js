import React, { useCallback } from 'react';
import './componentsStyles/Track.css';

function Track(props) {
  const addTrack = useCallback ((event) => {props.onAdd(props.track);}, [props.onAdd, props.track]);
  const removeTrack = useCallback ((event) => {props.onRemove(props.track);}, [props.onAdd, props.track]);

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="track-action" onClick={removeTrack}>-</button>
      );
    }
    return (
      <button className="track-action" onClick={addTrack}>+</button>
    )
  }

  return (
    <div className="track">
        <div className="title">
            <p className="name-title">{props.track.name}</p>
            <div className="infos">
                <p><span className="artist">{props.track.artist}</span> | {props.track.album}</p>
            </div>
        </div>
        <div>
            {renderAction()}
        </div>
    </div>

  );
}

export default Track;