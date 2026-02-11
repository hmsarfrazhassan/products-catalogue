import { Routes, Route } from "react-router-dom";
import Categories from "./routes/Categories";
import profileImage from "./assets/images/profileimg.jpg";
function App() {
  return (
    <div className="pt-10">
      <img
        src={profileImage}
        alt="bags"
        className="border-2 border-amber-700 h-60 w-60 mx-auto rounded-full p-2"
      />
      <a
        href="https://www.instagram.com/bagoraofficialuae?igsh=Z3NhbGVneXZiNWV0"
        target="_blank"
        rel="noopener noreferrer"
        className="block underline text-center text-3xl font-semibold"
      >
        @bagoraofficialUAE
      </a>
      <Routes>
        <Route path="" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
