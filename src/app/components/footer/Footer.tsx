"use client";
import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <ul className="logo">
            <Link
              href="/"
              scroll={true}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image src="/logo.svg" alt="" width={100} height={50} />
            </Link>
            <li>
              <Image src="/mail.svg" alt="" width={24} height={24} />
              help@frybix.com
            </li>
            <li>
              <Image src="/phone.svg" alt="" width={24} height={24} />
              +1 234 456 678 89
            </li>
          </ul>
          <div className="footer-body">
            <ul>
              <h4>Links</h4>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Blokings</Link>
              </li>
            </ul>
            <ul>
              <h4>Legals</h4>
              <li>
                <Link href="/">Terms Of Use</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Cookie Policy</Link>
              </li>
            </ul>
            <ul>
              <h4>Product</h4>
              <li>
                <Link href="/">Take Tour</Link>
              </li>
              <li>
                <Link href="/">Live Chat</Link>
              </li>
              <li>
                <Link href="/">Reveiws</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright 2022 uifry.com all rights reserved</p>
        </div>
      </footer>
    </>
  );
}
