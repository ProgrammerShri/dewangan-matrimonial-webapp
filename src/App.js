import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AccountPage from "./pages/AccountPage";
import ExplorePage from "./pages/ExplorePage";
import FavouritePage from "./pages/FavouritePage";
import HomePage from "./pages/HomePage";
import MatchesPage from "./pages/MatchesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
