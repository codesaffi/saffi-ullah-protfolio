import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Portfolio from './pages/Portfolio.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './pages/Navbar.jsx';
import Resume from './pages/Resume.jsx';
import Sidebar from './pages/Sidebar.jsx';
import SearchBar from './pages/SearchBar.jsx';
import Loadmore from './pages/Loadmore.jsx';
import Darklightmode from './pages/Darklightmode.jsx';
import Todolist from './pages/Todolist.jsx';
import About2 from './pages/About2.jsx';

const Root = () => (
  <Router>
    <main>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/saffi-ullah-protfolio/" element={<App />}>
            <Route index element={<><Navbar /><About2 /></>} />
            <Route path="/saffi-ullah-protfolio/Portfolio" element={<><Navbar /><Portfolio /></>} />
            <Route path="/saffi-ullah-protfolio/Blog" element={<><Navbar /><Blog /></>} />
            <Route path="/saffi-ullah-protfolio/Contact" element={<><Navbar /><Contact /></>} />
            <Route path="/saffi-ullah-protfolio/Resume" element={<><Navbar /><Resume /></>} />
            <Route path="/saffi-ullah-protfolio/article/search-bar-react" element={<><Navbar /> <SearchBar /></>} />
            <Route path="/saffi-ullah-protfolio/article/load-more-react" element={<><Navbar /> <Loadmore /></>} />
            <Route path="/saffi-ullah-protfolio/article/dark/light-mode" element={<><Navbar /> <Darklightmode /> </>} />
            <Route path="/saffi-ullah-protfolio/article/to-do-list" element={<><Navbar /> <Todolist /> </>} />
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
