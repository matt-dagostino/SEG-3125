import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Assistant from './Pages/Assistant';
import AddRecipe from './Pages/AddRecipe';
import Recipe from './Pages/Recipe';
import Recipes from './Pages/Recipes';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#F9F6EF" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipe/:recipeName" element={<Recipe />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
