
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LuChevronLeft, LuChevronRight, LuSparkles, LuBookOpen, LuGlobe } from "react-icons/lu";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Discover Your Next Favorite Book",
      subtitle: "Join the ultimate community of digital readers and share high-quality premium ebooks instantly.",
      ctaText: "Browse Ebooks",
      ctaLink: "/ebooks",
      bgGradient: "from-violet-600/30 via-fuchsia-500/10 to-transparent",
      badge: "New Release Loop",
      icon: <LuSparkles className="h-4 w-4 text-violet-400" />,
      // টেক রিলেটেড এবং ডিজিটাল বুক ইমেজ
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Build Your Digital Learning Library",
      subtitle: "Access thousands of technical, fiction, and premium ebooks from world-class authors on any device.",
      ctaText: "Go to Dashboard",
      ctaLink: "/dashboard",
      bgGradient: "from-blue-600/30 via-cyan-500/10 to-transparent",
      badge: "Premium Collection",
      icon: <LuBookOpen className="h-4 w-4 text-blue-400" />,
      // প্রিমিয়াম লাইব্রেরি/বুক স্ট্যাক ইমেজ
      imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Share Knowledge with the World",
      subtitle: "An open, interactive platform built for seamless ebook discovery, smart tracking, and reading networks.",
      ctaText: "Get Started",
      ctaLink: "/auth/signin",
      bgGradient: "from-emerald-600/30 via-teal-500/10 to-transparent",
      badge: "Global Network",
      icon: <LuGlobe className="h-4 w-4 text-emerald-400" />,
      // রিডিং এবং গ্লোবাল নলেজ ইমেজ
      imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative h-[480px] w-full rounded-3xl border border-white/10 bg-[#0B0B0F]/90 overflow-hidden shadow-2xl">
        
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-between transition-all duration-700 ease-in-out ${
              index === currentSlide 
                ? "opacity-100 scale-100" 
                : "opacity-0 pointer-events-none scale-95"
            }`}
          >
            {/* ডাইনামিক ব্যাকগ্রাউন্ড গ্রেডিয়েন্ট গ্লো */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`} />

            {/* বাম পাশের টেক্সট কনটেন্ট */}
            <div className="relative z-10 max-w-2xl px-8 sm:px-16 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold text-gray-200">
                {slide.icon}
                {slide.badge}
              </span>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                {slide.title}
              </h1>

              <p className="text-base text-gray-400 sm:text-lg max-w-xl">
                {slide.subtitle}
              </p>

              <div>
                <Link
                  href={slide.ctaLink}
                  className="inline-block rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black shadow-lg transition hover:bg-gray-200"
                >
                  {slide.ctaText}
                </Link>
              </div>
            </div>

            {/* ডান পাশের ইমেজ সেকশন (কাস্টম ই-বুক ফ্রেম) */}
            <div className="absolute right-16 bottom-0 top-0 hidden w-1/3 items-center justify-center md:flex z-10">
              
              {/* মেইন বুক ফ্রেম */}
              <div className="relative h-80 w-60 rounded-2xl border border-white/20 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition duration-500">
                {/* ব্যাকগ্রাউন্ড ইমেজ */}
                <img 
                  src={slide.imageUrl} 
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                {/* ইমেজ ওভারলে গ্লাস ইফেক্ট */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Digital Edition</span>
                </div>
              </div>

              {/* ব্যাকগ্রাউন্ড শ্যাডো বুক ফ্রেম (থ্রিডি লুক দেওয়ার জন্য) */}
              <div className="absolute right-24 top-28 h-72 w-52 rounded-2xl border border-white/10 shadow-xl overflow-hidden transform -rotate-6 -z-10 opacity-40">
                <img 
                  src={slide.imageUrl} 
                  alt="Stack Book"
                  className="h-full w-full object-cover blur-[1px]"
                />
              </div>

            </div>

          </div>
        ))}

        {/* বাম দিকের অ্যারো বাটন */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10"
          aria-label="Previous Slide"
        >
          <LuChevronLeft className="h-5 w-5" />
        </button>

        {/* ডান দিকের অ্যারো বাটন */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10"
          aria-label="Next Slide"
        >
          <LuChevronRight className="h-5 w-5" />
        </button>

        {/* ডটস ইন্ডিকেটর */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}