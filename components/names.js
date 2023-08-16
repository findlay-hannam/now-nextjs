import List from '@mui/material/List';
import ListItem from '@mui/material/List';

export default function NamesList({ list }) {
  return (
    <List>
      {list.map(name => <ListItem key={name}>{name}</ListItem>)}
    </List>
  );
}
