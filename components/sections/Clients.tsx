"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = ["/CCW.png", "/PPSW.png", "/CCW.png"];

export default function Clients() {
    return (
        <section className="py-24 flex justify-center gap-12 flex-wrap bg-black">

            {clients.map((logo, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={logo}
                        alt="client"
                        width={120}
                        height={120}
                        className="opacity-70 hover:opacity-100 transition"
                    />
                </motion.div>
            ))}

        </section>
    );
}