import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/Sowchirukuri" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sri-lakshmi-sowmya-mallipudi-b86a43123/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Sri Lakshmi Sowmya Mallipudi</p>
      </div>
    </footer>
  );
}

export default Footer;
