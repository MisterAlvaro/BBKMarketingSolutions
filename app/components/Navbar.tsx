'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Users, Briefcase, MessageSquare, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="">
          <img src="/images/bbk_logo.webp" className="h-12 w-auto"></img>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-[#fb6404] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#fb6404] transition-colors">
            About Us
          </Link>
          <Link href="/services" className="hover:text-[#fb6404] transition-colors">
            Services
          </Link>
          <Link href="/contact" className="hover:text-[#fb6404] transition-colors">
            Contact
          </Link>
        </nav>

        <Button 
            className="md:hidden bg-[#fb6404] hover:bg-[#fb4702] text-white p-2 transition-all duration-300 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <Menu 
                size={24} 
                className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} 
              />
              <X 
                size={24} 
                className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} 
              />
            </div>
        </Button>

        <Button className="hidden md:block bg-[#fb6404] hover:bg-[#fb4702] text-white">Get Started</Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 hover:text-[#fb6404] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link 
              href="/about" 
              className="flex items-center space-x-2 hover:text-[#fb6404] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Users size={20} />
              <span>About Us</span>
            </Link>
            <Link 
              href="/services" 
              className="flex items-center space-x-2 hover:text-[#fb6404] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Briefcase size={20} />
              <span>Services</span>
            </Link>
            <Link 
              href="/contact" 
              className="flex items-center space-x-2 hover:text-[#fb6404] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare size={20} />
              <span>Contact</span>
            </Link>
            <Button className="w-full bg-[#fb6404] hover:bg-[#fb4702] text-white">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
} 