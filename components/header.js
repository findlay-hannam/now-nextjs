import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href="/"><a>Home</a></Link>
      <Link href="/services"><a>Services we provide</a></Link>
      <Link href="/contact"><a>Contact us</a></Link>
    </header>
  );
}

export default Header;
