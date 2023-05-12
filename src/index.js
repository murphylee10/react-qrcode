import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Test = () => {
  return (
    <div className="container">
      <div className="card">
          <div className="img-cont">
            <img src="./images/image-qr-code.png" alt="qr" />
          </div>
          <div className="header-cont">
            <h2>Improve your front-end skills by building projects</h2>
          </div>
          <div className="para-cont">
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Test />
);
