"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShowerHead } from "lucide-react";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};


const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}


export default function AnimatedCard() {
    return (
        <motion.div
            className="h-screen flex flex-col items-center justify-center gap-4"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <motion.h1 variants={item}>Hola</motion.h1>

            <motion.p variants={item}>
                Somos ASD
            </motion.p>

            <motion.div variants={item}>
                <Button>Ver servicios</Button>
            </motion.div>

            <motion.div variants={item}>
                <Button>Contacto</Button>
            </motion.div>
        </motion.div>
    );
}