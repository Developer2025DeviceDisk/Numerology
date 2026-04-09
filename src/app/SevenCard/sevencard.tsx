"use client";

import { motion } from "framer-motion";

const cards = [
  { number: 1, title: "Life Path Number", desc: "Reveals your core personality, strengths, and the direction your life is meant to take." },
  { number: 2, title: "Expression Number", desc: "Shows your natural talents, abilities, and how you express yourself in the world." },
  { number: 3, title: "Soul Urge Number", desc: "Reflects your inner desires, motivations, and what truly fulfills you." },
  { number: 4, title: "Personality Number", desc: "Represents how others perceive you and the impression you leave behind." },
  { number: 5, title: "Birthday Number", desc: "Highlights your unique gifts and special qualities you were born with." },
  { number: 6, title: "Maturity Number", desc: "Indicates your growth, wisdom, and direction later in life." },
  { number: 7, title: "Destiny Number", desc: "Defines your ultimate purpose and the journey you are meant to follow." },
];

export default function SevenCards() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#faf7f2] to-white">

      {/* 🔥 Heading */}
      <div className="text-center max-w-2xl mx-auto mb-20 px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">
          Numerology Insights
        </p>

        <h2 className="text-3xl md:text-5xl font-serif text-secondary leading-tight">
          Understanding Your <span className="italic">Core Numbers</span>
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          Each number in numerology holds a unique vibration that reveals deep
          insights about your personality, destiny, and life path.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">

        {/* 🔗 Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-gray-300 to-transparent -translate-x-1/2" />

        <div className="space-y-14">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              {/* Card */}
              <div className="w-[46%] bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

                {/* TOP → TITLE */}
                <div className="p-5 border-b bg-gray-50">
                  <h3 className="text-xl font-serif font-semibold text-secondary">
                    {card.number}. {card.title}
                  </h3>
                </div>

                {/* BOTTOM → DESCRIPTION */}
                <div className="p-5">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Circle */}
              <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 bg-secondary rounded-full border-4 border-white shadow-md z-10" />

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
