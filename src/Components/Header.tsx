import Link from "next/link";

const Header = () => {
    return (
    <header>
        <nav>
          <Link href="/" className="button">Home</Link>
          <Link href="/projects" className="button">Projects</Link>
        </nav>
    </header>
    )
}
  
export default Header;