"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icon for mobile menu

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#00227B]">
            {/* Upper Section */}
            <div className="hidden md:flex justify-between px-6 md:px-16 lg:px-32 text-white">
                <div className="flex gap-6 text-sm">
                    <div className="flex items-center">
                        <img className="mr-2" src="_Icon/36.png" alt="Location" />
                        <p>Bharatpur-4, Laxmipur, Chitwan, Nepal</p>
                    </div>
                    <div className="flex items-center">
                        <img className="mr-2" src="_Icon/42.png" alt="Email" />
                        <p>info@panchashreepipes.com.np</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="Frame 5.png" alt="Social 1" />
                    <img src="Frame 6.png" alt="Social 2" />
                    <img src="Frame 7.png" alt="Social 3" />
                </div>
            </div>

            {/* Lower Section */}
            <div className="bg-white mx-[5vw] rounded-t-lg py-4 px-6 md:px-16 lg:px-32 flex justify-between items-center">
                <div className="flex items-center">
                    <img src="image 1.png" alt="Logo" className="h-10 md:h-14" />
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex lg:gap-10 gap-2 text-sm font-semibold text-[#4D4D4D]">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/career">Career</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

                {/* Call Button */}
                <div className="hidden md:flex border-2 border-[#00227B] px-4 py-2 rounded-md text-[#00227B] font-semibold">
                    <p>Get in call</p>
                </div>

                {/* Mobile Menu Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-white py-4 flex flex-col items-center gap-4">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
                    <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href="/career" onClick={() => setIsOpen(false)}>Career</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    <div className="border-2 border-[#00227B] px-4 py-2 rounded-md text-[#00227B] font-semibold">
                        Get in call
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
