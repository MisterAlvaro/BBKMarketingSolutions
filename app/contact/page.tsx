"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Home, Users, Briefcase, MessageSquare, Menu, X } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { Toaster } from "sonner"
import Navbar from "../components/Navbar"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "We will contact you soon.",
          duration: 5000,
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        toast.error("Failed to send message", {
          description: "Please try again later.",
          duration: 5000,
        })
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
        duration: 5000,
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-white text-[#231934]">
      <Toaster position="top-right" richColors />
      <Navbar />

      <main className="pt-24">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input 
                    name="name"
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input 
                    name="email"
                    placeholder="Email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input 
                    name="phone"
                    placeholder="Phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <select 
                    name="service"
                    className="w-full p-2 bg-white border border-gray-600 rounded-md"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your current challenge</option>
                    <option value="web-development">Custom website creation services</option>
                    <option value="data-intelligence">Data analysis service</option>
                    <option value="social-media">Social media management</option>
                    <option value="seo-sem">Digital Marketing Services</option>
                    <option value="email-marketing">Traditional Marketing Services</option>
                    <option value="strategic-consulting">Research and Analysis Services</option>
                    <option value="brand-development">Brand Development Services</option>
                    <option value="consulting-services">Consulting Services</option>
                  </select>
                  <Textarea 
                    name="message"
                    placeholder="Message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button type="submit" className="w-full bg-[#fb6404] hover:bg-[#fb4702] text-white">
                    Send Message
                  </Button>
                </form>
              </div>
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Phone className="mr-2 text-[#fb6404]" />
                      <span>+1 (786) 962-9328</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="mr-2 text-[#fb6404]" />
                      <span>bbkmarketingsolutions@gmail.com</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
                  <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday and Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Location</h2>
            <div className="aspect-w-16 aspect-h-9">
              {/* Here would be the Leaflet.js map */}
              <div className="bg-white w-full h-full flex items-center justify-center">
                <iframe src="https://www.google.com/maps/place/8040+Washington+St,+Port+Richey,+
                // FL+34668,+USA/@28.2743426,-82.7190368,17z/data=!3m1!4b1!4m6!3m5!1s0x88c29016a
                // fbc5377:0xe13dbb7f3193fb56!8m2!3d28.2743426!4d-82.7190368!16s%2Fg%2F11b8vc52gc
                // ?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">BBK Marketing Solutions</h3>
              <p className="text-gray-400">Your strategic partner in digital marketing</p>
            </div>
            <nav className="flex space-x-4">
              <Link href="/" className="text-gray-400 hover:text-black transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-black transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-black transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-black transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">&copy; 2023 BBK Marketing Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


