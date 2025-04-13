"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, ChevronRight, MessageCircle, Phone } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function LandingPage() {
  const [isSticky, setIsSticky] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)

    gsap.from(".keyword", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".keywords-cloud",
        start: "top 80%",
      },
    })

    gsap.from(".service-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 70%",
      },
    })

    gsap.from(".timeline-item", {
      opacity: 0,
      x: -50,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".timeline",
        start: "top 80%",
      },
    })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A3F54] to-[#1A2A36] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2A3F54] bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">BBK Marketing Solutions</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-[#FF6B6B] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[#FF6B6B] transition-colors">
              About Us
            </a>
            <a href="#services" className="hover:text-[#FF6B6B] transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-[#FF6B6B] transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-[#FF6B6B] hover:bg-[#FF8787] text-white">Get Started</Button>
        </div>
      </header>

      <main>
        <section id="home" className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Tu éxito es nuestra prioridad
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Transformamos datos en estrategias ganadoras
            </motion.p>
            <div className="flex justify-center">
              <Button
                className="bg-[#FF6B6B] hover:bg-[#FF8787] text-white text-lg px-8 py-3"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Descubre cómo <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#1A2A36]">
          <div className="container mx-auto px-4">
            <motion.p className="text-2xl text-center mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
              Potenciamos tu presencia digital con soluciones 360°: desde desarrollo web hasta análisis predictivo
            </motion.p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#E63946] hover:bg-[#F25C69] text-white mx-auto block">
                  Solicita cotización gratis
                </Button>
              </DialogTrigger>
              <DialogContent aria-describedby="dialog-description">
                <h3 className="text-lg font-semibold mb-4">Solicitar Cotización</h3>
                <p id="dialog-description" className="sr-only">
                  Formulario para solicitar una cotización gratuita de nuestros servicios de marketing.
                </p>
                <form className="space-y-4">
                  <Input placeholder="Nombre" aria-label="Nombre" />
                  <Input placeholder="Email" type="email" aria-label="Email" />
                  <Input placeholder="Teléfono" type="tel" aria-label="Teléfono" />
                  <textarea
                    className="w-full p-2 border rounded"
                    placeholder="Describe tu proyecto"
                    rows={4}
                    aria-label="Descripción del proyecto"
                  ></textarea>
                  <Button type="submit" className="w-full bg-[#E63946] hover:bg-[#F25C69] text-white">
                    Enviar Solicitud
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <section className="py-20 bg-[#2A3F54]">
          <div className="container mx-auto px-4">
            <div className="keywords-cloud flex flex-wrap justify-center gap-4">
              {["SEO", "Growth Hacking", "ROI", "Analítica", "Redes Sociales", "Conversión"].map((keyword, index) => (
                <Badge
                  key={index}
                  className="keyword text-lg py-2 px-4 bg-[#3D5A80] hover:bg-[#4D6A90] cursor-pointer transition-colors"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services-section py-20 bg-[#1A2A36]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Servicios Destacados</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Websites High-Performance",
                  description: "Diseño responsive + SEO técnico + Integración CRM",
                  icon: "🚀",
                },
                {
                  title: "Inteligencia de Datos",
                  description: "Dashboards en tiempo real + Predictores de tendencias",
                  icon: "📊",
                },
                {
                  title: "Social Media Mastery",
                  description: "Contenido viral + Gestión community + ROI tracking",
                  icon: "🌐",
                },
              ].map((service, index) => (
                <Card key={index} className="service-card bg-[#2A3F54] border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <span className="mr-2 text-3xl">{service.icon}</span>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="mt-4 bg-[#FF6B6B] hover:bg-[#FF8787] text-white">
                      Ver detalles <ChevronRight className="ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#2A3F54]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Nuestro Proceso de Trabajo</h2>
            <div className="timeline relative">
              {["Diagnóstico gratuito", "Plan estratégico", "Implementación ágil", "Optimización continua"].map(
                (step, index) => (
                  <div key={index} className="timeline-item flex mb-8">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-8 h-8 bg-[#FF6B6B] rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                      {index < 3 && <div className="w-0.5 h-full bg-[#FF6B6B] mt-2"></div>}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{step}</h3>
                      <p className="mt-2 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                ),
              )}
            </div>
            <Button
              className={`mt-8 bg-[#E63946] hover:bg-[#F25C69] text-white mx-auto block transition-all ${
                isSticky ? "fixed bottom-4 right-4 z-50" : ""
              }`}
            >
              Comienza ahora
            </Button>
          </div>
        </section>

        <section className="py-20 bg-[#1A2A36]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Lo que dicen nuestros clientes</h2>
            <div className="mb-12">
              {/* Aquí iría el widget de Trustmary */}
              <div className="bg-[#2A3F54] p-6 rounded-lg">
                <p className="text-lg mb-4">
                  "BBK Marketing Solutions transformó nuestra presencia online. ¡Increíble equipo!"
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img src="/placeholder.svg" alt="Cliente" className="w-12 h-12 rounded-full" />
                  </div>
                  <div>
                    <p className="font-semibold">Juan Pérez</p>
                    <p className="text-sm text-gray-400">CEO, TechCorp</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3, 4, 5, 6].map((logo) => (
                <div key={logo} className="w-32 h-16 bg-gray-700 rounded flex items-center justify-center">
                  Logo {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-[#2A3F54] to-[#E63946]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">¿Listo para multiplicar tus ventas?</h2>
            <div className="flex justify-center gap-4">
              <Button className="bg-white text-[#2A3F54] hover:bg-gray-100">
                Agendar demo <Phone className="ml-2" />
              </Button>
              <Button className="bg-[#1A2A36] text-white hover:bg-[#2A3F54]">
                Chat en vivo <MessageCircle className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A2A36] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">BBK Marketing Solutions</h3>
              <p className="text-gray-400">Tu partner estratégico en marketing digital</p>
            </div>
            <div className="flex space-x-4">
              {["whatsapp", "telegram", "instagram", "facebook", "youtube"].map((social) => (
                <a key={social} href={`#${social}`} className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">{social}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-wrap justify-between items-center">
            <div className="flex space-x-4">
              <Badge variant="outline">SSL</Badge>
              <Badge variant="outline">GDPR</Badge>
              <Badge variant="outline">ISO 27001</Badge>
            </div>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <a href="#legal" className="text-gray-400 hover:text-white transition-colors">
                    Aviso legal
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">
                    Política de cookies
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>

      <section id="about" className="py-20 bg-[#2A3F54]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Sobre Nosotros</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Misión</h3>
              <p className="text-lg mb-8">
                "Impulsar el crecimiento empresarial mediante tecnología y creatividad aplicada"
              </p>
              <h3 className="text-2xl font-semibold mb-4">Objetivo</h3>
              <p className="text-lg">
                "Ser el partner estratégico que escalará tu marca a nuevos mercados en 18 meses"
              </p>
            </div>
            <div className="bg-[#1A2A36] p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Nuestros Valores</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="mr-2 text-[#FF6B6B]" />
                  <span>Innovación constante</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-[#FF6B6B]" />
                  <span>Compromiso con resultados</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-[#FF6B6B]" />
                  <span>Transparencia y ética</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-[#FF6B6B]" />
                  <span>Adaptabilidad al cambio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services-full" className="py-20 bg-[#1A2A36]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Core Services</h3>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Desarrollo Web Premium</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Diseño UX/UI premiado</li>
                      <li>SEO on-page/off-page</li>
                      <li>Integración API personalizada</li>
                      <li>Case study: +140% tráfico orgánico</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Business Intelligence</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Modelos predictivos ML</li>
                      <li>Visualización datos en Tableau/Power BI</li>
                      <li>Alertas KPI en tiempo real</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Gestión de Redes</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Calendarización inteligente</li>
                      <li>UGC estratégico</li>
                      <li>Reportes semanales de engagement</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Portafolio Completo</h3>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Marketing Digital</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Campañas SEM/SEO</li>
                      <li>Email marketing automatizado</li>
                      <li>Landing pages conversivas</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Marketing Tradicional</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Activaciones BTL</li>
                      <li>Media planning TV/radio</li>
                      <li>PR estratégico</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Consultoría Especializada</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Auditoría de marca</li>
                      <li>Modelos de pricing</li>
                      <li>Innovación disruptiva</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#2A3F54]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contáctanos</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <Input placeholder="Nombre" />
                <Input placeholder="Teléfono" type="tel" />
                <Input placeholder="Email" type="email" />
                <select className="w-full p-2 bg-[#1A2A36] border border-gray-600 rounded">
                  <option value="">Selecciona tu desafío actual</option>
                  <option value="seo">Mejorar SEO</option>
                  <option value="social">Gestión de redes sociales</option>
                  <option value="web">Desarrollo web</option>
                  <option value="analytics">Análisis de datos</option>
                </select>
                <Button type="submit" className="w-full bg-[#FF6B6B] hover:bg-[#FF8787] text-white">
                  Enviar mensaje
                </Button>
              </form>
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Ubicación</h3>
                <p>Calle Principal 123, Ciudad, País</p>
                <p>Horario: Lunes a Viernes, 9:00 - 18:00</p>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                {/* Aquí iría el mapa de Leaflet.js */}
                <div className="bg-gray-700 w-full h-full flex items-center justify-center">Mapa de ubicación</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

