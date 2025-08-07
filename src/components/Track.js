import './componentsStyles/Track.css';

function Track() {
  return (
    <div class="track">
        <div class="title">
            <p class="name-title">Hit That</p>
            <div class="infos">
                <p class="artist">The Offsprings</p>
                <p class="album">Lorem Ipsum Jusqua je ne sais ou encore et toujours plus</p>
                <p class="year">2005</p>
            </div>
        </div>
        <div class="removeButton">
            <button class="button">+</button>
        </div>
    </div>

  );
}

export default Track;