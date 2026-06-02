"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/deltakere", label: "Deltakere" },
  { href: "/flights", label: "Flights" },
  { href: "/om-turneringen", label: "Om Turneringen" },
  { href: "/hullpresentasjon", label: "Hullpresentasjon" },
  { href: "/ekstra-konkurranser", label: "Ekstra Konkurranser" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-masters-green sticky top-0 z-50 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Odelmasters_logo.png"
              alt="Odel Masters"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-masters-gold font-serif text-xl font-bold hidden sm:block">
              Odel Masters
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-masters-white hover:text-masters-gold px-3 py-2 text-sm font-medium rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-masters-white hover:text-masters-gold p-2"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-masters-dark border-t border-masters-green">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-masters-white hover:text-masters-gold hover:bg-masters-green px-4 py-3 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
