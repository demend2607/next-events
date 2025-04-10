import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 md:px-9 ">
      <Link className="link" href="/">
        <Logo />
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-sm">
          <li>
            <Link className="link" href="/event">
              Event
            </Link>
          </li>
          <li>
            <Link className="link" href="/events">
              Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
