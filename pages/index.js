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
    </Main>
  );
}

export default Index;
