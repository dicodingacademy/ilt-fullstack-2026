/**
 * TODO
 * create function `getAllMusics` that retrieve musics data from API
 *
 * HTTP API endpoint: GET https://calm-music-api.dicoding.dev/musics
 */

export async function getAllMusics() {
  try {
    const response = await fetch('https://calm-music-api.dicoding.dev/musics');
    const bodyResponseInJSON = await response.json();

    // grab the musics based on returned JSON structured
    const { musics } = bodyResponseInJSON.data;

    return musics;
  } catch (error) {
    console.error(error);

    // return empty error when fetch is error
    return [];
  }
}
