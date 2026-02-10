import accessories from "./assets/images/accessories.jpg";
import { Routes, Route, Link } from "react-router-dom";
import Categories from "./routes/Categories";
import SubCategories from "./routes/SubCategories";

function App() {
  return (
    <div>
      <header>
        <Link to="/accessories">Accessories</Link>
      </header>
      <Routes>
        <Route path="" element={<Categories />} />
        <Route path="accessories" element={<SubCategories />} />
      </Routes>
    </div>
  );
}

export default App;
