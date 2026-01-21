"use client";
import heroPerson from "@/assets/hero-person.png";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";
import uiux from "@/assets/UIUX.png";
import projectdel from "@/assets/project-del.png";
import frontend from "@/assets/frontend.png";
import backend from "@/assets/backend.png";
import Image from "next/image";
import { RiFlashlightLine } from "react-icons/ri";
import { GrFormNextLink, GrFormPreviousLink, GrGithub } from "react-icons/gr";
import { BiLogoFacebook } from "react-icons/bi";
import { TbBrandLinkedin } from "react-icons/tb";
import { TiSocialTwitter } from "react-icons/ti";
import { IoIosStar } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(221,83%,53%)] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center">
              <RiFlashlightLine className="text-blue-600 text-xl" />
            </div>
            <span className="text-white font-semibold text-lg">Golio</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About", "Services", "Portfolio", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/80 hover:text-white transition text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <GrGithub className="text-white hover:text-blue-400 cursor-pointer" />
            <BiLogoFacebook className="text-white hover:text-blue-400 text-xl cursor-pointer" />
            <TbBrandLinkedin className="text-white hover:text-blue-400 text-2xl cursor-pointer" />
            <TiSocialTwitter className="text-white hover:text-blue-400 cursor-pointer" />
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } bg-[hsl(221,83%,53%)] border-y border-white`}
        >
          <nav className="flex flex-col gap-4 px-6 py-6">
            {["Home", "About", "Services", "Portfolio", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/90 hover:text-white text-base font-medium"
              >
                {item}
              </a>
            ))}

            <div className="flex gap-4 pt-4 border-t border-white/20">
              <GrGithub className="text-white" />
              <BiLogoFacebook className="text-white text-xl" />
              <TbBrandLinkedin className="text-white text-2xl" />
              <TiSocialTwitter className="text-white" />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[hsl(221,83%,53%)] pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1
                className="text-white font-bold leading-tight mb-6
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl mx-auto md:mx-0"
              >
                The easiest way to create your website.
              </h1>

              <p
                className="text-white/80 mb-8
          text-base sm:text-lg max-w-lg mx-auto md:mx-0"
              >
                Golio gives you everything you need to create your website in
                minutes, Bootstrap code with well-organized Figma files to
                design and develop your next websites faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="inline-flex items-center justify-center gap-2 bg-white text-[hsl(221,83%,53%)] font-semibold px-6 py-3 rounded-lg hover:scale-105 transition">
                  Get Started <GrFormNextLink size={20} />
                </button>

                <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[hsl(221,83%,53%)] transition">
                  View Preview
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute top-2 -right-4 w-72 h-72 md:w-96 md:h-96 bg-white/20 rounded-full"></div>

                <Image
                  src={heroPerson}
                  alt="Professional"
                  priority
                  className="relative z-10 w-64 sm:w-72 md:w-90 h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Our featured
              </h2>
              <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(221,83%,53%)]">
                projects
              </h2>
            </div>

            <div className="md:max-w-lg space-y-4">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, odio fugiat quis ducimus perferendis itaque
                cupiditate officiis.
              </p>

              <button className="inline-flex items-center gap-2 text-[hsl(221,83%,53%)] font-semibold hover:gap-3 transition">
                View all projects <GrFormNextLink size={20} />
              </button>
            </div>
          </div>

          <div className="space-y-10">
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition md:grid md:grid-cols-2 md:gap-10">
              <Image
                src={project1}
                alt="PWA Project"
                className="w-full h-56 sm:h-72 md:h-full object-cover"
              />

              <div className="p-6 space-y-4">
                <span className="text-xs text-[hsl(221,83%,53%)] font-semibold uppercase">
                  Website Design
                </span>

                <h3 className="text-xl font-semibold text-gray-900">
                  PMR — Online platform & responsive website design
                </h3>

                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, accusantium pariatur incidunt rem laborum accusamus
                  laudantium ex perspiciatis ullam.
                </p>

                <a className="inline-block text-[hsl(221,83%,53%)] font-medium hover:underline">
                  View Case Study →
                </a>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition grid grid-cols-1 md:grid-cols-2 gap-10">
              <Image
                src={project2}
                alt="Trevo Project"
                className="w-full h-56 sm:h-72 object-cover md:order-2"
              />

              <div className="p-6 space-y-4 md:order-1">
                <span className="text-xs text-[hsl(221,83%,53%)] font-semibold uppercase">
                  eCommerce
                </span>

                <h3 className="text-lg font-semibold text-gray-900">
                  Trevo — responsive eCommerce website design
                </h3>

                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  nostrum laudantium beatae deserunt adipisci.
                </p>

                <a className="inline-block text-[hsl(221,83%,53%)] font-medium hover:underline">
                  View Case Study →
                </a>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition md:flex md:gap-10">
              <Image
                src={project3}
                alt="Systeno Project"
                className="w-full md:w-[45%] h-56 sm:h-72 md:h-full object-cover"
              />

              <div className="p-6 space-y-4 flex-1">
                <span className="text-xs text-[hsl(221,83%,53%)] font-semibold uppercase">
                  Mobile App
                </span>

                <h3 className="text-lg font-semibold text-gray-900">
                  Systeno — responsive website design
                </h3>

                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit ipsa aliquid quis accusantium laboriosam.
                </p>

                <a className="inline-block text-[hsl(221,83%,53%)] font-medium hover:underline">
                  View Case Study →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[hsl(221,83%,53%)] py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2
            className="text-white font-bold leading-tight mb-4
      text-2xl sm:text-3xl md:text-4xl"
          >
            Beautiful UI kit designed
            <br className="hidden sm:block" />
            to grow your business.
          </h2>

          <p className="text-white/80 max-w-xl mx-auto mb-14">
            Everything you need to build modern, responsive websites and
            applications.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <div
              className="group bg-white rounded-xl p-6 flex gap-5 text-left
        shadow-sm hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-[hsl(221,83%,53%)]/10 rounded-lg flex items-center justify-center shrink-0">
                <Image src={uiux} alt="UI UX" className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  UI/UX Design
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid vitae consequuntur dignissimos tempora.
                </p>

                <button
                  className="mt-3 inline-flex items-center gap-2
            text-[hsl(221,83%,53%)] font-medium group-hover:gap-3 transition"
                >
                  Learn More <GrFormNextLink size={18} />
                </button>
              </div>
            </div>

            <div
              className="group bg-white rounded-xl p-6 flex gap-5 text-left
        shadow-sm hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-[hsl(221,83%,53%)]/10 rounded-lg flex items-center justify-center shrink-0">
                <Image
                  src={projectdel}
                  alt="Project Delivery"
                  className="w-6 h-6"
                />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Project Delivery
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid vitae consequuntur dignissimos tempora.
                </p>

                <button
                  className="mt-3 inline-flex items-center gap-2
            text-[hsl(221,83%,53%)] font-medium group-hover:gap-3 transition"
                >
                  Learn More <GrFormNextLink size={18} />
                </button>
              </div>
            </div>

            <div
              className="group bg-white rounded-xl p-6 flex gap-5 text-left
        shadow-sm hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-[hsl(221,83%,53%)]/10 rounded-lg flex items-center justify-center shrink-0">
                <Image src={frontend} alt="Frontend" className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Front-end Development
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid vitae consequuntur dignissimos tempora.
                </p>

                <button
                  className="mt-3 inline-flex items-center gap-2
            text-[hsl(221,83%,53%)] font-medium group-hover:gap-3 transition"
                >
                  Learn More <GrFormNextLink size={18} />
                </button>
              </div>
            </div>

            <div
              className="group bg-white rounded-xl p-6 flex gap-5 text-left
        shadow-sm hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-[hsl(221,83%,53%)]/10 rounded-lg flex items-center justify-center shrink-0">
                <Image src={backend} alt="Backend" className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Data & Analytics
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid vitae consequuntur dignissimos tempora.
                </p>

                <button
                  className="mt-3 inline-flex items-center gap-2
            text-[hsl(221,83%,53%)] font-medium group-hover:gap-3 transition"
                >
                  Learn More <GrFormNextLink size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[hsl(220,14%,96%)] py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
              What clients say
            </h2>

            <div className="flex items-center gap-3 justify-center md:justify-end">
              <button className="w-9 h-9 flex items-center justify-center rounded-full border border-[hsl(221,83%,53%)] text-[hsl(221,83%,53%)] hover:bg-[hsl(221,83%,53%)] hover:text-white transition">
                <GrFormPreviousLink size={18} />
              </button>

              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[hsl(221,83%,53%)] text-white hover:scale-105 transition">
                <GrFormNextLink size={18} />
              </button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={testimonial1}
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">CEO, TechStart</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                “Working with Golio was a game-changer for our business. They
                delivered beyond our expectations.”
              </p>

              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <IoIosStar key={i} className="text-[hsl(45,93%,58%)]" />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={testimonial2}
                  alt="Michael Chen"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                  <p className="text-gray-500 text-sm">Founder, DigitalFlow</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                “The attention to detail and creativity in their work is
                outstanding. Highly recommended!”
              </p>

              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <IoIosStar key={i} className="text-[hsl(45,93%,58%)]" />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={testimonial3}
                  alt="Emily Davis"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Emily Davis</h4>
                  <p className="text-gray-500 text-sm">Marketing Director</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                “Professional team that truly understands modern web design. Our
                new site converts like never before.”
              </p>

              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <IoIosStar key={i} className="text-[hsl(45,93%,58%)]" />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === 2 ? "w-4 bg-[hsl(221,83%,53%)]" : "w-2 bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <span className="text-[hsl(221,83%,53%)] text-sm font-semibold uppercase tracking-wide">
            Our Blog
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4">
            Latest blog & news
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-14">
            Stay updated with our latest insights on design, development, and
            digital trends.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-white rounded-xl overflow-hidden text-left shadow-sm hover:shadow-xl transition">
              <div className="overflow-hidden">
                <Image
                  src={blog1}
                  alt="Blog Post"
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5">
                <span className="text-xs text-[hsl(221,83%,53%)] font-medium">
                  Design • Jan 15, 2024
                </span>

                <h3 className="font-semibold text-gray-900 mt-2 mb-2 leading-snug">
                  How to build effective design teams
                </h3>

                <p className="text-gray-600 text-sm">
                  Learn the key strategies for creating high-performing design
                  teams...
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden text-left shadow-sm hover:shadow-xl transition">
              <div className="overflow-hidden">
                <Image
                  src={blog2}
                  alt="Blog Post"
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5">
                <span className="text-xs text-[hsl(221,83%,53%)] font-medium">
                  Development • Jan 12, 2024
                </span>

                <h3 className="font-semibold text-gray-900 mt-2 mb-2 leading-snug">
                  The future of web development in 2024
                </h3>

                <p className="text-gray-600 text-sm">
                  Explore the latest trends and technologies shaping the web...
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden text-left shadow-sm hover:shadow-xl transition">
              <div className="overflow-hidden">
                <Image
                  src={blog3}
                  alt="Blog Post"
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5">
                <span className="text-xs text-[hsl(221,83%,53%)] font-medium">
                  Productivity • Jan 10, 2024
                </span>

                <h3 className="font-semibold text-gray-900 mt-2 mb-2 leading-snug">
                  Remote work tips for designers
                </h3>

                <p className="text-gray-600 text-sm">
                  Maximize your productivity while working from anywhere...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(221,83%,53%)] pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                  <RiFlashlightLine className="text-[hsl(221,83%,53%)] text-xl" />
                </div>
                <span className="text-white font-semibold text-lg">Golio</span>
              </div>

              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                Building beautiful websites and digital experiences for
                businesses worldwide.
              </p>

              <div className="flex gap-4 mt-4">
                <GrGithub className="text-white/70 hover:text-white cursor-pointer" />
                <BiLogoFacebook className="text-white/70 hover:text-white cursor-pointer text-lg" />
                <TbBrandLinkedin className="text-white/70 hover:text-white cursor-pointer text-xl" />
                <TiSocialTwitter className="text-white/70 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {["About Us", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 text-sm hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {["Web Design", "Development", "Branding"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 text-sm hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-white/70 text-sm">info@golio.com</p>
              <p className="text-white/70 text-sm mt-2">+91 XXXXXXXXXX</p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm text-center">
              © 2024 Golio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
