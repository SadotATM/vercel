"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ClientHoverCardProps {
    client: {
        name: string;
        logo: string;
        description: string;
        image: string;
    };
}

export default function ClientHoverCard({ client }: ClientHoverCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* LOGO */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
            >
                <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={120}
                    className="opacity-70 hover:opacity-100 transition"
                />
            </motion.div>

            {/* HOVER CARD */}
            {hovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute z-50 top-full mt-3 left-1/2 -translate-x-1/2 w-64 bg-white text-black rounded-xl shadow-xl overflow-hidden"
                >
                    <Image
                        src={client.image}
                        alt={client.name}
                        width={400}
                        height={200}
                        className="object-cover w-full h-32"
                    />

                    <div className="p-4">
                        <h3 className="font-bold">{client.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            {client.description}
                        </p>
                    </div>
                </motion.div>
            )}
        </div>
    );
}