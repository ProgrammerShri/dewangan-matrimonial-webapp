import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Message from "./components/messages/Message";
import Navbar from "./components/Navbar";
import AccountPage from "./pages/AccountPage";
import ExplorePage from "./pages/ExplorePage";
import FavouritePage from "./pages/FavouritePage";
import LoginPage from "./pages/LoginPage";
import MatchesPage from "./pages/MatchesPage";
import MessagesPage from "./pages/MessagesPage";
import {
  DashboardRoute,
  LoginRoute,
  MessagesRoute,
  SignUpRoute,
} from "./routes/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardRoute />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/messages" element={<MessagesRoute />} />
          <Route path="/messages/:id" element={<Message />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/signup" element={<SignUpRoute />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
