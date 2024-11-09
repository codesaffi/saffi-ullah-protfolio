import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import image16 from '../assets/Screenshot 2024-06-16 180610.png'
import image17 from '../assets/ABD72387-6C03-426E-BB37-9773357409B9.png'
import image18 from '../assets/Screenshot 2024-06-16 180654.png'
import image19 from '../assets/mobile.png'
import image20 from '../assets/desktop.png'
import image21 from '../assets/433800436_18421977916015725_2399537827878237288_n.jpg'
import image22 from '../assets/430815918_773132618211775_2764906117747618135_n.jpg'
import image23 from '../assets/403531577_2331201500398158_5908179178304786142_n.jpg'
import image24 from '../assets/418771845_18406718254015725_8005164622772796732_n.jpg'
// import image25 from '../assets/streetnest.png'
import image25 from '../assets/thestreetnest.png'

const Portfolio = () => {




    const [selectedValue, setSelectedValue] = useState("all");
    const [lastClickedBtn, setLastClickedBtn] = useState(null);
    const [isSelectActive, setIsSelectActive] = useState(false);
  
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
        category: "web development",
        img: image17, 
        content: "Web Development",
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
        category: "application", 
        img: image19, 
        content: "Application" ,
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
        category: "web design", 
        img: image21, 
        content: "Web Design" ,
        title: "Starlink"
    },

      { 
        id: 7, 
        category: "web design", 
        img: image22, 
        content: "Web Design" ,
        title: "Atmosphera"
    },

      { 
        id: 8, 
        category: "web design", 
        img: image23, 
        content: "Web Design" ,
        title:  "Shoe shop"
    },

      { 
        id: 9, 
        category: "web design", 
        img: image24, 
        content: "Web Design",
        title: "Nuorbit"
     },

  //    { 
  //     id: 10, 
  //     category: "application", 
  //     img: image24, 
  //     content: "Application",
  //     title: "Thestreetnest"
  //  },

  { 
    id: 10, 
    category: "application", 
    img: image25, 
    content: "Application",
    title: "Thestreetnest"
 },

    ];
  
    const categories = ["all", "web design", "web development", "application"];
  
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

          <li key={item.id} className="filter-item project-item  active" data-filter-item data-category={item.category}>
            <a href="/">

            <figure className="project-img">

            <div className="project-item-icon-box">
          <FontAwesomeIcon icon={faEye} />
          </div>

            <img 
            src={item.img}
             alt="" 
             width="40"
             />
             </figure>
             <h3 className="project-title">{item.title}</h3>
             <p className="project-category">{item.content}</p>
            </a>
          </li>

        ))}
      </ul>

      </section>

      </article>
          
    </>
  )
}

export default Portfolio


