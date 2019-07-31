import SpotifyPlayer from 'react-spotify-player';

const size = {
  width: '100%',
  height: 900,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
 
export default function Spotify() {
  return (
    <SpotifyPlayer
      uri="spotify:playlist:0zixRAtfidlFHFnBzYvazN"
      size={size}
      view={view}
      theme={theme}
    />
  );
}