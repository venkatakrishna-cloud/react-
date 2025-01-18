
// import React from 'react';
// import './App.css';

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Welcome to My Personalized React App!</h1>
//                 <p>Deployed with GitHub and Vercel 🚀</p>
//             </header>
//         </div>
//     );
// }

// export default App;


// App.js

import React from 'react';
import './App.css';

const logos = [
  { src: 'logo1.png', alt: 'Logo 1', name: 'Partner 1' },
  { src: 'logo2.png', alt: 'Logo 2', name: 'Partner 2' },
  { src: 'logo3.png', alt: 'Logo 3', name: 'Partner 3' },
];

function App() {
  const handleLogoClick = (name) => {
    alert(`You clicked on: ${name}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="logo"
              onClick={() => handleLogoClick(logo.name)}
            />
          ))}
        </div>
        <h1>Welcome to the Sample Web Page for the react project</h1>
      </header>

      <main>
        <section className="intro">
          <p>This page demonstrates how to use React, CSS, and JavaScript to create a webpage featuring multiple logos.</p>
        </section>

        <section className="logos-description">
          <h2>Our Partners</h2>
          <div className="logo-description-container">
            {logos.map((logo, index) => (
              <div key={index} className="logo-card">
                <img src={logo.src} alt={logo.alt} />
                <p>{logo.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Sample Web Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

