import React, { useMemo, useState } from "react";
import Img1 from "../../assets/image1.jpg";
import Img2 from "../../assets/batik-kauman.jpg";
import Img3 from "../../assets/taman-balekambang.jpg";
import Logo from "../../assets/logo.png";
import { motion as Motion } from "framer-motion";
import { SlideUp } from "../utility/animation";

const EksploreData = [
  {
    id: 1,
    title: "Taman Balekambang",
    place: "Surakarta",
    url: "#",
    image: Img3,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Batik Kauman",
    place: "Surakarta",
    url: "#",
    image: Img2,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Keraton Surakarta",
    place: "Surakarta",
    url: "#",
    image: Img1,
    delay: 0.6,
  },
];
const Eksplore = () => {
  const [query, setQuery] = useState("");

  const filteredData = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return EksploreData;
    return EksploreData.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.place.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <>
      <section className="container" id="explore">
        {/* header section */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-center md:max-w-162.5 mx-auto space-y-4"
        >
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              alt="DolanSolo logo"
              className="w-20 md:w-24"
            />
          </div>
          <p className="text-3xl font-bold font-merriweather">Explore</p>
          <p className="text-white/80">
            Discover Surakarta through its most memorable places: royal architecture,
            living batik neighborhoods, and peaceful gardens. Start with one landmark,
            then follow the small alleys to find stories you can feel.
          </p>
        </Motion.div>

        {/* Search section */}
        <div id="search" className="mt-10">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <p className="text-lg font-semibold">Search places</p>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try: batik, keraton, or garden"
              className="flex-1 rounded-xl bg-white/5 border border-white/15 px-4 py-3 outline-none focus:border-white/40"
            />
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded-xl border border-white/20 px-4 py-3 text-white/90 hover:text-white hover:border-white/40 uppercase font-bold text-xs md:text-sm"
            >
              Clear
            </button>
          </div>
        </div>

        {/* card section  */}
        <div className=" mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center font-montserrat ">
          {filteredData.map((data) => (
            <Motion.div
              variants={SlideUp(data.delay)}
              initial="hidden"
              animate="visible"
              key={data.id}
              className="relative"
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-95 h-137 object-cover"
              />
              <div className="absolute w-full bottom-0 inset-0 bg-brand-dark/15">
                <div className="h-full space-y-1 py-6 flex flex-col justify-end items-center">
                  <h3 className="text-2xl font-semibold">{data.title}</h3>
                  <p className="uppercase">{data.place}</p>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        {query.trim() && filteredData.length === 0 ? (
          <p className="mt-8 text-center text-white/70">
            No places match “{query.trim()}”. Try another keyword.
          </p>
        ) : null}

        {/* quick value section */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-lg font-semibold">Culture first</p>
            <p className="text-white/80 mt-2">
              Visit the Keraton area and batik workshops to see how tradition shapes daily life.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-lg font-semibold">Walkable moments</p>
            <p className="text-white/80 mt-2">
              Pair gardens with street food so you never run out of things to explore.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-lg font-semibold">Best for photos</p>
            <p className="text-white/80 mt-2">
              Look for patterned facades, colorful textiles, and golden-hour landscapes.
            </p>
          </div>
        </div>

        {/* Button section  */}
        <a
          href="#about"
          className="block mx-auto mt-10 text-brand-blue uppercase font-bold tracking-wide"
        >
          Learn more about Surakarta
        </a>
      </section>
    </>
  );
};

export default Eksplore;
