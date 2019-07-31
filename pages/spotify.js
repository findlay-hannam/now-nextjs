import Header from '../components/header';
import Spotify from '../components/spotify';
import { Main } from './styles';

export default function Page() {
  return (
    <Main>
      <Header />
      <Spotify />
    </Main>
  );
}