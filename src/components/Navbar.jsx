



"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import { useSession, signOut } from "../lib/auth-client";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // সেশন ও লোডিং স্টেট রিড করা হচ্ছে
  const { data: session, isPending } = useSession();
  const user = session?.user;

  // সাইন আউট হ্যান্ডলার ফাংশন
  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/auth/signin"; // লগআউট হলে সাইন-ইন পেজে রিডাইরেক্ট হবে
        }
      }
    });
  };

  // ১. ডাইনামিক নেভিগেশন লিংক: লগইন স্ট্যাটাসের ওপর ভিত্তি করে তৈরি হবে
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Browse Ebooks", href: "/ebooks" },
    // যদি ইউজার লগইন থাকে (user সত্য হয়), তবেই ড্যাশবোর্ড লিংকটি মেনুতে যোগ হবে
    ...(user ? [{ label: "Dashboard", href: "/dashboard" }] : []),
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* LOGO / SITE NAME */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500">
            <span className="text-xl font-bold text-white">F</span>
          </div>
          <h1 className="text-lg font-bold text-white">Fable</h1>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-violet-600 text-white"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="h-6 w-px bg-white/20" />

          {/* LOGIN / LOGOUT DYNAMIC BUTTONS */}
          <div className="flex items-center gap-4">
            {isPending ? (
              <span className="text-xs text-gray-400">Loading...</span>
            ) : user ? (
              <>
                <span className="text-sm text-gray-300 font-medium">
                  Hi, {user.name}!
                </span>
                <Button 
                  onClick={handleSignOut}
                  variant="ghost" 
                  className="text-red-400 border-red-500/30 hover:bg-red-500/10"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Link href="/auth/signin" className="text-sm font-medium text-gray-300 transition hover:text-white">
                Sign In 
              </Link>
            )}
            <Button variant="ghost" className="text-white border-white/10 hover:bg-white/5">
              Get Started
            </Button>
          </div>
        </div>

        {/* MOBILE MENU BUTTON (HAMBURGER) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0B0B0F] md:hidden">
          <div className="space-y-3 px-4 py-6">
            <ul className="space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition ${
                        isActive
                          ? "bg-violet-600/20 text-violet-400 border-l-4 border-violet-500 pl-3"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
              {!isPending && user ? (
                <>
                  <div className="px-4 text-xs text-gray-400">Logged in as: {user.email}</div>
                  <Button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleSignOut();
                    }}
                    className="bg-red-600/20 text-red-400 w-full rounded-xl py-3 font-medium"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <Link
                  href="/auth/signin"
                  className="rounded-xl px-4 py-3 text-base font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In 
                </Link>
              )}
              <Button
                variant="flat"
                className="bg-white/5 text-white w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started 
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
