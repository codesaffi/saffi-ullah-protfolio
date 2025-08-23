import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import image16 from '../assets/Screenshot 2024-06-16 180610.png'
import image17 from '../assets/ABD72387-6C03-426E-BB37-9773357409B9.png'
import image18 from '../assets/Screenshot 2024-06-16 180654.png'
import image19 from '../assets/mobile.png'
import image20 from '../assets/desktop.png'
import image21 from '../assets/acms.png'
import image22 from '../assets/acms-login.png'
import image23 from '../assets/phar-1.png'
import image24 from '../assets/phar-2.png'
import image25 from '../assets/psychiatrist.png'
import image26 from '../assets/thestreetnest.png'

const Portfolio = () => {



  const [selectedValue, setSelectedValue] = useState("all");
  const [lastClickedBtn, setLastClickedBtn] = useState(null);
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  
    const data = [

      { 
        id: 1, 
        category: "web development", 
        img: image16,
        content: "Web Development",
        title: "Marketing Agency"
     },

      { 
        id: 2,
        category: "web application",
        img: image17, 
        content: "Web Application",
        title: "real estate"
     },

      { 
        id: 3, 
        category: "web development", 
        img: image18, 
        content: "Web Development" ,
        title: "real estate"
    },

      {
        id: 4, 
        category: "web application", 
        img: image19, 
        content: "web Application" ,
        title: "E-commerce"
    },

      {
         id: 5, 
        category: "web development", 
        img: image20, 
        content: "Web Development" ,
        title: "E-commerce"
    },

      { 
        id: 6, 
        category: "web application", 
        img: image21, 
        content: "Web Application" ,
        title: "ACMS"
    },

      { 
        id: 7, 
        category: "web design", 
        img: image22, 
        content: "Web Design" ,
        title: "ACMS-Login"
    },

      { 
        id: 8, 
        category: "web application", 
        img: image23, 
        content: "Web Application" ,
        title:  "Pharmacy-Management"
    },

      { 
        id: 9, 
        category: "web application", 
        img: image24, 
        content: "Web Application" ,
        title: "pharmacy-management"
     },


  { 
    id: 10, 
    category: "web application", 
    img: image26, 
    content: "Web Application",
    title: "Thestreetnest"
 },

       { 
        id: 11, 
        category: "web application", 
        img: image25, 
        content: "Web Application" ,
        title: "Psychiatrist Game"
     },

    ];
  
    const categories = ["all", "web design", "web development", "web application"];
  
    const handleSelectClick = () => {
      setIsSelectActive(!isSelectActive);
    };
  
    const handleSelectItemClick = (value) => {
      setSelectedValue(value.toLowerCase());
      setIsSelectActive(false);
      filterFunc(value.toLowerCase());
    };
  
    const handleFilterButtonClick = (value, btn) => {
      setSelectedValue(value.toLowerCase());
      filterFunc(value.toLowerCase());
      if (lastClickedBtn) {
        lastClickedBtn.classList.remove("active");
      }
      btn.classList.add("active");
      setLastClickedBtn(btn);
    };
  
    const filterFunc = (selectedValue) => {
      return data.filter((item) =>
        selectedValue === "all" ? true : item.category === selectedValue
      );
    };

    const handleImageClick = (imgSrc) => {
      setModalImg(imgSrc);
    };

    const closeModal = () => {
      setModalImg(null);
    };
  
    const filteredItems = filterFunc(selectedValue);
  

  return (
    <>


         <article className="portfolio" data-page="portfolio">

             <header>
              <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">



      <ul className="filter-btn-container filter-list">

        {categories.map((category, index) => (  
            <li className="filter-item"> 
                          <button
            key={index}
            className={`filter-btn ${selectedValue === category.toLowerCase() ? "active" : ""}`}
            onClick={(e) => handleFilterButtonClick(category, e.target)}
            data-filter-btn
          >
            {category}
          </button>
            </li>

        ))}
      </ul>
      
      <div className='filter-select-box select ' >
        <button className={`filter-select select ${isSelectActive ? "active" : ""}`} onClick={handleSelectClick} data-select>
        <div className="select-value" data-select-value>{selectedValue}</div>
        <div className="select-icon">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      </button>
        <ul className={`select-list select-items ${isSelectActive ? "active" : ""}`}>
          {categories.map((category, index) => (
            <li
              key={index}
              className="select-item"
              onClick={() => handleSelectItemClick(category)}
            >
                        <button data-select-item>{category}</button>
            </li>
          ))}
        </ul>
      </div>

      <ul className="filter-items project-list">
        {filteredItems.map((item) => (
          <li key={item.id} className="filter-item project-item active" data-filter-item data-category={item.category}>
            <a href="#" onClick={e => {e.preventDefault(); handleImageClick(item.img);}}>
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FontAwesomeIcon icon={faEye} />
                </div>
                <img 
                  src={item.img}
                  alt=""
                  width="40"
                  style={{cursor: 'pointer'}}
                />
              </figure>
              <h3 className="project-title">{item.title}</h3>
              <p className="project-category">{item.content}</p>
            </a>
          </li>
        ))}
      </ul>

      {modalImg && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999}} onClick={closeModal}>
          <img src={modalImg} alt="Full screen" style={{maxWidth: '90vw', maxHeight: '90vh', boxShadow: '0 0 24px #000', borderRadius: '8px'}} />
        </div>
      )}

      </section>

      </article>
          
    </>
  )
}

export default Portfolio


