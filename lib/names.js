import alphabet from '../resources/names/alphabet.json';
import boysFirst from '../resources/names/boys/first.json';
import boyMiddle from '../resources/names/boys/middle.json';
import girlsFirst from '../resources/names/girls/first.json';
import girlsMiddle from '../resources/names/girls/middle.json';

const grouped = {
  boys: {
    first: boysFirst,
    middle: boysMiddle,
  },
  girls: {
    first: girlsFirst,
    middle: girlsMiddle,
  },
};

export function getAllPaths() {
  const paths = [];
  const boyOrGirls = ['boys', 'girls'];

  boyOrGirls.forEach(gender => {
    alphabet.forEach(letter => {
      paths.push({ query: { gender, letter } });
    });
  });
  return paths;
}

export function getNameData({ gender, letter }) {
  const first = grouped[gender].first;
  const middle = [...first, ...grouped[gender].middle];
  const firstToUse = first.filter(name => name.startsWith(letter));
  const list = [];
  firstToUse.forEach(firstName => {
    middle.forEach(middleName => {
      list.push(`${firstName} ${middleName} Hannam`);
    });
  });
  return {
    gender,
    letter,
    list,
  }
};
