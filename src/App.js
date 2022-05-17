import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Message from "./components/messages/Message";
import ExplorePage from "./pages/ExplorePage";
import FavouritePage from "./pages/FavouritePage";
import MatchesPage from "./pages/MatchesPage";
import {
  AccountRoute,
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
          <Route path="/account" element={<AccountRoute />} />
          <Route path="/messages" element={<MessagesRoute />} />
          <Route path="/messages/:id" element={<Message />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/signup" element={<SignUpRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
