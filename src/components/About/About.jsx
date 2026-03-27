import React from "react";
import { motion as Motion } from "framer-motion";
import { SlideUp } from "../utility/animation";

import ImgKeraton from "../../assets/image1.jpg";
import ImgBatik from "../../assets/batik-kauman.jpg";
import ImgGarden from "../../assets/taman-balekambang.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="container py-20 scroll-mt-24 lg:scroll-mt-32"
    >
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <p className="text-3xl font-bold font-merriweather">About Surakarta</p>
        <p className="text-white/80 max-w-2xl mx-auto">
          Surakarta (Solo) is a city where tradition feels close: royal
          architecture, living batik neighborhoods, and gardens that make you
          slow down.
        </p>
      </Motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Motion.div
          variants={SlideUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
        >
          <img
            src={ImgKeraton}
            alt="Keraton Surakarta"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 space-y-2">
            <p className="text-lg font-semibold uppercase">Heritage</p>
            <p className="text-white/80">
              Visit Keraton Surakarta to understand the rhythms of palace life
              and cultural ceremonies.
            </p>
          </div>
        </Motion.div>

        <Motion.div
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
        >
          <img
            src={ImgBatik}
            alt="Batik Kauman"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 space-y-2">
            <p className="text-lg font-semibold uppercase">Batik Craft</p>
            <p className="text-white/80">
              Explore Kampung Batik Kauman and learn how colors, patterns, and
              stories are passed down.
            </p>
          </div>
        </Motion.div>

        <Motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
        >
          <img
            src={ImgGarden}
            alt="Taman Balekambang"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 space-y-2">
            <p className="text-lg font-semibold uppercase">Gardens</p>
            <p className="text-white/80">
              Take a peaceful walk at Taman Balekambang and enjoy the atmosphere
              around the water.
            </p>
          </div>
        </Motion.div>
      </div>

      <div className="mt-12 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-10">
        <p className="text-xl font-semibold">A simple 1-day itinerary</p>
        <ol className="mt-4 list-decimal list-inside text-white/80 space-y-2">
          <li>Morning: start with Keraton Surakarta and nearby streets.</li>
          <li>Afternoon: visit Batik Kauman and pick a signature pattern.</li>
          <li>Evening: end at Taman Balekambang for a relaxed sunset walk.</li>
        </ol>
      </div>
    </section>
  );
};

export default About;

