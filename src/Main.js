import { BrowserRouter, Routes, Route } from "react-router-dom";

// ===========================
//  Components
// ===========================
import AppTitle from "./components/AppTitle";

// ===========================
//  Pages
// ===========================
import WelcomeScreen from "./pages/WelcomeScreen";
import Categories from "./pages/Categories";
import Questions from "./pages/Questions";
import Score from "./pages/Score";

const Main = () => {
  return (
    <div className="mx-5 flex items-center justify-center h-screen relative">
      <BrowserRouter>
        <AppTitle />
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="categories" element={<Categories />} />
          <Route path="questions" element={<Questions />} />
          <Route path="score" element={<Score />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
