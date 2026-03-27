import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Hero from "./components/Hero/Hero";
import HeroImg from "./assets/hero.jpg";
import Eksplore from "./components/Eksplore/Eksplore";
import About from "./components/About/About";
import Journal from "./components/Journal/Journal";
import Contact from "./components/Contact/Contact";

const bgImage = {
  backgroundImage: `url(${HeroImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
};

function App() {
  return (
    // Kita pake bg-brand-dark, pastiin warna ini udah lo daftar-in di CSS v4 lo ya!
    <div className="bg-brand-dark text-white">
      {/* Pake tag <div>, bukan cuma < > */}
      <div style={bgImage} className="relative min-h-screen">
        <Navbar />
        <Hero />

        {/* Di v4, syntax-nya emang bg-linear-to-t */}
        {/* Kita arahin warnanya dari brand-dark ke transparent */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-brand-dark to-transparent"></div>
      </div>

      {/* Overflow dipindah ke sini biar sticky navbar nggak mati */}
      <div className="overflow-x-hidden">
        <Eksplore />
        <About />
        <Journal />
        <Contact />
      </div>
    </div>
  );
}

export default App;
