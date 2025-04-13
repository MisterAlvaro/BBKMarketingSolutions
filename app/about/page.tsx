import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function AboutPage() {
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12 text-center">About Us</h1>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Mission</h2>
                <p className="text-lg mb-8">"Our mission is to be leaders in the field of marketing, offering innovative, effective and customized solutions that allow our clients to achieve their goals and stand out in a competitive and constantly evolving environment. We are committed to providing high-quality, results-oriented services based on the latest research and technology in digital marketing, to generate value and sustainable growth for our clients.
                <br></br>
                <br></br>
                Our goal is to build long-term relationships with our clients by understanding their needs and goals, and working collaboratively with them to develop marketing strategies that fit their specific needs. We also strive to stay at the forefront of the latest trends and technologies in marketing, to ensure that our clients always have access to the most effective tools and strategies.
                In short, our mission is to be a trusted partner and leader in the marketing field, helping our clients achieve success and achieve their goals."</p>
              </div>
              <div className="bg-[#ffffff] border-l-2 pl-3">
                <h2 className="text-2xl font-semibold mb-4">Goals</h2>
                 <p className="text-lg">
                  "Our fundamental objectives are to position our company as a leader in the marketing market, offering innovative and effective solutions that allow our clients to achieve their objectives and stand out in a competitive environment. We are committed to understanding the specific needs and objectives of each client and to developing customized marketing strategies that adapt to their needs and allow them to achieve success.
                  <br></br>
                  <br></br>
                  Our main objective is to generate value and sustainable growth for our clients, helping them to increase their online presence, improve customer experience, increase conversion and lead generation, and stay at the forefront of the latest trends and technologies in marketing. We strive to establish long-term relationships with our clients, based on trust, innovation and excellence in delivering results."
                  </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 items-center">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
           <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="mr-2 text-[#e34c0d]" />
                    <span>Constant innovation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 text-[#e34c0d]" />
                    <span>Commitment to results</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 text-[#e34c0d]" />
                    <span>Transparency and ethics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 text-[#e34c0d]" />
                    <span>Adaptability to change</span>
                  </li>
                </ul>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "DESC", role: "DESC", image: "/placeholder.svg" },
                { name: "DESC", role: "DESC", image: "/placeholder.svg" },
                { name: "DESC", role: "DESC", image: "/placeholder.svg" },
              ].map((member) => (
                <div key={member.name} className="bg-[#e8eae5] p-6 rounded-lg text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 "
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              ))}
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

