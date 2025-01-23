// CSS imports
import '../styles/style.css';

import { generateMusicItemUsingInnerHTML } from './utils.js';
import { getAllMusics } from './data/api.js';

const drawerButton = document.querySelector('#drawer-button');
const drawerNavigation = document.querySelector('#navList');
const musicListContainer = document.getElementById('musicList');

function setupDrawer() {
  drawerButton.addEventListener('click', () => {
    drawerNavigation.classList.toggle('open');
  });

  document.body.addEventListener('click', (event) => {
    if (!drawerNavigation.contains(event.target) && !drawerButton.contains(event.target)) {
      drawerNavigation.classList.remove('open');
    }
  });
}

function stopOtherAudio(currentAudio) {
  const listOfAudioElement = document.querySelectorAll('audio');

  listOfAudioElement.forEach((audioElement) => {
    // Others audio will be paused
    if (currentAudio !== audioElement) {
      audioElement.pause();
    }
  });
}

function setupOnlyOneAudioIsPlaying() {
  const listOfAudioElement = document.querySelectorAll('audio');

  listOfAudioElement.forEach((audioElement) => {
    /**
     * See: HTMLMediaElement: play event
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event
     */
    audioElement.addEventListener('play', (event) => {
      const currentAudio = event.currentTarget;
      stopOtherAudio(currentAudio);
    });
  });
}

function populateWithInnerHTML(musics) {
  const elements = musics.map(generateMusicItemUsingInnerHTML);
  musicListContainer.innerHTML = elements.join('');
}

async function init() {
  setupDrawer();

  // TODO: get musics from api
  const musicsSample = await getAllMusics();

  populateWithInnerHTML(musicsSample);
  setupOnlyOneAudioIsPlaying();
}

init();
