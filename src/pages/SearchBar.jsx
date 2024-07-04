import React from 'react';
import './searchbar.css';
import vid1 from '../assets/Screen Recording 2024-07-03 175612.mp4'


const SearchBar = () => {
  return (
    <>

    <article className="article2">
    <header>
      <h2 className="h2 article-title">Search bar</h2>
    </header>
      <header className="article-header">
        <h1 className="article-title1">Building a Search Filter Component in React</h1>
        <div className="article-meta">
          <span className="article-date">Published: July 2, 2024</span>
          <span className="article-author">By saffi ullah</span>
        </div>
      </header>
      <section className="article-content">
        <p>
          In this tutorial, we'll create a search filter component in React that allows users to search through a list
          of data dynamically. This component will include a search input field and display filtered results based on
          user input. We'll cover setting up the project, handling state with `useState`, filtering data using JavaScript
          `filter()` method, and rendering the results using JSX.
        </p>

        <h2>Step-by-Step Guide</h2>

        <h3>Step 1: Setting Up the Project</h3>
        <p>Start by importing necessary libraries and setting up the React environment. Create a new React component named `App` where we'll implement our search filter functionality.</p>
        
        <h3>Step 2: State Management with `useState`</h3>
        <p>Create state variable `query` to store the search query. Implement `handleInputChange` function to update `query` state based on user input in the search bar.</p>
        
        <h3>Step 3: Defining Sample Data</h3>
        <p>Define sample data `data` array with objects containing `id`, `name`, `description`, and `image` properties.</p>
        
        <h3>Step 4: Filtering Data Based on Query</h3>
        <p>Use JavaScript `filter()` method to create `filteredData` array based on `query` state.</p>
        
        <h3>Step 5: Rendering the Search Filter Component</h3>
        <p>Render the search bar, display filtered results with images, names, and descriptions dynamically using JSX.</p>

        <div className="service-item1 code-example">
          <pre>
            <code>
              {`
import React, { useState } from 'react';
import './index.css';

function App() {
  const [query, setQuery] = useState('');
  
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  
  const data = [
    { id: 1, name: 'Apple', description: 'A sweet red fruit', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Banana', description: 'A long yellow fruit', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Orange', description: 'A round orange fruit', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Pineapple', description: 'A tropical fruit with spiky skin', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Strawberry', description: 'A small red fruit with seeds on the outside', image: 'https://via.placeholder.com/150' },
  ];

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className="results-list">
        {filteredData.map((result) => (
          <div key={result.id} className="result-item">
            <img src={result.image} alt={result.name} />
            <div className="result-info">
              <h3>{result.name}</h3>
              <p>{result.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
              `}
            </code>
          </pre>
        </div>

        <h2>Conclusion</h2>
        <p>
          In this tutorial, we've built a search filter component in React that allows users to dynamically filter through a list of data based on their input. We covered setting up the project, handling state with `useState`, filtering data using JavaScript `filter()` method, and rendering the results using JSX.
        </p>

        <p>
          Feel free to customize and expand upon this example to fit your project's requirements. You can enhance the component with additional features like pagination, sorting, or integrating with APIs to fetch real-time data.
        </p>
        <br />
        <p>below is a video demo of the output</p>

      <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <video
        width="100%"
        height="auto"
        controls autoPlay muted
        style={{ display: 'block', margin: '0 auto' }}
      >
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

      <h3>Visit the github repository for more infromation</h3>
     <p>https://codesaffi.github.io/search-bar/</p>
      </section>
    </article>

    </>
  )
}

export default SearchBar