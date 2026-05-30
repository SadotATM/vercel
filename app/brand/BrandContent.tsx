"use client";

import Head from "next/head";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function BrandContent() {
  // Fade‑in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const placeholderLogos = Array.from({ length: 8 }).map(
    (_, i) => `https://via.placeholder.com/150?text=Logo+${i + 1}`
  );

  return (
    <>
      <Head>
        <title>Brand Presentation</title>
        <meta
          name="description"
          content="Brand presentation page for a video production company"
        />
      </Head>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Productora de Video</h1>
          <p className="text-xl">Capturamos historias, creamos impacto.</p>
        </div>
      </header>

      {/* Mission */}
      <section className="container mx-auto px-4 py-12 fade-in">
        <h2 className="text-3xl font-semibold mb-4">Misión</h2>
        <p className="text-lg">
          Crear contenidos visuales de alta calidad que comuniquen la visión de
          nuestros clientes y conecten emocionalmente con su audiencia.
        </p>
      </section>

      {/* Vision */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Visión</h2>
          <p className="text-lg">
            Ser la productora líder en innovación audiovisual, reconocida por su
            creatividad y excelencia en cada proyecto.
          </p>
        </div>
      </section>

      {/* Collaborated Brands */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4">
          Marcas con las que colaboramos
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
          {placeholderLogos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Marca colaboradora ${idx + 1}`}
              className="h-24 w-auto mx-auto"
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
          <p className="text-lg"><strong>Email:</strong> info@productora.com</p>
          <p className="text-lg"><strong>Teléfono:</strong> +1 555 123 4567</p>
          <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
            <Button variant="default">Contáctanos vía WhatsApp</Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Productora de Video. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
