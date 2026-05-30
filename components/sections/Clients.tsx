"use client";

import { motion } from "framer-motion";
import ClientHoverCard from "./ClientHoverCard";

const clients = [
  {
    name: "Pepsi",
    logo: "/logos/pepsi.png",
    description: "Campaña digital y branding",
    image: "/works/pepsi-work.jpg",
  },
  {
    name: "Coca Cola",
    logo: "/logos/cocacola.png",
    description: "Campaña digital y branding",
    image: "/works/cocacola-work.jpg",
  },

];

export default function Clients() {
  return (
    <section className="py-24 flex justify-center gap-12 flex-wrap bg-black">
      {clients.map((client, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          <ClientHoverCard client={client} />
        </motion.div>
      ))}
    </section>
  );
}