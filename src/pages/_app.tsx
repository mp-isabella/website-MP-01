import "@/styles/globals.css";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  Award,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const _app = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isScrolled, setIsScrolled] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Consultoría Estratégica",
      description:
        "Desarrollamos estrategias personalizadas para impulsar el crecimiento de tu negocio.",
      icon: TrendingUp,
    },
    {
      title: "Gestión de Proyectos",
      description:
        "Lideramos la ejecución de proyectos complejos con metodologías ágiles.",
      icon: Users,
    },
    {
      title: "Transformación Digital",
      description:
        "Modernizamos procesos y sistemas para optimizar la eficiencia operativa.",
      icon: Award,
    },
  ];

  const stats = [
    { number: "100%", label: "Compromiso con cada proyecto" },
    { number: "1er", label: "Cliente satisfecho en desarrollo web" },
    { number: "∞", label: "Ideas y soluciones personalizadas" },
    { number: "100%", label: "Diseño adaptado a cada necesidad" },
  ];

  const testimonials = [
    {
      name: "Cristina Mendoza",
      position: "CEO, TechCorp",
      content:
        "Su enfoque estratégico y profesionalismo han sido fundamentales para nuestro crecimiento.",
      rating: 5,
    },
    {
      name: "Enzo Fernandez",
      position: "Director, InnovaCorp",
      content:
        "Excelente equipo de trabajo. Superaron nuestras expectativas en cada proyecto.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MP</span>
              </div>
              <span
                className={`ml-3 text-2xl font-bold ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Riquelme
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["Inicio", "Servicios", "Nosotros", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X
                  className={isScrolled ? "text-gray-900" : "text-white"}
                  size={24}
                />
              ) : (
                <Menu
                  className={isScrolled ? "text-gray-900" : "text-white"}
                  size={24}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Inicio", "Servicios", "Nosotros", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Convertimos 
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ideas
            </span>
            en Plataformas Funcionales
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Somos expertos en soluciones estratégicas que impulsan el
            crecimiento sostenible de tu empresa
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Comenzar Ahora
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
              Conocer Más
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales diseñadas para potenciar el éxito
              de tu organización
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                  Saber más <ArrowRight className="ml-2" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sobre Mi
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Como Ingeniera Civil en Informática con una visión emprendedora,
                me dedico a transformar ideas en soluciones digitales efectivas
                y modernas. Con experiencia en desarrollo de software y diseño
                de plataformas web responsivas, me enfoco en crear productos que
                no solo cumplen con los requerimientos técnicos, sino que
                también aportan verdadero valor a las personas y empresas.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Trabajamos con empresas de todos los tamaños, desde startups
                hasta corporaciones multinacionales, ayudándolas a navegar los
                desafíos del mercado actual y posicionarse para el éxito futuro.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Conocer Nuestro Equipo
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                <p className="text-blue-100 leading-relaxed">
                  Desarrollar soluciones digitales innovadoras y a medida, que
                  impulsen el crecimiento de nuestros clientes. Combinamos
                  tecnología, diseño y estrategia para generar impacto real y
                  sostenible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600">
              La satisfacción de nuestros clientes es nuestra mayor recompensa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contactanos
            </h2>
            <p className="text-xl text-gray-600">
              Estamos listos para ayudarte a alcanzar tus objetivos
              empresariales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Teléfono</div>
                    <div className="text-gray-600">(+56) 985714993</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">mpriquelme@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dirección</div>
                    <div className="text-gray-600">Av. Principal, Ciudad</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos un Mensaje
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-600 
                     text-gray-900 placeholder-gray-400"
                      placeholder="Nombre y Apellido"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-600 
                     text-gray-900 placeholder-gray-400"
                      placeholder="correo@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-600 
                   text-gray-900 placeholder-gray-400"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-600 
                   text-gray-900 placeholder-gray-400"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MP</span>
                </div>
                <span className="ml-3 text-2xl font-bold">Riquelme</span>
              </div>
              <p className="text-gray-400">
                Transformamos tu visión en realidad con soluciones estratégicas
                innovadoras.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Consultoría
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Gestión de Proyectos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Transformación Digital
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Equipo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MP Riquelme. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default _app;
