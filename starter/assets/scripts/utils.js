const musicsSample = [
  {
    id: '01-coverless-book',
    title: 'Coverless Book',
    author: 'Amir Firouzfard',
    signature: 'Music by <a href="https://pixabay.com/users/ambientaudiovision-25188255/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307">Amir Firouzfard</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/01-coverless-book.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/01-coverless-book.jpg'
  },
  {
    id: '02-lofi-orchestra',
    title: 'Lofi Orchestra',
    author: 'Patrick A',
    signature: 'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/02-lofi-orchestra.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/02-lofi-orchestra.jpg'
  },
  {
    id: '03-for-a-dream',
    title: 'For a Dream',
    author: 'Patrick A',
    signature: 'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/03-for-a-dream.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/03-for-a-dream.jpg'
  },
  {
    id: '04-goodnight',
    title: 'Good Night',
    author: 'FASSound',
    signature: 'Music by <a href="https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166">FASSounds</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/04-goodnight.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/04-goodnight.jpg'
  },
  {
    id: '05-summer-rain',
    title: 'Summer Rain',
    author: 'Patrick A',
    signature: 'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/05-summer-rain.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/05-summer-rain.jpg'
  },
  {
    id: '06-lofi-study',
    title: 'Lofi Study',
    author: 'FASSound',
    signature: 'Music by <a href="https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191">FASSounds</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/06-lofi-study.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/06-lofi-study.jpg'
  },
  {
    id: '07-forest-guitar-lofi',
    title: 'Forest Guitar Lofi',
    author: 'xethrocc',
    signature: 'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=161108">Patrick A.</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=161108">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/07-forest-guitar-lofi.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/07-forest-guitar-lofi.jpg'
  },
  {
    id: '08-chilling-homer',
    title: 'Chilling Homer',
    author: 'OpenMusicList',
    signature: 'Music by <a href="https://pixabay.com/users/openmusiclist-24014275/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=187573">OpenMusicList</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=187573">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/08-chilling-homer.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/08-chilling-homer.jpg'
  },
  {
    id: '09-dust',
    title: 'Dust',
    author: 'xethrocc',
    signature: 'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205063">Patrick A.</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205063">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/09-dust.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/09-dust.jpg'
  },
  {
    id: '10-zombies',
    title: 'Zombies',
    author: 'Patrick A',
    signature: 'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154347">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154347">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/10-zombies.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/10-zombies.jpg'
  }
];

export function getAllMusics() {
  return [...musicsSample];
}

export function generateMusicItemUsingTemplate({ id, artLink, title, signature, audioLink }) {
  // Buatlah music item element dengan memanfaatkan <template> pada HTML.
}

export function generateMusicItemUsingInnerHTML({ id, artLink, title, signature, audioLink }) {
  // Buatlah music item element dalam bentuk string.
}
