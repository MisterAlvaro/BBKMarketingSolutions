import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight, ChevronRight, MessageCircle, Phone } from "lucide-react"
import { Html, Head, Main, NextScript } from "next/document";

export default function Home() {
  const featuredServices = [
    {
      title: "High-Performance Websites",
      description: "Responsive design + Technical SEO + CRM Integration",
      link: "/services/web-development",
      image: "/images/web-development.webp",
    },
    {
      title: "Data Intelligence",
      description: "Real-time dashboards + Trend predictors",
      link: "/services/data-intelligence",
      image: "/images/data-intelligence.webp",
    },
    {
      title: "Social Media Mastery",
      description: "Viral content + Community management + ROI tracking",
      link: "/services/social-media",
      image: "/images/social-media.webp",
    },
  ]

  const redessociales = [
    {
      name:'instagram',
      link:'https://www.instagram.com/mr.santiesteban?igsh=MTJraHUwcTJvZDhueg%3D%3D&utm_source=qr',
    },
    {
      name:'linkedin',
      link:'https://www.linkedin.com/company/bbk-marketing-solutions-llc/',
    },
    {
      name:'youtube',
      link:'https://youtube.com/@jorgeernestoespinosa?si=4TG_Xqd6GyJnPDSn',
    },
    {
      name:'tiktok',
      link:'https://www.tiktok.com/@jorge.e.espinosa7?_t=ZT-8v6OIDqC2pC&_r=1',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-[#231934]">
      <header className="fixed shadow-lg top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="">
            <img src="/images/bbk_logo.webp" className="h-12 w-auto"></img>
          </div>
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

      <main>
        <section id="home" className="pt-32 pb-20 bg-[url('/images/banner_1.webp')]">
          <div className="container mx-auto px-4 ">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Your Success is Our Priority</h1>
            <p className="text-xl md:text-2xl mb-8 text-center">Transforming Data into Winning Strategies</p>
            <div className="flex justify-center">
              <Button className="bg-[#e34c0d] hover:bg-[#cc2c00] text-white text-lg px-8 py-3" asChild>
                <Link href="/services">
                  Discover How <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-2xl text-center mb-8">
              We boost your digital presence with 360° solutions: from web development to predictive analytics
            </p>
            <div className="flex justify-center">
              <Button className="bg-[#cc2c00] hover:bg-[#e34c0d] text-white" asChild>
                <Link href="/contact">Request a Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 items-right">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <iframe src=""></iframe>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
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
            <div className="mt-12 text-center">
              <Button className="bg-[#cc2c00] hover:bg-[#e34c0d] text-white" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white bg-[url('/images/banner_2.webp')]">
          <div className="container mx-auto px-2">
            <h2 className="text-4xl font-bold mb-12 text-end">Reviews</h2>
            <div className="mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg mb-4">
                  "BBK Marketing Solutions transformed our online presence. Incredible team!"
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img src="/placeholder.svg" alt="Client" className="w-12 h-12 rounded-full" />
                  </div>
                  <div>
                    <p className="font-semibold">John Smith</p>
                    <p className="text-sm text-gray-400">CEO, TechCorp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 ">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Multiply Your Sales?</h2>
            <div className="flex justify-center gap-4">
              <Button className="bg-[#231934] text-white hover:bg-[rgb(93,90,100)]" asChild>
                <Link href="/contact">
                  Schedule Demo <Phone className="ml-2 text-[#e34c0d]" />
                </Link>
              </Button>
              <Button className="bg-[#231934] text-white hover:bg-[rgb(93,90,100)]">
                Live Chat <MessageCircle className="ml-2 text-[#e34c0d]" />
              </Button>
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
            <div className="flex space-x-4 items-center">
              {redessociales.map((red, index) => (
                <a key={index} href={`${red.link}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e34c0d] transition-colors">
                <span className="sr-only">{red.name}</span>
                <div>
                  <img src={`/images/icons/${red.name}.webp`} className="w-[20px]"></img>
                </div>
              </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap justify-between items-center">
            <div className="flex space-x-4">
              <Badge variant="outline">SSL</Badge>
              <Badge variant="outline">GDPR</Badge>
              <Badge variant="outline">ISO 27001</Badge>
            </div>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <a href="#legal" className="text-gray-400 hover:text-[#e34c0d] transition-colors">
                    Legal Notice
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="text-gray-400 hover:text-[#e34c0d] transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

