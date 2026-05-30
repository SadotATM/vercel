"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PruebasPage() {
    return (
        <main className="p-10">
            <h1 className="text-4xl font-bold">
                Página de Pruebas
            </h1>
            <Button>Haz clic aquí</Button>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >

                Hola mundo
            </motion.div>
        </main>
    );
}