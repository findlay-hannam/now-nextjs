import Header from '../components/header';
import Gallery from '../components/gallery';
import { Main } from './styles';

export default function Page() {
  return (
    <Main>
      <Header />
      <Gallery />
    </Main>
  );
}