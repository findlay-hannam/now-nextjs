import { Main } from '../../components/styles';
import Header from '../../components/header';
import Names from '../../components/names';
import firstNames from '../../resources/names/girls/first.json';
import middleNames from '../../resources/names/girls/middle.json';

const first = firstNames.sort();
const middle = [...firstNames, ...middleNames].sort();
const list = [];
first.forEach(firstName => {
  middle.forEach(middleName => {
    if (firstName !== middleName) {
      list.push(`${firstName} ${middleName} Hannam`);
    }
  });
});

export default function Boys() {
  return (
    <Main>
      <Header />
        <section>
          <h2>{list.length} Names</h2>
          <Names list={list} />
        </section>
    </Main>
  );
}