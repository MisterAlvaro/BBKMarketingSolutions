import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Custom website creation services",
      description: "Responsive design + Custom web development + Search Engine Optimization (SEO) + ...",
      link: "/services/web-development",
      image: "/images/web-development.webp",
    },
    {
      title: "Data analysis service",
      description: "Business and marketing data analysis + Identification of trends and patterns + ...",
      link: "/services/data-intelligence",
      image: "/images/data-intelligence.webp",
    },
    {
      title: "Social media management",
      description: "Content creation + Customized social media strategies + Community management + ...",
      link: "/services/social-media",
      image: "/images/social-media.webp",
    },
    {
      title: "Digital Marketing Services",
      description: "Social Media Marketing + SEO + Content marketing + ...",
      link: "/services/seo-sem",
      image: "/images/seo-sem.webp",
    },
    {
      title: "Traditional Marketing Services",
      description: "Product marketing + Event Marketing + Public relations + ...",
      link: "/services/email-marketing",
      image: "/images/email-marketing.webp",
    },
    {
      title: "Research and Analysis Services",
      description: "Market research + Data Analytics + Performance Measurement",
      link: "/services/strategic-consulting",
      image: "/images/strategic-consulting.webp",
    },
    {
      title: "Brand Development Services",
      description: "Brand Development + Marketing Materials Design + Website Development",
      link: "/services/brand-development",
      image: "/images/brand-development.webp",
    },
    {
      title: "Consulting Services",
      description: "Marketing Consulting + Branding consulting + Innovation consulting",
      link: "/services/consulting-services",
      image: "/images/consulting-services.webp",
    },
  ]

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
            <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="col-span-1 h-[300px] relative overflow-hidden group">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="z-0 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
                  <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                    <h4 className="text-white font-medium text-xl">{service.title}</h4>
                  </CardHeader>
                  <CardContent className="absolute z-10 bottom-16 left-4 right-4">
                    <p className="text-white text-sm">{service.description}</p>
                  </CardContent>
                  <CardFooter className="absolute z-10 bottom-4 left-4 right-4">
                    <Button className="w-full bg-[#231934] text-white hover:bg-opacity-90" asChild>
                      <Link href={service.link}>
                        View Details <ChevronRight className="ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Not sure which service you need?</h2>
            <p className="text-xl mb-8">
              Contact us for a free consultation and we'll help you find the best solution for your business.
            </p>
            <Button className="bg-[#cc2c00] hover:bg-[#e34c0d] text-white text-lg px-8 py-3" asChild>
              <Link href="/contact">Request Free Consultation</Link>
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

