"use client";
import FAQ from "../components/faq/page";
import "./page.css";
import Image from "next/image";
export default function About() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <Image src="/about.png" alt="" width={700} height={700} />
          <div className="text-container">
            <div>
              <h1>make the best financial decisions</h1>
              <p>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
