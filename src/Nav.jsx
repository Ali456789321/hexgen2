import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#">Learners</a>
          <ul className="dropdown">
            <li><a href="#">Exams & Certificates</a></li>
            <li><a href="#">Practice / Sample Exam</a></li>
            <li><a href="#">Find a Trainer</a></li>
            <li><a href="#">Courses & Events</a></li>
            <li><a href="#">Learning Resources</a></li>
            <li><a href="#">Digital Badges</a></li>
            <li><a href="#">DPro+ Community</a></li>
            <li><a href="#">Recommended Books</a></li>
            <li><a href="#">Candidates Login</a></li>
          </ul>
        </li>
        <li><a href="#">NGOs & Training Partners</a>
        <ul className="dropdown">
            <li><a href="#">Exams & Certificates</a></li>
            <li><a href="#">Practice / Sample Exam</a></li>
            <li><a href="#">Find a Trainer</a></li>
            <li><a href="#">Courses & Events</a></li>
            <li><a href="#">Learning Resources</a></li>
            <li><a href="#">Digital Badges</a></li>
            <li><a href="#">DPro+ Community</a></li>
            <li><a href="#">Recommended Books</a></li>
            <li><a href="#">Candidates Login</a></li>
          </ul>
        </li>
        <li><a href="#">Blog & Videos</a>
        <ul className="dropdown">
            <li><a href="#">Exams & Certificates</a></li>
            <li><a href="#">Practice / Sample Exam</a></li>
            <li><a href="#">Find a Trainer</a></li>
            <li><a href="#">Courses & Events</a></li>
            <li><a href="#">Learning Resources</a></li>
            <li><a href="#">Digital Badges</a></li>
            <li><a href="#">DPro+ Community</a></li>
            <li><a href="#">Recommended Books</a></li>
            <li><a href="#">Candidates Login</a></li>
          </ul>
        </li>
        <li><a href="#">Get Involved</a>
        <ul className="dropdown">
            <li><a href="#">Exams & Certificates</a></li>
            <li><a href="#">Practice / Sample Exam</a></li>
            <li><a href="#">Find a Trainer</a></li>
            <li><a href="#c">Courses & Events</a></li>
            <li><a href="#">Learning Resources</a></li>
            <li><a href="#">Digital Badges</a></li>
            <li><a href="#">DPro+ Community</a></li>
            <li><a href="#">Recommended Books</a></li>
            <li><a href="#">Candidates Login</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
