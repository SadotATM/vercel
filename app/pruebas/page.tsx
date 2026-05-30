"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function AnimatedCard() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6">
            {/* CONTENIDO PRINCIPAL */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center text-center gap-6"
            >
                <motion.h1
                    variants={item}
                    className="text-5xl md:text-7xl font-bold"
                >
                    CreaCrew
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                >
                    Producción audiovisual profesional para marcas,
                    emprendimientos y empresas que quieren destacar.
                </motion.p>

                <motion.p
                    variants={item}
                    className="max-w-xl text-muted-foreground"
                >
                    Videos corporativos, contenido para redes sociales,
                    fotografía profesional y cobertura de eventos.
                </motion.p>

                <motion.div variants={item}>
                    <Button size="lg">
                        Solicitar Cotización
                    </Button>
                </motion.div>
            </motion.div>

            {/* LOGOS */}
            <div className="flex gap-12 mt-16 items-center justify-center">
                <motion.div
                    initial={{ x: -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 1.6,
                        duration: 1,
                    }}
                >
                    <Image
                        src="/Cocacola.png"
                        alt="Logo Coca Cola"
                        width={150}
                        height={150}
                    />
                </motion.div>

                <motion.div
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 1.6,
                        duration: 1,
                    }}
                >
                    <Image
                        src="/next.svg"
                        alt="Logo Next.js"
                        width={150}
                        height={150}
                    />
                </motion.div>
            </div>
        </div>
    );
}