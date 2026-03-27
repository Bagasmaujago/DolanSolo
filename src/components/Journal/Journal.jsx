import React from "react";
import { motion as Motion } from "framer-motion";
import { SlideUp } from "../utility/animation";

import Img1 from "../../assets/image1.jpg";
import Img2 from "../../assets/batik-kauman.jpg";
import Img3 from "../../assets/taman-balekambang.jpg";

const JournalData = [
  {
    id: 1,
    tag: "Guide",
    date: "Apr 2026",
    title: "A Walking Guide to Keraton Surakarta",
    excerpt:
      "How to enjoy palace heritage without rushing: where to start, what to notice, and how to capture the best moments.",
    image: Img1,
    delay: 0.1,
  },
  {
    id: 2,
    tag: "Culture",
    date: "Apr 2026",
    title: "Batik Kauman: Colors, Stories, Craft",
    excerpt:
      "From pattern meanings to dye processes, here’s a simple way to understand batik beyond the final artwork.",
    image: Img2,
    delay: 0.25,
  },
  {
    id: 3,
    tag: "Nature",
    date: "Apr 2026",
    title: "Taman Balekambang at Sunset",
    excerpt:
      "A calming evening route with photo ideas—golden hour, water reflections, and the vibe of Surakarta’s gardens.",
    image: Img3,
    delay: 0.4,
  },
];

const Journal = () => {
  return (
    <section id="journal" className="container py-20">
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-center space-y-3"
      >
        <p className="text-3xl font-bold font-merriweather">Journal</p>
        <p className="text-white/80 max-w-2xl mx-auto">
          Short reads for travelers who want more than a checklist. Grab a
          guide, learn a story, then explore at your own pace.
        </p>
      </Motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {JournalData.map((post) => (
          <Motion.article
            key={post.id}
            variants={SlideUp(post.delay)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden bg-white/5 border border-white/10"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <span className="uppercase font-bold">{post.tag}</span>
                <span aria-hidden="true">•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-2xl font-semibold font-merriweather">
                {post.title}
              </h3>
              <p className="text-white/80">{post.excerpt}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-brand-blue uppercase font-bold tracking-wide mt-2"
              >
                Request the full guide
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Motion.article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white/90 hover:text-white px-6 py-3 rounded-full uppercase font-bold"
        >
          Subscribe for new posts
        </a>
      </div>
    </section>
  );
};

export default Journal;

