"use client";
import Link from "next/link";
import Image from "next/image";
import "./Header.css";
import { usePathname } from "next/navigation";
export default function Header() {
  const currentPath = usePathname();
  return (
    <>
      <header>
        <h1 className="logo">
          <Link href="/">
            <Image src="/logo.svg" alt="" width={100} height={50} />
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link
                href="/"
                className={currentPath === "/" ? "active-page" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={currentPath === "/technique" ? "active-page" : ""}
              >
                Technique
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={currentPath === "/contacts" ? "active-page" : ""}
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={currentPath === "/about" ? "active-page" : ""}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <button>Download</button>
      </header>
    </>
  );
}
