"use client";

import { motion } from "framer-motion";

export default function Services() {
    return (
        <section id="services" className="py-32 text-center">

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold"
            >
                Servicios
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-white/60"
            >
                Producción audiovisual, edición, branding y contenido digital
            </motion.p>

        </section>
    );
}