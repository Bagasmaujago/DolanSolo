import React from "react";
import { FaPlay } from "react-icons/fa6";
import { motion as Motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <section className="min-h-225 flex justify-center items-center ">
        {/* {Radial gradient section} */}
        <div
          className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10"
          style={{
            background:
              "radial-gradient(circle,rgba(0,0,0,0.3)50% ,rgba(11,11,13,0.5)70%, rgba(11,11,13,0.8) 90%)",
          }}
        ></div>
        {/* {Hero text Section} */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{duration:1.5, delay: 0.5}}
          className="container relative z-20 text-center space-y-8"
        >
          <h1 className="text-5xl font-bold font-merriweather">
            The Great City
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Welcome to Surakarta (Solo) — a city where royal heritage, batik craft,
            and everyday culture come together in every street.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#explore"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white/60 px-5 py-3 rounded-full uppercase font-bold text-sm md:text-base"
            >
              Explore the City
            </a>
            <a
              href="#explore"
              className="inline-flex justify-center items-center border-2 border-white/30 h-14 w-14 rounded-full hover:border-white/60 transition-colors"
              aria-label="Scroll to Explore section"
            >
              <FaPlay />
            </a>
          </div>
        </Motion.div>
      </section>
    </>
  );
};

export default Hero;
