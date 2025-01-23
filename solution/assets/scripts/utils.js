export function generateMusicItemUsingInnerHTML({ id, artLink, title, signature, audioLink }) {
  return `
    <article class="music-list__item" data-musicid="${id}">
      <div class="card">
        <div class="card-image">
          <img id="musicImage" src="${artLink}" alt="${title}" />
        </div>
        <div class="card-body">
          <h3 id="musicTitle" class="card-body__title">${title}</h3>
          <div id="musicSignature" class="card-body__copyright">${signature}</div>
          <audio
            id="musicAudio"
            class="music-list__item__audio"
            controls
            src="${audioLink}"
            type="audio/mp3"
            preload="none"
          ></audio>
        </div>
      </div>
    </article>
  `;
}
