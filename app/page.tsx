"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">

        {/* Imagen de fondo */}
        <Image
          src="/hero2.jpg"
          alt="Diseño profesional de uñas"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay oscuro rosado */}
        <div className="absolute inset-0 bg-pink-900/40"></div>

        {/* Contenido */}
        <div className="relative z-10 max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Uñas profesionales en Guadalajara 💅
          </motion.h1>

          <p className="text-lg md:text-xl mb-8 text-pink-100">
            Diseños únicos que resaltan tu estilo ✨
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5213312345678"
              target="_blank"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              📲 Agendar por WhatsApp
            </a>

            <a
              href="#servicios"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-600 transition"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>
      {/* GALERÍA */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Diseños recientes ✨
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative h-72 bg-pink-100 rounded-2xl">
            <Image
              src="/gelish.jpg"
              alt="Diseño profesional de uñas"
              fill
              priority
              className="object-cover"
            ></Image>
          </div>
          <div className="relative h-72 bg-pink-200 rounded-2xl">
            <Image
              src="/reciente2.png"
              alt="Diseño profesional de uñas"
              fill
              priority
              className="object-cover"
            ></Image>

          </div>
          <div className="relative h-72 bg-pink-200 rounded-2xl">
            <Image
              src="/reciente3.png"
              alt="Diseño profesional de uñas"
              fill
              priority
              className="object-cover"
            ></Image>

          </div>
          
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="py-20 bg-pink-50 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Servicios 💎
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="bg-white p-8 rounded-2xl shadow-md">

            <h3 className="text-xl font-semibold mb-4">Gelish</h3>
            <p className="text-2xl font-bold text-pink-500 mb-4">$250</p>
            <p className="text-gray-600">
              Duración hasta 3 semanas con acabado brillante.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Uñas Acrílicas</h3>
            <p className="text-2xl font-bold text-pink-500 mb-4">$450</p>
            <p className="text-gray-600">
              Diseños personalizados y máxima duración.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Diseño Especial</h3>
            <p className="text-2xl font-bold text-pink-500 mb-4">$550+</p>
            <p className="text-gray-600">
              Arte detallado y efectos premium.
            </p>
          </div>

        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Lo que dicen nuestras clientas 💖
        </h2>

        <div className="space-y-8">
          <div className="bg-pink-50 p-6 rounded-2xl">
            <p>"Me encantaron, duran muchísimo 😍"</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-2xl">
            <p>"Siempre vuelvo, súper profesional ✨"</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-pink-500 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Lista para unas uñas increíbles? 💅
        </h2>

        <a
          href="https://wa.me/5213312345678"
          target="_blank"
          className="bg-white text-pink-500 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
        >
          Reservar ahora
        </a>
      </section>

    </main>
  )
}