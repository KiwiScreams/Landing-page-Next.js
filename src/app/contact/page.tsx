"use client";
import "./page.css";
import Image from "next/image";
export default function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <form action="/action_page.php">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label htmlFor="country">Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: 200 }}
            />

            <button className="btn">Submit</button>
          </form>
        </div>
        <Image src="/about.png" alt="" width={650} height={650} />
      </section>
    </>
  );
}
