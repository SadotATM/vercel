"use client";

import { motion } from "framer-motion";

export default function Hero() {
    // Configuración de Cloudinary
    // TODO: Reemplaza 'tu_cloud_name' con tu ID real de Cloudinary
    const cloudName = "tu_cloud_name";
    const videoPublicId = "hero";

    // URL base con optimización automática de formato y calidad
    const videoBaseUrl = `https://res.cloudinary.com/dbkhp5oen/video/upload/f_auto,q_auto/hero_a64cvb`;

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">

            {/* VIDEO DE FONDO OPTIMIZADO */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                // El póster carga una imagen fija optimizada instantáneamente mientras el video arranca
                poster={`${videoBaseUrl}.jpg`}
                className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            >
                {/* Prioridad 1: WebM (Formato ultra-ligero para navegadores modernos) */}
                <source src={`${videoBaseUrl}.webm`} type="video/webm" />
                {/* Prioridad 2: MP4 (Formato de respaldo universal) */}
                <source src={`${videoBaseUrl}.mp4`} type="video/mp4" />
                Tu navegador no soporta videos de fondo.
            </video>

            {/* OVERLAY (oscurece el video para que el texto se lea bien) */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* CONTENIDO */}
            <div className="relative z-10 text-center space-y-6">

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold text-white"
                >
                    CreaCrew
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-2xl text-white/80"
                >
                    Producción audiovisual que impacta
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
                >
                    Ver proyectos
                </motion.button>

            </div>
        </section>
    );
}