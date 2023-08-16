import Link from "next/link";
import MUILink from '@mui/material/Link'
import styled from 'styled-components';

const Nav = styled.nav`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 16px;
border: 1px dashed black;
padding: 1px 4px;
`;

// function MUILink (a) { return a.children };

function Header() {
  return (
    <Nav>
      <Link href="/"><MUILink href="/">Home</MUILink></Link>
      <Link href="/gallery"><MUILink href="/gallery">Photo gallery</MUILink></Link>
      <Link href="/spotify"><MUILink href="/spotify">A cool playlist</MUILink></Link>
      <Link href="/youtube"><MUILink href="/youtube">Your mix playlist</MUILink></Link>
      <Link href="/recipes"><MUILink href="/recipes">Recipes!</MUILink></Link>
      <Link href="/sonnets"><MUILink href="/sonnets">Old school sonnets</MUILink></Link>
      <Link href="/names/boys"><MUILink href="/names/boys">Boys Names</MUILink></Link>
      <Link href="/names/girls"><MUILink href="/names/girls">Girls Names</MUILink></Link>
    </Nav>
  );
}

export default Header;
