import "./App.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Booking from "./components/Booking";
import About from "./components/About";
import Habitaciones from "./components/Habitaciones";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Booking />
      <About />
      <Habitaciones />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
