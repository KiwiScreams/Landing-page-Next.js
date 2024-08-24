import Image from "next/image";
import "./home.css";
export default function Home() {
  return (
    <>
      <section className="home-section">
        <div className="container">
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
            <Image src="/line.png" alt="" width={400} height={300} />
          </div>
          <Image src="/phones.png" alt="" width={600} height={700} />
        </div>
      </section>
    </>
  );
}
