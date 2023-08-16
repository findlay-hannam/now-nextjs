import Link from "next/link";
import Youtube from 'react-youtube';
import Typography from '@mui/material/Typography';
import Header from "../components/header";
import { Main } from '../components/styles';

const videoOpts = {
  height: '390',
  width: '640',
  playerVars: {
    autoPlay: 0,
  },
};

function Index() {
  return (
    <Main>
      <Header />
      <section>
        <Typography>
          <h1>Happy Birthday KT!</h1>
          <p>
            Today’s a very special day,
            So I’ve devised a game to play!
          </p>
          <p>
            I’ll open with a cryptic clue,
            And give you some fun tasks to do.
          </p>
          <p>
            It’s very much a treasure hunt,
            I hope that isn’t an affront
          </p>
          <p>
            To find the very second clue,
            This question I do put to you:
          </p>
          <p>
            Where does Findlay keep his shorts?
            (The ones he doesn’t use for sports)
          </p>
        </Typography>
        <Youtube
          opts={videoOpts}
          videoId="YMiVrhRXg-c"
        />
      </section>
    </Main>
  );
}

export default Index;
