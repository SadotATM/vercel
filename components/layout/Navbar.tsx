"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            animate={{
                backgroundColor: scrolled
                    ? "rgba(0,0,0,0.6)"
                    : "rgba(0,0,0,0)",
                backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
            }}
            className="fixed top-0 z-50 w-full text-white"
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between p-6">
                <h1 className="font-bold text-xl">CreaCrew</h1>

                <div className="flex gap-6 text-sm">
                    <a href="#services">Servicios</a>
                    <a href="#portfolio">Portafolio</a>
                    <a href="#contact">Contacto</a>
                </div>
            </nav>
        </motion.header>
    );
}