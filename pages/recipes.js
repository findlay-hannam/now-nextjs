import Header from '../components/header';
import Recipes from '../components/recipes';
import { Main } from '../components/styles';

export default function Page() {
  return (
    <Main>
      <Header />
      <Recipes />
    </Main>
  );
}