"use client";

import { motion } from "framer-motion";

export default function PruebasPage() {
    return (
        <main className="p-10">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Hola mundo
            </motion.div>
        </main>
    );
}