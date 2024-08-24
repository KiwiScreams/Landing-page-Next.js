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
        <div className="container">
          <div className="text-container">
            <div>
              <h1>why choose Uifry?</h1>
              <h2>
                <Image src="/notification.svg" alt="" width={40} height={40} />
                clever notifications
              </h2>
              <p>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
          <Image src="/phone1.png" alt="" width={800} height={700} />
        </div>
        <div className="container">
          <Image src="/phone2.png" alt="" width={800} height={700} />
          <div className="text-container">
            <div>
              <h1>make the best financial decisions</h1>
              <h2>
                <Image src="/star.png" alt="" width={40} height={40} />
                fully customizable
              </h2>
              <p>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
