import React from 'react';
import { Link } from 'react-router-dom';
import './blog.css';

const ArticleList = () => {
  const articles = [
    {
      id: 1,
      title: 'How to Make a Search Bar Using React',
      summary: 'Learn step-by-step how to create a search bar in React, complete with filtering and dynamic updates.',
      image: 'https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1481349518771-20055b2a7b24%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Drandom%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fHx8MTcxOTY4NzU0OHww%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60',
      link: '/article/search-bar-react'
    },
    // Add more articles here
  ];

  return (
    <div className="service-item1">
      {articles.map(article => (
        <div key={article.id} className="article-item ">
          <img src={article.image} alt={article.title} className="article-item-image" />
          <div className="article-item-content">
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <Link to={article.link} className="read-more-button">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
