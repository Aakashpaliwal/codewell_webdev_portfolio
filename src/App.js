import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Logo from "./components/Logos/Logo";
import Sponsor from "./components/Sponsor/Sponsor";
import Communities from "./components/Communities/Communities";
import Interested from "./components/Interested/Interested";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Logo />
      <Sponsor />
      <Communities />
      <Interested />
      <Footer />
    </div>
  );
}

export default App;
