import React, { useEffect, useMemo, useState } from "react";
import logo from "../../assets/logo.png";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: delay, ease: "easeOut" },
  },
});

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Susunan links: Explore ditaruh di tengah array
  const links = useMemo(
    () => [
      { label: "About", href: "#about", delay: 0.1 },
      { label: "Search", href: "#search", delay: 0.2 },
      {
        label: "Explore",
        href: "#explore",
        delay: 0.3,
        isLogoReplacement: true,
      },
      { label: "Journal", href: "#journal", delay: 0.4 },
      { label: "Contact", href: "#contact", delay: 0.5 },
    ],
    [],
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white/[0.03] backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6">
          {/* --- DESKTOP VERSION --- */}
          <div className="hidden lg:grid grid-cols-3 items-center py-6">
            <div className="flex justify-end gap-16 pr-12">
              {/* Hanya About & Search */}
              {links.slice(0, 2).map((link) => (
                <Motion.a
                  key={link.label}
                  variants={fadeUp(link.delay)}
                  initial="hidden"
                  animate="visible"
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-[0.3em] text-white/70 hover:text-white transition-all duration-300"
                >
                  {link.label}
                </Motion.a>
              ))}
            </div>

            {/* Logo Tengah (Tetap manggil #explore) */}
            <div className="flex justify-center">
              <Motion.a
                variants={fadeUp(0.3)}
                initial="hidden"
                animate="visible"
                href="#explore"
                className="relative group"
              >
                <div className="absolute -inset-2 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={logo}
                  alt="Logo"
                  className="w-12 relative z-10 hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </Motion.a>
            </div>

            <div className="flex justify-start gap-16 pl-12">
              {/* Hanya Journal & Contact */}
              {links.slice(3, 5).map((link) => (
                <Motion.a
                  key={link.label}
                  variants={fadeUp(link.delay)}
                  initial="hidden"
                  animate="visible"
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-[0.3em] text-white/70 hover:text-white transition-all duration-300"
                >
                  {link.label}
                </Motion.a>
              ))}
            </div>
          </div>

          {/* --- MOBILE TOP BAR --- */}
          <div className="lg:hidden flex items-center justify-between py-5">
            <a href="#explore">
              <img src={logo} alt="Logo" className="w-10" />
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white"
            >
              <span className="text-[10px] font-black uppercase tracking-widest">
                {open ? "Close" : "Menu"}
              </span>
              {open ? <FaXmark size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE DROPDOWN --- */}
        <AnimatePresence>
          {open && (
            <Motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              // Tambahin z-index super tinggi dan pointer-events-auto
              className="lg:hidden fixed top-[70px] left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 z-[999] overflow-hidden"
            >
              <div className="flex flex-col items-center gap-8 py-16">
                {links.map((link) => (
                  <Motion.a
                    key={link.label}
                    href={link.href}
                    // Logic sakti: Tutup menu DULU, baru biarin browser scroll ke ID-nya
                    onClick={() => setOpen(true)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: link.delay }}
                    // Tambahin cursor-pointer dan block biar area klik-nya luas
                    className="text-lg font-bold uppercase tracking-[0.4em] text-white/60 hover:text-white transition-all duration-300 cursor-pointer block w-full text-center"
                  >
                    {link.label}
                  </Motion.a>
                ))}
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="h-24 lg:h-32" />
    </>
  );
};

export default Navbar;
