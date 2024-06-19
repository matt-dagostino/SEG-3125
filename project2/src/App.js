import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Assistant from './Pages/Assistant';


function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#F9F6EF" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assistant" element={<Assistant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
