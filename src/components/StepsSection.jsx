"use client";

import { LuBookOpen, LuCpu, LuShieldAlert } from "react-icons/lu";

export default function StepsSection() {
  const steps = [
    {
      id: "01",
      title: "The Great Gatsby",
      description: "Explore the classic story of triumph and tragedy in the roaring twenties digital edition.",
      icon: <LuBookOpen className="h-6 w-6 text-violet-400" />,
    },
    {
      id: "02",
      title: "Mastering Next.js 16",
      description: "Dive deep into server components, App Router, and expert modern web development architectures.",
      icon: <LuCpu className="h-6 w-6 text-violet-400" />,
    },
    {
      id: "03",
      title: "The Cyber Frontier",
      description: "Learn essential security practices and secure your applications against modern digital threats.",
      icon: <LuShieldAlert className="h-6 w-6 text-violet-400" />,
    },
  ];

  return (
    <section className="bg-[#0B0B0F] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            Top Featured Books
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Discover our handpicked premium ebooks of the week.
          </p>
        </div>

        {/* 3-COLUMN CARD GRID (DARK LOOK) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center rounded-3xl border border-white/10 bg-[#12121A] p-8 shadow-2xl transition-all duration-300 hover:border-violet-500/50 hover:bg-[#161622]"
            >
              {/* NUMBER BADGE */}
              <span className="absolute right-6 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white shadow-lg shadow-violet-600/30">
                {step.id}
              </span>

              {/* ICON WRAPPER */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
                {step.icon}
              </div>

              {/* CARD TEXT */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}