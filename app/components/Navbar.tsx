"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="navbar" className="bg-blue-950 fixed w-full top-0 left-0 z-50">
      <nav className="mx-auto px-6 container flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <div className="text-xl font-Lobster flex flex-row items-center gap-2">
          <Image
            src="/img/logo (1).png"
            alt="logo"
            width={80}
            height={80}
            className="w-20"
          />
          <p className="text-center text-sm md:text-xl md:block">
            Smart Garage
          </p>
        </div>

        {/* Menu */}
        <div
          id="nav-menu"
          className={`absolute top-0 ${
            menuOpen ? "left-0" : "left-[-100%]"
          } min-h-[100vh] w-full bg-blue-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
        >
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            <li>
              <Link href="#home" className="nav-link active">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#about" className="nav-link">
                À propos
              </Link>
            </li>
            <li>
              <Link href="#popular" className="nav-link">
                Modules premium
              </Link>
            </li>
            <li>
              <Link href="#review" className="nav-link">
                Avis clients
              </Link>
            </li>
            <li>
              <Link
                href="https://smartgarage.asnumeric.com/pricing"
                className="nav-link"
              >
                Tarifs
              </Link>
            </li>
          </ul>

          {/* Décorations */}
          <div className="lg:hidden absolute opacity-90 bottom-0 -right-10">
            <Image
              src="/img/leaf-1.png"
              alt="leaf_image"
              width={128}
              height={128}
              className="w-32"
            />
          </div>
          <div className="lg:hidden absolute opacity-90 -top-5 left-0 rotate-90">
            <Image
              src="/img/leaf-2.png"
              alt="leaf_image"
              width={128}
              height={128}
              className="w-32"
            />
          </div>
        </div>

        {/* Bouton Hamburger */}
        <div
          className="lg:hidden text-xl sm:text-3xl cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`ri-${menuOpen ? "close-line" : "menu-4-line"}`}></i>
        </div>
      </nav>
    </header>
  );
}
