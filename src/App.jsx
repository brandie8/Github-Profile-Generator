import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//! COMPONENTS
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

//! PAGES
import HomePage from "./Pages/HomePage.jsx";
import Profile from "./Pages/Profile.jsx";
import MyProfile from "./Pages/MyProfile.jsx";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/:username" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
