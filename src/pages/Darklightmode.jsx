import React from 'react';
import './searchbar.css';
import vid1 from '../assets/Screen Recording 2024-07-08 210245.mp4'

const Darklightmode = () => {
  return (
<article className="article2">
  <header>
    <h2 className="h2 article-title">Dark Mode Toggle</h2>
  </header>
  <header className="article-header">
    <h1 className="article-title1">Building a Dark Mode Toggle in React Using Context</h1>
    <div className="article-meta">
      <span className="article-date">Published: July 8, 2024</span>
      <span className="article-author">By saffi ullah</span>
    </div>
  </header>
  <section className="article-content">
    <p>
      In this tutorial, we'll create a Dark Mode toggle button in React using Context that allows users to switch between light and dark themes. This approach is useful for managing the theme state globally across your application. We'll cover setting up the project, implementing the toggle functionality using React hooks and Context API, and styling the component for a better user experience.
    </p>


    <h2>Step-by-Step Guide</h2>

<h3>Step 1: Setting Up the Project</h3>
<p>Start by setting up a new React project or using an existing one. Make sure you have React and ReactDOM installed in your project.</p>

<h3>Step 2: Creating the Theme Context</h3>
<p>Create a new file `ThemeContext.js` and set up the Context for managing the theme state.</p>

<div className="service-item1 code-example">
  <pre>
    <code>
      {`
import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
`}
</code>
</pre>
</div>

<h3>Step 3: Applying Dark Mode Styles</h3>
<p>Add CSS styles for dark mode in a new file `DarkModeToggle.css` and import it into your project.</p>

<div className="service-item1 code-example">
  <pre>
    <code>
      {`
.toggle-button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
  
  .dark-mode .toggle-button {
    background-color: #fff;
    color: #121212;
  }
  
  .light-mode .toggle-button {
    background-color: #121212;
    color: #fff;
  }
}
`}
</code>
</pre>
</div>

<h3>Step 4: Implementing the Toggle Button</h3>
<p>Create a `DarkModeToggle.js` component that uses the context to toggle the theme.</p>

<div className="service-item1 code-example">
  <pre>
    <code>
      {`
import React, { useContext } from 'react';
import './DarkModeToggle.css';
import ThemeContext from './ThemeContext';

function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <>

<button onClick={() => setDarkMode(!darkMode)} className="toggle-button">
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>

 

    </>

  );
}

export default DarkModeToggle;
`}
</code>
</pre>
</div>

<h3>Step 5: creating the display of your screen</h3>
<p>you can create your display as you want for demo i will show my display with somme styling also</p>

<div className="service-item1 code-example">
  <pre>
    <code>
      {`
import React, { useContext } from 'react';
import './index.css';
import DarkModeToggle from './DarkModeToggle';
import ThemeContext from './ThemeContext';

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <header>
        <h1>About Us</h1>
        <DarkModeToggle />
      </header>
      <main>
        <section className="about">
          <h2>Who We Are</h2>
          <p>
            We are a dynamic agency providing top-notch services in web development, digital marketing, and more.
          </p>
        </section>
        <section className="team">
          <h2>Our Team</h2>
          <p>
            Our team consists of experienced professionals dedicated to delivering the best results for our clients.
          </p>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out to us via email or phone for any inquiries.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
`}
</code>
</pre>
</div>

<h3>Step 6: Applying Dark Mode Styles</h3>
<p>Add CSS styles for display screen in a  file `index.css` and import it into your project.</p>

<div className="service-item1 code-example">
  <pre>
    <code>
      {`
/* Default light theme styles
body {
  background-color: #f0f0f0;
  color: #333;
}

.App-header {
  background-color: #fff;
  color: #333;
  padding: 20px;
}

.content {
  background-color: #fff;
  color: #333;
  padding: 20px;
} */

/* Dark theme styles */
/* body.dark {
  background-color: #333;
  color: #fff;
}

.App-header.dark {
  background-color: #222;
  color: #fff;
}

.content.dark {
  background-color: #222;
  color: #fff;
} */











body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.app {
  text-align: center;
  padding: 20px;
}

.dark-mode {
  background-color: #121212;
  color: white;
}

.light-mode {
  background-color: white;
  color: black;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

main {
  padding: 20px;
}

section {
  margin-bottom: 20px;
}
`}
</code>
</pre>
</div>

<h3>Step 5: Using the Theme Provider in Your App</h3>
<p>Wrap your application with the `ThemeProvider` component.</p>

<div className="service-item1 code-example">
  <pre>
    <code>
      {`
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
`}
</code>
</pre>
</div>



<h2>Conclusion</h2>
<p>
  In this tutorial, we've built a dark mode toggle in React using Context API that allows users to switch between light and dark themes. We covered setting up the project, using `createContext` and `useContext` for state management, applying dark mode styles conditionally, and implementing the toggle functionality with a button click.
</p>

<p>
  Feel free to customize and enhance this component further, such as adding animations, storing the user's preference in local storage, or integrating it with your existing CSS framework.
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
<p>https://github.com/codesaffi/dark-light-mode</p>
  </section>
</article>
  )
}

export default Darklightmode