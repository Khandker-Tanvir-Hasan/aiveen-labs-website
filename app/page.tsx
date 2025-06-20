'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Cloud, 
  Heart,
  Monitor,
  CheckCircle, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  ChevronDown,
} from 'lucide-react'
import Logo from '../components/Logo'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Java Development",
      description: "Enterprise-grade Java applications and microservices built with Spring Boot, Hibernate, and modern Java frameworks.",
      features: ["Spring Boot Applications", "Microservices Architecture", "RESTful APIs", "Enterprise Integration"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AWS Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services leveraging AWS best practices and services.",
      features: ["Cloud Migration", "AWS Infrastructure", "Serverless Solutions", "DevOps & CI/CD"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Modern, responsive web applications built with React and Vue.js for optimal user experience.",
      features: ["React.js Applications", "Vue.js Development", "Progressive Web Apps", "UI/UX Design"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare Solutions",
      description: "Specialized technology solutions for medical practices, hospitals, and healthcare organizations.",
      features: ["EHR Integration", "HIPAA Compliance", "Medical Software", "Healthcare APIs"]
    }
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Medical Director, HealthFirst Clinic",
      content: "Aiveen Labs transformed our patient management system with their Java expertise. The new platform improved our efficiency by 40% and enhanced patient care.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, MedTech Solutions",
      content: "Their AWS cloud migration expertise helped us scale our healthcare platform seamlessly. The team's understanding of HIPAA compliance was invaluable.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO, CareConnect Hospitals",
      content: "The React-based patient portal Aiveen Labs built has revolutionized how our patients interact with our services. User satisfaction increased dramatically.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Logo />
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'about', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-primary-600 transition-colors ${
                    activeSection === section ? 'text-primary-600 font-semibold' : 'text-neutral-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <ChevronDown className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-neutral-200">
              <div className="flex flex-col space-y-4">
                {['home', 'services', 'about', 'testimonials', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left hover:text-primary-600 transition-colors ${
                      activeSection === section ? 'text-primary-600 font-semibold' : 'text-neutral-600'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 hero-background">
        <div className="relative z-10 container-custom section-padding">
          <div className="lg:w-1/2 lg:ml-auto text-center lg:text-right">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6"
            >
              Healthcare Technology
              <span className="gradient-text"> Solutions</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white mb-8"
            >
              Aiveen Labs specializes in Java development, AWS cloud solutions, and modern frontend technologies 
              to deliver innovative healthcare software that improves patient care and operational efficiency.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-secondary"
              >
                View Our Services
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Specialized Services</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Cutting-edge technology solutions tailored for healthcare organizations, built with Java, AWS, and modern frontend frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card"
              >
                <div className="text-primary-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">Trusted by Healthcare Leaders</h2>
              <p className="text-lg text-neutral-600 mb-8">
                We combine deep technical expertise in Java, AWS, and modern frontend technologies with 
                specialized knowledge of healthcare regulations and workflows to deliver solutions that 
                enhance patient care and operational efficiency.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Code className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Java Excellence</h3>
                    <p className="text-neutral-600">Enterprise-grade Java applications with Spring Boot, microservices, and robust architecture.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Cloud className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">AWS Expertise</h3>
                    <p className="text-neutral-600">Scalable cloud solutions with AWS best practices, security, and cost optimization.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Heart className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Healthcare Focus</h3>
                    <p className="text-neutral-600">HIPAA-compliant solutions designed specifically for medical practices and healthcare organizations.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Technology Stack</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Java Development</span>
                  <span className="text-primary-600 font-semibold">95%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">AWS Cloud Solutions</span>
                  <span className="text-primary-600 font-semibold">90%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">React & Vue.js</span>
                  <span className="text-primary-600 font-semibold">88%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Healthcare Solutions</span>
                  <span className="text-secondary-600 font-semibold">92%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-secondary-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Healthcare Leaders Trust Us</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Serving medical practices and healthcare organizations across the USA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="testimonial-card"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Healthcare Technology?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Let's discuss how our Java, AWS, and frontend expertise can enhance your healthcare operations and patient care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-primary-200" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="opacity-90">hello@aiveenlabs.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-primary-200" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="opacity-90">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-primary-200" />
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="opacity-90">123 Tech Street, Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-xl"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Dr. John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="john@healthcareclinic.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Healthcare Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your Medical Practice"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Tell us about your healthcare technology needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-secondary-100 transition-colors"
                >
                  Start Your Healthcare Project
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Aiveen Labs</h3>
            <p className="text-neutral-400 mb-6">
              Specialized healthcare technology solutions with Java, AWS, and modern frontend expertise
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://www.linkedin.com/company/aiveen-labs/posts/?feedView=all" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">GitHub</a>
            </div>
            <p className="text-neutral-500 text-sm">
              © 2024 Aiveen Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 