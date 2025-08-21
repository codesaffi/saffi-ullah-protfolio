import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faDatabase } from "@fortawesome/free-solid-svg-icons";
import image1 from "../assets/avatar-1.png";
import image2 from "../assets/avatar-2.png";
import image3 from "../assets/avatar-3.png";
import image4 from "../assets/avatar-4.png";
import image5 from "../assets/icon-design.svg";
import image6 from "../assets/icon-dev.svg";
import image7 from "../assets/icon-app.svg";
import image8 from "../assets/icon-photo.svg";
import image9 from "../assets/photo-output (1).png";
import image10 from "../assets/favicon.png";
import image11 from "../assets/R (1).png";
import image12 from "../assets/IMG_3885.png";
import image13 from "../assets/OH7Yxoy.png";
import image14 from "../assets/R.png";
import image15 from "../assets/download.png";
import { faNode, faReact } from "@fortawesome/free-brands-svg-icons";

const testimonialsData = [
  // Add your testimonials data here, for example:
  {
    avatarSrc: image1,
    avatarAlt: "EBIZCO",
    title: "EBIZCO",
    text: "Saffi was hired as a junior developer in our team and he has always worked and learned with motivation and dedication . We were very pleased with the work done. He has a gained lot of experience and is very concerned about the needs of client.",
  },
  {
    avatarSrc: image2,
    avatarAlt: "AR properties",
    title: "AR properties",
    text: "we wanted a website for our company and someone refer saffi to us and when we worked with him he left us amazed with his work especially the time in which he delivered.He truly is dedicated to his work. ",
  },
  {
    avatarSrc: image3,
    avatarAlt: "imtz-phar",
    title: "imtz-phar",
    text: "Saffi is an exceptional web developer who delivered a flawless website ahead of schedule. Their expertise, attention to detail, and clear communication made the entire process smooth and enjoyable.",
  },
  {
    avatarSrc: image4,
    avatarAlt: "streetnest",
    title: "streetnest",
    text: "Saffi transformed our e-commerce site, TrendyTreasures, into a sleek and high-performing platform. Their expertise and prompt delivery exceeded our expectations! ",
  },
    {
    avatarSrc: image4,
    avatarAlt: "streetnest",
    title: "streetnest",
    text: "Saffi transformed our e-commerce site, TrendyTreasures, into a sleek and high-performing platform. Their expertise and prompt delivery exceeded our expectations! ",
  },
  
];

const About2 = () => {
  const [modalActive, setModalActive] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState({});

  const openModal = (testimonial) => {
    setCurrentTestimonial(testimonial);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
    setCurrentTestimonial({});
  };

  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

    <section className="about-text">
      <p>

I am a seasoned MERN stack developer from Lalamusa, Pakistan, with a strong command of both backend and frontend technologies. My expertise spans the entire web development process, from crafting intuitive user interfaces to building robust server-side logic and managing complex databases. I specialize in creating end-to-end web applications that are efficient, scalable, and secure.

With a deep understanding of MongoDB, Express.js, React, and Node.js, I build full-stack solutions that meet modern web standards and business needs. My work is driven by a commitment to delivering high-performance applications that are not only visually appealing but also technically sound. I take pride in writing clean, maintainable code and implementing best practices across the development lifecycle.

Whether it's architecting a scalable backend, designing an engaging frontend, or optimizing database queries, I bring a comprehensive skill set to every project. My goal is to contribute to innovative projects that make a real impact, and I am eager to collaborate with tech companies looking for a dedicated MERN stack developer to bring their ideas to life.

      </p>
    </section>



      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

          <li className="service-item">
            <div className="service-icon-box">
              <img src={image6} alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">full-stack development</h4>

              <p className="service-item-text">
Creating complete web solutions with the MERN stack — combining dynamic frontends and robust backends for end-to-end functionality.              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <FontAwesomeIcon className="icon-service" icon={faNode} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">backend</h4>

              <p className="service-item-text">
Building powerful, secure, and high-performance backends with Node.js to support modern and scalable web applications.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <FontAwesomeIcon className="icon-service" icon={faReact} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">frontend</h4>

              <p className="service-item-text">
Transforming ideas into sleek, interactive, and responsive interfaces with React.js that deliver exceptional user experiences.              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <FontAwesomeIcon className="icon-service" icon={faDatabase} />
            </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">microservices</h4>

            <p className="service-item-text">
Engineering scalable and resilient microservices with Docker, Kafka, and modern cloud tools to handle complex, distributed systems with ease.            </p>
          </div>

        </li>

      </ul>

    </section>

      <div className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-container testimonials-list has-scrollbar">
          {testimonialsData.map((testimonial, index) => (
            <li
              key={index}
              className="testimonial-item testimonials-item"
              onClick={() => openModal(testimonial)}
            >
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src={testimonial.avatarSrc}
                    alt={testimonial.avatarAlt}
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  {testimonial.title}
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {modalActive && (
          <>
            <div className="modal-container active" data-modal-container>
              <div
                className="overlay active"
                data-overlay
                onClick={closeModal}
              ></div>
              <section className="testimonials-modal">
                <button
                  className="modal-close-btn"
                  data-modal-close-btn
                  onClick={closeModal}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>

                <div className="modal-img-wrapper">
                  <figure className="modal-avatar-box">
                    <img
                      src={currentTestimonial.avatarSrc}
                      alt={currentTestimonial.avatarAlt}
                      width="80"
                      data-modal-img
                    />
                  </figure>
                  <img src="src\assets\icon-quote.svg" alt="" />
                </div>
                <div className="modal-content">
                  <h4 className="h3 modal-title" data-modal-title>
                    {currentTestimonial.title}
                  </h4>
                  <time dateTime="2021-06-14">14 June, 2021</time>
                  <div data-modal-text>
                    <p>{currentTestimonial.text}</p>
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
      </div>

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src={image9} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={image10} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={image11} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={image12} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={image13} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={image14} alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About2