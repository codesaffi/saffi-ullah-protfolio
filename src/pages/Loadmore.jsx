import React from 'react';
import './searchbar.css';
import vid1 from '../assets/Screen Recording 2024-07-04 192336.mp4'

const Loadmore = () => {
  return (
<article className="article2">
  <header>
    <h2 className="h2 article-title">Load More</h2>
  </header>
  <header className="article-header">
    <h1 className="article-title1">Building a Load More Component in React</h1>
    <div className="article-meta">
      <span className="article-date">Published: July 2, 2024</span>
      <span className="article-author">By saffi ullah</span>
    </div>
  </header>
  <section className="article-content">
    <p>
      In this tutorial, we'll create a "Load More" component in React that allows users to load additional items dynamically as they scroll or click a button.
      This component will include state management with `useState`, rendering items conditionally based on current state, and updating the view with new data.
      We'll cover setting up the project, implementing the "Load More" functionality using React hooks, and styling the component for a better user experience.
    </p>

    <h2>Step-by-Step Guide</h2>

    <h3>Step 1: Setting Up the Project</h3>
    <p>Start by setting up a new React project or using an existing one. Make sure you have React and ReactDOM installed in your project.</p>

    <h3>Step 2: Initializing State with `useState`</h3>
    <p>Create a state variable `visibleItems` to control how many items are initially visible. Set up an array `initialData` containing sample data that will be rendered.</p>

    <h3>Step 3: Rendering Initial Items</h3>
    <p>Render the initial set of items from `initialData`. Use the `map()` method to iterate over the data array and display each item in a list.</p>

    <h3>Step 4: Implementing the Load More Functionality</h3>
    <p>Create a `loadMoreItems` function that updates the `visibleItems` state when the "Load More" button is clicked. Increase the number of visible items to load more data dynamically.</p>

    <div className="service-item1 code-example">
      <pre>
        <code>
          {`
import React, { useState } from 'react';
import './index.css';

function App() {
  const [visibleItems, setVisibleItems] = useState(4); // Number of initially visible items
  
const initialData = [
  { id: 1, name: 'Apple', description: 'A sweet red fruit', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Banana', description: 'A long yellow fruit', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Orange', description: 'A round orange fruit', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Pineapple', description: 'A tropical fruit with spiky skin', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Strawberry', description: 'A small red fruit with seeds on the outside', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Orange', description: 'A round orange fruit', image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Pineapple', description: 'A tropical fruit with spiky skin', image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Strawberry', description: 'A small red fruit with seeds on the outside', image: 'https://via.placeholder.com/150' },
];

  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4); // Increase visible items by 4
  };

  return (
<div className="app-container">
      <div className="item-list">
        {initialData.slice(0, visibleItems).map(item => (
          <div key={item.id} className="result-item">
          <img src={item.image} alt={item.name} />
          <div className="result-info">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </div>
        ))}
      </div>
      {visibleItems < initialData.length && (
        <button className="load-more-btn" onClick={loadMoreItems}>Load More</button>
      )}
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
      In this tutorial, we've built a "Load More" component in React that allows users to dynamically load additional items from a list. We covered setting up the project, using `useState` for state management, rendering items conditionally based on state, and implementing the "Load More" functionality with a button click.
    </p>

    <p>
      Feel free to customize and enhance this component further, such as adding loading indicators, pagination, or integrating with APIs to fetch more data as needed.
    </p>
    <br />
    <p>Below is a video demo of the output:</p>

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

    <h3>Visit the GitHub repository for more information:</h3>
    <p>https://github.com/codesaffi/load-more</p>
  </section>
</article>

  )
}

export default Loadmore