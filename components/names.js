import { List, ListItem } from '@material-ui/core';

export default function NamesList({ list }) {
  return (
    <List>
      {list.map(name => <ListItem key={name}>{name}</ListItem>)}
    </List>
  );
}
