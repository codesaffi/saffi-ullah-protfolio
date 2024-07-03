import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile, faCalendarDays,  faLocationDot, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import image15 from '../assets/my-avatar.png'

const Sidebar = () => {

  

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ Toggle isActive state on click
    setIsActive(!isActive);
  };

  return (
    <aside className={isActive ? 'active sidebar' : 'sidebar'} data-sidebar onClick={handleClick}>

    <div className="sidebar-info">

      <figure className="avatar-box">
        <img className='pp' src={image15} alt="Saffi Ullah" width="80"/>
      </figure>

      <div className="info-content">
        <h1 className="name" title="Richard hanrick">Saffi Ullah</h1>

        <p className="title">Web developer</p>
      </div>

      <button className="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>

        <FontAwesomeIcon icon={faChevronDown} />
      </button>

    </div>

    <div className="sidebar-info_more">

      <div className="separator"></div>

      <ul className="contacts-list">

        <li className="contact-item">

          <div className="icon-box">
          <FontAwesomeIcon icon={faEnvelope} />
          </div>

          <div className="contact-info">
            <p className="contact-title">Email</p>

            <a href="mailto:saffi8946@gmail.com" className="contact-link">saffi8946@gmail.com</a>
          </div>

        </li>

        <li className="contact-item">

          <div className="icon-box">
          <FontAwesomeIcon icon={faMobile} />
          </div>

          <div className="contact-info">
            <p className="contact-title">Phone</p>

            <a href="tel:+92-308-8305329" className="contact-link">+92-308-8305329</a>
          </div>

        </li>

        <li className="contact-item">

          <div className="icon-box">
          <FontAwesomeIcon icon={faCalendarDays} />
          </div>

          <div className="contact-info">
            <p className="contact-title">Birthday</p>

            <time dateTime="2005-02-08">Feburary 08,2005</time>
          </div>

        </li>

        <li className="contact-item">

          <div className="icon-box">
          <FontAwesomeIcon icon={faLocationDot} />
          </div>

          <div className="contact-info">
            <p className="contact-title">Location</p>

            <address>Lalamusa, Punjab, Pakistan</address>
          </div>

        </li>

      </ul>

      <div className="separator"></div>

      <ul className="social-list">

        <li className="social-item">
          <a href="#" className="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li className="social-item">
          <a href="#" className="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>

        <li className="social-item">
          <a href="#" className="social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>

      </ul>

    </div>

  </aside>

  )
}

export default Sidebar