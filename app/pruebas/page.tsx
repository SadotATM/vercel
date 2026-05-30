"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AnimatedCard() {
    return (
        <motion.div
            className="h-screen flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            Hola
            <Button>Click me</Button>
        </motion.div>
    );
}