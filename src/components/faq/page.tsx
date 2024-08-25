"use client";
import "./page.css";
export default function FAQ() {
  const faqs = [
    {
      question: "the best financial accounting app ever!",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nobis",
      background: "#ff5555",
      color: "#fff",
    },
    {
      question: "the best financial accounting app ever!",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nobis",
      background: "#fff",
    },
    {
      question: "the best financial accounting app ever!",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nobis",
      background: "#fff",
    },
    {
      question: "the best financial accounting app ever!",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nobis",
      background: "#ff5555",
      color: "#fff",
    },
    {
      question: "the best financial accounting app ever!",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nobis",
      background: "#ff5555",
      color: "#fff",
    },
    {
      question: "the best financial accounting app ever!",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nobis",
      background: "#fff",
    },
  ];
  return (
    <>
      <section className="faq-section">
        <span>FAQ</span>
        <h2>Frequently asked questions</h2>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq"
              style={{ backgroundColor: faq.background }}
            >
              <h4 style={{ color: faq.color }}>{faq.question}</h4>
              <p style={{ color: faq.color }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
