import { Routes, Route } from "react-router-dom";
import Categories from "./routes/Categories";
import profileImage from "./assets/images/profile-img.jpg";
import SubCategories from "./routes/SubCategories";
function App() {
  return (
    <div className="pt-10">
      <img
        src={profileImage}
        alt="bags"
        className="border-2 border-amber-700 h-40 w-40 mx-auto rounded-full p-2"
      />
      <div className="text-center text-3xl font-semibold">@stunningbags</div>
      <Routes>
        <Route path="" element={<Categories />} />
        <Route path="a" element={<SubCategories />} />
      </Routes>
    </div>
  );
}

export default App;
