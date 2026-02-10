import accessories from "./assets/images/accessories.jpg";
import { Routes, Route } from "react-router-dom";
import Categories from "./routes/Categories";
import SubCategories from "./routes/SubCategories";

function App() {
  return (
    <Routes>
      {/* <Route path="" element={<Categories />} /> */}
      <Route path="" element={<SubCategories />} />
    </Routes>
  );
}

export default App;
