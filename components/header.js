import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href="/"><a>Home</a></Link>
      <Link href="/gallery"><a>Photo gallery</a></Link>
      <Link href="/spotify"><a>A cool playlist</a></Link>
      <Link href="/youtube"><a>Your mix playlist</a></Link>
      <Link href="/recipes"><a>Recipes!</a></Link>
      <Link href="/sonnets"><a>Old school sonnets</a></Link>
    </header>
  );
}

export default Header;
