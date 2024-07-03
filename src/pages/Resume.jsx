import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen} from '@fortawesome/free-solid-svg-icons'


const Resume = () => {
  return (
    <>
    <article className="resume">
    <header>
      <h2 className="h2 article-title">Resume</h2>
    </header>

    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
        <FontAwesomeIcon icon={faBookOpen} />
        </div>

        <h3 className="h3">Education</h3>
      </div>

      <ol className="timeline-list">

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">LINC School System</h4>

          <span>2019 — 2021</span>

          <p className="timeline-text">
            Have a matriculation degree in computer science from LINC School System.
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">F.G DEGREE college</h4>

          <span>2021 — 2023</span>

          <p className="timeline-text">
          Have a intermediate degree in computer science from F.G DEGREE college.
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">EBIZCO School of programming</h4>

          <span>2023 — 2024</span>

          <p className="timeline-text">
          Have a master certificate in front-end development from EBIZCO School of programming.
          </p>

        </li>

      </ol>

    </section>

    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
        <FontAwesomeIcon icon={faBookOpen} />
        </div>

        <h3 className="h3">Experience</h3>
      </div>

      <ol className="timeline-list">

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Junior Developer</h4>

          <span>2023 — 2024</span>

          <p className="timeline-text">
            Had worked in EBIZCO agency from where i trained as a front end developer i have worked with them for more than 4 months where i worked as a junior developer and gained practical knowledge needed to become job ready.
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Freelancer</h4>

          <span>2024 — present</span>

          <p className="timeline-text">
            After working in a company i had the experience to work directly with clients as a freelancer i have worked with many local as well as international clients and build some awesome projects.
          </p>

        </li>

      </ol>

    </section>

    <section className="skill">

<h3 className="h3 skills-title">My Projects</h3>

<ul className="skills-list-3 content-card">

<ul>

  <li className="skills-item">
  
    <p  className="timeline-text">chat bot with given knowledge
    </p>

  </li>

  <li className="skills-item">

    <p className="timeline-text">dark/light mode</p>

  </li>

  <li className="skills-item">

  <p className="timeline-text">functional search bar</p>

  </li>

  <li className="skills-item">

    <p className="timeline-text">functional load more</p>

  </li>

  <li className="skills-item">

<p className="timeline-text">functional slider</p>

</li>

<li className="skills-item">

<p className="timeline-text">working contact form</p>

</li>

</ul>

<ul>

<li className="skills-item">

  <p className="timeline-text">Portfolio website</p>

</li>

<li className="skills-item">

  <p className="timeline-text">Marketing agency website</p>

</li>

<li className="skills-item">

<p className="timeline-text">Real Estate Website</p>

</li>

<li className="skills-item">

  <p className="timeline-text">e-commerce website</p>

</li>

<li className="skills-item">

<p className="timeline-text">travel agency website</p>

</li>

<li className="skills-item">

<p className="timeline-text">restaurant website</p>

</li>

</ul>

</ul>





</section>

    <section className="skill">

<h3 className="h3 skills-title">My skills</h3>

<ul className="skills-list-2 content-card">

  <ul>

  <li className="skills-item">
  
    <p className="timeline-text">HTML5 and CSS3</p>

  </li>

  <li className="skills-item">

    <p className="timeline-text"> JavaScript</p>

  </li>

  <li className="skills-item">

  <p className="timeline-text"> React.js</p>

  </li>

  <li className="skills-item">

    <p className="timeline-text">Tailwind CSS</p>

  </li>

  <li className="skills-item">

<p className="timeline-text">jQuery, GSAP and d3js</p>

</li>

<li className="skills-item">

<p className="timeline-text">AJAX</p>

</li>

</ul>

<ul>

  <li className="skills-item">
  
    <p  className="timeline-text">Responsive Design
    </p>

  </li>

  <li className="skills-item">

    <p className="timeline-text">Cross Browser Compatibility</p>

  </li>

  <li className="skills-item">

  <p className="timeline-text">Accessibility Standards</p>

  </li>

  <li className="skills-item">

    <p className="timeline-text">Mobile-first Development</p>

  </li>

  <li className="skills-item">

<p className="timeline-text">Git/Github</p>

</li>

<li className="skills-item">

<p className="timeline-text">User Interface Design</p>

</li>

</ul>

<ul>

  <li className="skills-item">
  
    <p className="timeline-text">communication skills</p>

  </li>

  <li className="skills-item">

    <p className="timeline-text">time management</p>

  </li>

  <li className="skills-item">

  <p className="timeline-text">problem solving</p>

  </li>

  <li className="skills-item">

    <p className="timeline-text">team work</p>

  </li>

  <li className="skills-item">

<p className="timeline-text">critical thinking</p>

</li>

<li className="skills-item">

<p className="timeline-text">decision making</p>

</li>

</ul>

</ul>





</section>

    <section className="skill">

      <h3 className="h3 skills-title">My skills</h3>

      <ul className="skills-list content-card">

        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">Web design</h5>
            <data value="80">80%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill w80" ></div>
          </div>

        </li>

        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">Web development</h5>
            <data value="100">100%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill w100"></div>
          </div>

        </li>

        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">Branding</h5>
            <data value="90">90%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill w90"></div>
          </div>

        </li>

        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">styling</h5>
            <data value="50">50%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill w50" ></div>
          </div>

        </li>

      </ul>

    </section>





    </article>
    </>
  )
}

export default Resume