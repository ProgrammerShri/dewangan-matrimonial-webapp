import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProfilesCard from "./components/profile/ProfilesCard";

function App() {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <Navbar />
        <ProfilesCard />
        {/* <ProfileDetails /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
