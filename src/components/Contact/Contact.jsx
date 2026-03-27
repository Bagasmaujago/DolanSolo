import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { SlideUp } from "../utility/animation";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // No backend in this template; we just confirm the action.
    setSubmitted(true);
    alert("Thanks for reaching out! We'll reply soon.");
  };

  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="container py-20 scroll-mt-24 lg:scroll-mt-32"
    >
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-center space-y-3"
      >
        <p className="text-3xl font-bold font-merriweather">Plan Your Visit</p>
        <p className="text-white/80 max-w-2xl mx-auto">
          Want a personalized route for Keraton, batik workshops, or garden
          sunsets? Send us your dates and interests.
        </p>
      </Motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <Motion.div
          variants={SlideUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8"
        >
          <p className="text-xl font-semibold">What you can ask</p>
          <ul className="mt-4 space-y-2 text-white/80 list-disc list-inside">
            <li>1-day / 2-day itinerary ideas</li>
            <li>Best times for photos</li>
            <li>Food suggestions near your stops</li>
            <li>Batik workshop recommendations</li>
          </ul>
          <div className="mt-7 space-y-2 text-white/80">
            <p>
              Email:{" "}
              <span className="text-white/90 font-semibold">
                hello@dolansolo.example
              </span>
            </p>
            <p>Response time: 1-2 days</p>
          </div>

          {submitted ? (
            <p className="mt-6 text-brand-blue font-bold">
              Message received. Thank you!
            </p>
          ) : null}
        </Motion.div>

        <Motion.form
          onSubmit={onSubmit}
          variants={SlideUp(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 space-y-4"
        >
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase text-white/70">
              Full name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 outline-none focus:border-white/40"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase text-white/70">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 outline-none focus:border-white/40"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase text-white/70">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Tell us which places you want to visit (and your dates)."
              rows={5}
              className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 outline-none focus:border-white/40 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-brand-blue hover:bg-[#0f4b8b] transition-colors uppercase font-bold tracking-wide py-3 text-white"
          >
            Send message
          </button>

          <p className="text-xs text-white/60">
            By sending, you agree we can contact you about your itinerary
            request.
          </p>
        </Motion.form>
      </div>

      <footer className="mt-16 text-center text-white/60 text-sm space-y-2">
        <p>© {currentYear} DolanSolo. Surakarta travel stories.</p>
        <p>
          Built with React + Tailwind styling. Update the copy anytime for your
          next trip.
        </p>
      </footer>
    </section>
  );
};

export default Contact;

