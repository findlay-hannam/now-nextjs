import Header from '../components/header';
import Sonnets from '../components/sonnets';
import { Main } from './styles';

export default function Page() {
  return (
    <Main>
      <Header />
      <Sonnets />
    </Main>
  );
}