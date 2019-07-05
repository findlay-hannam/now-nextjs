import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href="/about">About Me</Link>
      <Link href="/services">Services we provide</Link>
    </header>
  );
}

export default Header;
