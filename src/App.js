import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.js';
import JokePage from './pages/JokePage.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            < Route path="/" element={<Home />} />
            < Route path="/joke" element={<JokePage />} />
          </Routes>

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
