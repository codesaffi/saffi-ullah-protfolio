// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import About from './pages/About.jsx'
// import Portfolio from './pages/Portfolio.jsx'
// import Blog from './pages/Blog.jsx'
// import Contact from './pages/Contact.jsx'
// import Navbar from './pages/Navbar.jsx'
// import Resume from './pages/Resume.jsx'
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Sidebar from './pages/Sidebar.jsx'
// import SearchBar from './pages/SearchBar.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/saffi-ullah-portfolio/",
//     element: <App />,
//     children: [
//       {
//         path: "/saffi-ullah-portfolio/",
//         element: <> <Navbar /> <About /> </> ,
//       },
//       {
//         path: "/saffi-ullah-portfolio/Portfolio",
//         element:<> <Navbar /> <Portfolio /> </>,
//       },
//       {
//         path: "/saffi-ullah-portfolio/Blog",
//         element: <> <Navbar /> <Blog /> </> ,
//       },
//       {
//         path: "/saffi-ullah-portfolio/Contact",
//         element: <> <Navbar /> <Contact /> </> ,
//       },
//       {
//         path: "/saffi-ullah-portfolio/Resume",
//         element:  <> <Navbar /> <Resume /> </> ,
//       },
//       {
//         path: "/saffi-ullah-portfolio/article/search-bar-react",
//         element:  <> <Navbar /> <SearchBar /> </> ,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <main>
//    <Sidebar />
  
//    <div className="main-content">
//    <RouterProvider router={router} />
   
//    </div>
//    </main>
//   </React.StrictMode>,
// )



// import React from 'react';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
// import App from './App.jsx';
// import './index.css';
// import About from './pages/About.jsx';
// import Portfolio from './pages/Portfolio.jsx';
// import Blog from './pages/Blog.jsx';
// import Contact from './pages/Contact.jsx';
// import Navbar from './pages/Navbar.jsx';
// import Resume from './pages/Resume.jsx';
// import Sidebar from './pages/Sidebar.jsx';
// import SearchBar from './pages/SearchBar.jsx';

// const Root = () => (
//   <Router>
//     <main>
//       <Sidebar />
//       <div className="main-content">
//         <Routes> {/* Define routes using Routes component */}
//           <Route path="/saffi-ullah-portfolio/" element={<Navbar />} /> {/* Navbar appears on all pages */}
//           <Route path="/saffi-ullah-portfolio/" element={<About />} /> {/* Default page */}
//           <Route path="/saffi-ullah-portfolio/Portfolio" element={<Portfolio />} />
//           <Route path="/saffi-ullah-portfolio/Blog" element={<Blog />} />
//           <Route path="/saffi-ullah-portfolio/Contact" element={<Contact />} />
//           <Route path="/saffi-ullah-portfolio/Resume" element={<Resume />} />
//           <Route path="/saffi-ullah-portfolio/article/search-bar-react" element={<SearchBar />} />
//         </Routes>
//       </div>
//     </main>
//   </Router>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>
// );
// ``




import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './pages/Navbar.jsx';
import Resume from './pages/Resume.jsx';
import Sidebar from './pages/Sidebar.jsx';
import SearchBar from './pages/SearchBar.jsx';
import Loadmore from './pages/Loadmore.jsx';
import Darklightmode from './pages/Darklightmode.jsx';

const Root = () => (
  <Router>
    <main>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/saffi-ullah-protfolio/" element={<App />}>
            <Route index element={<><Navbar /><About /></>} />
            <Route path="/saffi-ullah-protfolio/Portfolio" element={<><Navbar /><Portfolio /></>} />
            <Route path="/saffi-ullah-protfolio/Blog" element={<><Navbar /><Blog /></>} />
            <Route path="/saffi-ullah-protfolio/Contact" element={<><Navbar /><Contact /></>} />
            <Route path="/saffi-ullah-protfolio/Resume" element={<><Navbar /><Resume /></>} />
            <Route path="/saffi-ullah-protfolio/article/search-bar-react" element={<><Navbar /> <SearchBar /></>} />
            <Route path="/saffi-ullah-protfolio/article/load-more-react" element={<><Navbar /> <Loadmore /></>} />
            <Route path="/saffi-ullah-protfolio/article/dark/light-mode" element={<><Navbar /> <Darklightmode /> </>} />
          </Route>
        </Routes>
      </div>
    </main>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
