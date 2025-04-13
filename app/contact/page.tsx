import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#231934]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">BBK Marketing Solutions</div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-[#e34c0d] transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#e34c0d] transition-colors">
              About Us
            </Link>
            <Link href="/services" className="hover:text-[#e34c0d] transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-[#e34c0d] transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-[#cc2c00] hover:bg-[#e34c0d] text-white">Get Started</Button>
        </div>
      </header>

      <main className="pt-24">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Phone" type="tel" />
                  <select className="w-full p-2 bg-white border border-gray-600 rounded-md">
                    <option value="">Select your current challenge</option>
                    <option value="seo">Improve SEO</option>
                    <option value="social">Social media management</option>
                    <option value="web">Web development</option>
                    <option value="analytics">Data analysis</option>
                  </select>
                  <Textarea placeholder="Message" rows={4} />
                  <Button type="submit" className="w-full bg-[#cc2c00] hover:bg-[#e34c0d] text-white">
                    Send Message
                  </Button>
                </form>
              </div>
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Phone className="mr-2 text-[#e34c0d]" />
                      <span>+1 (555) 123-4567</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="mr-2 text-[#e34c0d]" />
                      <span>info@bbkmarketingsolutions.com</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="mr-2 text-[#e34c0d]" />
                      <span>123 Main St, Suite 456, New York, NY 10001</span>
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

