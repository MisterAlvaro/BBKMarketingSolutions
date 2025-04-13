import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function DataIntelligencePage() {
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
            <h1 className="text-4xl font-bold mb-8 text-center">Data analysis service for informed, data-driven decision making</h1>
            <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
              BBK Marketing Solutions offers data analytics services to help our clients make informed, data-driven decisions. Our services include:
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="mr-2 text-[#e34c0d]" />
                    <span>Business and marketing data analysis.</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 text-[#e34c0d]" />
                    <span>Identification of trends and patterns.</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 text-[#e34c0d]" />
                    <span>Creating reports and data visualizations.</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 text-[#e34c0d]" />
                    <span>Performance analysis of campaigns and strategies.</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 text-[#e34c0d]" />
                    <span>Recommendations to improve efficiency and performance.</span>
                  </li>
                   <li className="flex items-center">
                    <Check className="mr-2 text-[#e34c0d]" />
                    <span>Develop a new marketing strategy that achieves the performance desired by the client.</span>
                  </li>
                </ul>
              </div>
              <div>
                <img src="/images/data-intelligence.jpg" alt="Data Intelligence" className="rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our goal is to help our clients:</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Better understand your audience and market",
                },
                {
                  title: "Identify opportunities and challenges",
                },
                {
                  title: "Measure and optimize the performance of your campaigns and strategies",
                },
                {
                  title: "Make informed, data-driven decisions.",
                },
              ].map((step, index) => (
                <div key={index} className="bg-white shadow-2xl p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to harness the power of your data?</h2>
            <Button className="bg-[#e34c0d] hover:bg-[#cc2c00] text-white text-lg px-8 py-3" asChild>
              <Link href="/contact">Request a Consultation</Link>
            </Button>
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

