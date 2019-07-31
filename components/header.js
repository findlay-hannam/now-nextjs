import Link from "next/link";
import styled from 'styled-components';

const Nav = styled.nav`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 16px;
border: 1px dashed black;
padding: 1px 4px;
`;

const A = styled.a`
color: blue;
cursor: pointer;
`;

function Header() {
  return (
    <Nav>
      <Link href="/"><A>Home</A></Link>
      <Link href="/gallery"><A>Photo gallery</A></Link>
      <Link href="/spotify"><A>A cool playlist</A></Link>
      <Link href="/youtube"><A>Your mix playlist</A></Link>
      <Link href="/recipes"><A>Recipes!</A></Link>
      <Link href="/sonnets"><A>Old school sonnets</A></Link>
    </Nav>
  );
}

export default Header;
