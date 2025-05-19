
import { motion, useInView } from "framer-motion";
import React, { useState, useEffect,useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";
import { CheckCircle, Award } from 'lucide-react';
import Upnav from "../components/Upnav"
import Lownav from "../components/Lownav";

// import TestimonialSlider from "../components/Feedback";
import Footer from "../components/Footer";
import LatestProject from "../components/LatestProject";
import Logoscroll from "../components/logoscroll";
import HowItWork from "../components/HowItWork";
import ProjectStatsComponent from "../components/ProjectStatsComponent";

const ServiceCard = ({ service, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    
    <div
      className="relative rounded-md overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer w-full"
      style={{ aspectRatio: "1/1" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
          isHovered ? "opacity-70" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${service.image})` }}
      />

      {/* Card Bottom Content with ID and Title */}
      <div className="relative h-full flex flex-col items-start justify-end p-6 text-white z-10">
        <span
          className={`text-4xl font-bold transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {`0${service.id}`}
        </span>
        <span
          className={`text-3xl font-bold transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {service.title}
        </span>
      </div>

      {/* Hover Overlay */}
      <div
        className="absolute inset-x-0 bottom-0 text-black p-6 z-20 overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          height: isHovered ? "50%" : "0%",
          backgroundColor: isHovered
            ? "rgba(255, 209, 102, 0.9)"
            : "transparent",
          boxShadow: isHovered ? "0 -5px 15px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div
          style={{
            opacity: isHovered ? 1 : 0,
            transition: "opacity 300ms",
            transitionDelay: isHovered ? "200ms" : "0ms",
          }}
        >
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="mb-4">{service.description}</p>
          <a
  href={service.link}
  className="text-black hover:text-blue-400 hover:underline font-semibold transition duration-300"
>
  More Details→
</a>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const paragraphRef = useRef(null);
  const isInView = useInView(paragraphRef, { once: true, margin: "-100px" });
   const [hoveredCard, setHoveredCard] = useState(null);
  
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  const solution = [
    {
      id: "01",
      title: "Marketing Strategy",
      link: "/solution/marketing-strategy",
    },
    {
      id: "02",
      title: "Web Development",
      link: "/solution/web-development",
    },
    {
      id: "03",
      title: "Business Strategy",
      link: "/solution/business-strategy",
    },
    {
      id: "04",
      title: "Email Marketing",
      link: "/solution/email-marketing",
    },
    {
      id: "05",
      title: "Intent Leads",
      link: "/solution/intent-leads",
    },
    {
      id: "06",
      title: "SEO Optimization",
      link: "/solution/seo-optimization",
    },
  ];

  // Custom cursor state
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerEvents = () => {
      const pointerElements = document.querySelectorAll('a, button, .group');
      
      pointerElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsPointer(true));
        el.addEventListener('mouseleave', () => setIsPointer(false));
      });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    handlePointerEvents();

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);
    const services = [
      {
        id: 1,
        title: "Lead Generation",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        image: "/images/lead_gen.jpg",
        link: "/services/lead-generation", // Link for the specific service page
      },
      {
        id: 2,
        title: "Data Solutions",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        image: "/images/data_sol.jpg",
        link: "/services/data-solutions", // Link for the specific service page
      },
      {
        id: 3,
        title: "Account Based Marketing",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        image: "/images/account_based.jpg",
        link: "/services/account-based-marketing", // Link for the specific service page
      },
      {
        id: 4,
        title: "Web Design",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        image: "/images/web_development-1.png",
        link: "/services/web-design", // Link for the specific service page
      },
      {
        id: 5,
        title: "Display Advertisements",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        image: "/images/advertising.jpg",
        link: "/services/display-advertisements", // Link for the specific service page
      },
      {
        id: 6,
        title: "Market Analysis",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        image: "/images/analysis-1.jpg",
        link: "/services/market-analysis", // Link for the specific service page
      },
    ];

  return (
    <>
    <Upnav/>
    <Lownav/>
      {/* Hero Section */}
      <section className="relative bg-[#0E1F1C] text-white pt-[30px] lg:pt-20 pb-20 px-6 xl:px-32 min-h-[70vh] flex items-center justify-center overflow-hidden mt-24">
        {/* Background Image and Glow */}
        <div className="absolute inset-0 z-0 " >
          <img
            src="/images/hero-image.png"
            alt="Team working"
            className="w-full h-[300] object-fill opacity-30 md:opacity-40  " 
          />
          <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-gradient-radial from-[#F7D270]/60 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none animate-pulse" />
        </div>

        {/* ✨ Animated Circles & Shapes */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Abstract Line Structures */}
          <svg className="absolute top-10 left-10 w-40 h-40 opacity-10" viewBox="0 0 100 100" fill="none" stroke="#F7D270" strokeWidth="1">
            <rect x="10" y="10" width="80" height="80" rx="8" />
          </svg>

          <svg className="absolute bottom-10 right-10 w-32 h-32 opacity-10" viewBox="0 0 100 100" fill="none" stroke="#3ABF6E" strokeWidth="1">
            <circle cx="50" cy="50" r="40" />
          </svg>

          <svg className="absolute top-1/2 left-1/3 w-24 h-24 opacity-10 transform -translate-y-1/2" viewBox="0 0 100 100" fill="none" stroke="#ffffff" strokeWidth="1">
            <line x1="0" y1="0" x2="100" y2="100" />
            <line x1="100" y1="0" x2="0" y2="100" />
          </svg>

          <svg className="absolute top-[20%] right-[20%] w-16 h-16 opacity-10" viewBox="0 0 100 100" fill="none" stroke="#F7D270" strokeWidth="1">
            <polygon points="50,15 90,85 10,85" />
          </svg>

          {/* Extra Abstract Shapes - Hero */}
          <svg className="absolute top-8 right-20 w-16 h-16 opacity-10" viewBox="0 0 100 100" fill="none" stroke="#ffffff" strokeWidth="1">
            <rect x="20" y="20" width="60" height="60" rx="12" />
          </svg>

          <svg className="absolute bottom-16 left-24 w-12 h-12 opacity-10 rotate-12" viewBox="0 0 100 100" fill="none" stroke="#3ABF6E" strokeWidth="1">
            <polygon points="50,15 90,85 10,85" />
          </svg>

          <svg className="absolute top-32 left-1/2 w-6 h-6 opacity-10 transform -translate-x-1/2" viewBox="0 0 100 100" fill="none" stroke="#F7D270" strokeWidth="2">
            <line x1="10" y1="10" x2="90" y2="90" />
            <line x1="90" y1="10" x2="10" y2="90" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-y-12 md:gap-y-0">
          {/* Text Column */}
          <div className=" w-full md:w-[55%] space-y-6 lg:space-y-8 min-h-[550px] justify-center">
  <span
    className="inline-block bg-[#1E2E2B] text-[#F7D270] px-6 py-2 rounded-md text-lg xl:text-xl font-bold tracking-wide border border-[#3ABF6E]"
  >
    Digital Marketing Agency
  </span>

           <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-balance"
>
  <span className=" ">Digital Marketing</span><br className="hidden lg:block" />
  <span>Solution For Your Business</span>
</motion.h1>



            <motion.p
              ref={paragraphRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gray-300 text-base xl:text-lg leading-relaxed"
            >
              Digital marketing agencies often run paid advertising campaigns for themselves.
              This includes creating compelling ad copy for platforms like Google Ads,
              Facebook Ads, and LinkedIn Ads.
            </motion.p>

            <div className="relative inline-block">
              <div className="absolute inset-0 w-full h-full bg-gradient-radial from-[#F7D270]/60 to-transparent rounded-full blur-2xl opacity-60 animate-pulse z-[-1]" />
     <button className="relative overflow-hidden bg-[#1E2E2B] group px-6 py-3 rounded-md border border-[#3ABF6E] text-white text-base xl:text-lg  hover:text-black  z-10">
  <span className="relative z-10">Schedule a Free Consultation →</span>

  {/* Yellow wave */}
  <span className="absolute inset-0 bg-gradient-to-r from-[#F7D270] to-[#F7D270]/60 blur-sm translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

</button>



            </div>
          </div>

          {/* Optional Right Column (image or visual) */}
          <div className="md:w-1/2 flex justify-center"></div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative bg-[#0E1F1C] text-white py-20 px-6 md:px-20">
        {/* Extra Abstract Shapes - About Us */}
        <svg className="absolute top-10 left-10 w-14 h-14 opacity-10" viewBox="0 0 100 100" fill="none" stroke="#F7D270" strokeWidth="1.5">
          <circle cx="50" cy="50" r="40" />
        </svg>

        <svg className="absolute bottom-12 right-12 w-20 h-20 opacity-10" viewBox="0 0 100 100" fill="none" stroke="#3ABF6E" strokeWidth="1.5">
          <rect x="10" y="10" width="80" height="80" rx="10" />
        </svg>

        <svg className="absolute top-1/2 right-[25%] w-6 h-6 opacity-10 transform -translate-y-1/2 rotate-45" viewBox="0 0 100 100" fill="none" stroke="#ffffff" strokeWidth="2">
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="0" y1="50" x2="100" y2="50" />
        </svg>

        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Side: Image */}
          <div className="md:w-7/12">
            <img
              src="/images/about-team.jpg"
              alt="Team working together"
              className="rounded-lg shadow-lg h-[550px] object-cover w-full"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="md:w-1/2 space-y-6">
            <span className="inline-block bg-[#1E2E2B] text-[#F7D270] px-6 py-2 rounded-md text-lg font-bold tracking-wide">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Save Your Time And <br /> Money With Our Agencies
            </h2>
            <p className="text-gray-300">
              Digital marketing agencies often run paid advertising campaigns for themselves. This includes creating compelling.
            </p>
 
            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#F7D270] text-black p-3 rounded-full text-xl">💰</div>
                <div>
                  <h4 className="text-lg font-bold">Experience and Expertise</h4>
                  <p className="text-gray-300">
                    Digital marketing agencies often run paid advertising campaigns for themselves. This includes creating compelling ad.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#F7D270] text-black p-3 rounded-full text-xl">🛠️</div>
                <div>
                  <h4 className="text-lg font-bold">Customized Solutions</h4>
                  <p className="text-gray-300">
                    Agencies tailor marketing strategies to each business's needs.
                  </p>
                </div>
              </div>
              
            </div>

            {/* More About Us Button */}
            <div className="pt-4">
              <button className="relative overflow-hidden group px-6 py-3 rounded-md border border-[#3ABF6E] text-white text-base xl:text-lg transition duration-300 bg-[#1E2E2B] hover:text-black z-10">
  <span className="relative z-10">More About Us →</span>

  {/* Yellow wave background */}
   <span className="absolute inset-0 bg-gradient-to-r from-[#F7D270] to-[#F7D270]/60 blur-sm translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
</button>

            </div>
          </div>
        </div>
      </section>
      <Logoscroll/>
      {/* service section */}
       <div className="bg-darkGreen py-12 px-4 sm:px-6 lg:px-8 min-h-screen relative overflow-hidden">
      {/* Decorative Star - Left Side */}
      <img
        src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/star.png"
        alt="Star"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="0"
        data-aos-duration="1000"
        className="absolute left-0 top-28 w-20 sm:w-28 lg:w-36 z-0 opacity-70"
      />

      {/* Decorative Half Circle - Right Side */}
      <img
        src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/circle.png"
        alt="Circle"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="0"
        data-aos-duration="1000"
        className="absolute right-0 bottom-0 w-32 sm:w-40 lg:w-52 z-0 opacity-70 xl:top-[calc(100%-30%)]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold tracking-wide uppercase text-lightYellow">
            Services
          </h2>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What Services We Provide
          </h1>
          <p className="mt-3 text-xl text-white sm:mt-4">For Your Business</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isHovered={hoveredCard === service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </div>
    {/*  why you choose kulan */}
     <section className="bg-[#0f2d26] text-white py-16 px-4 sm:px-8 lg:px-24">
      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Large Background Image */}
        <div className="absolute right-0 top-0 w-full lg:w-2/4 h-full">
          <img
            src="/images/workkulan.jpg"
            alt="Business Discussion"
            className="rounded-2xl w-full h-full object-cover"
            style={{
              minHeight: '500px',
              maxHeight: '800px'
            }}
          />
        </div>

        {/* Left Side Content Container */}
        <div className="relative z-10 lg:w-1/2">
          {/* Header Content */}
          <div className="mb-8 lg:mb-12">
            <button className="bg-[#b9aa86] text-[#0f2d26] px-6 py-3 rounded-lg font-semibold mb-6 hover:bg-[#d4c5a0] transition-colors">
              Why Choose Kulan
            </button>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Help Your Business To Grow Up More Stronger</h2>
            <p className="text-lg md:text-xl">
              Digital marketing agencies often run paid advertising campaigns for themselves. This includes creating compelling.
            </p>
          </div>

          {/* Awards Container - Overlapping Image */}
          <div className="bg-[#356e62] p-6 md:p-8 rounded-2xl shadow-lg mt-8 lg:mt-12 lg:-mr-16">
            <div className="flex items-center gap-4 md:gap-6 mb-6">
              <Award className="text-[#b9aa86] flex-shrink-0" size={36} />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">World Marketing Winning Awards 2023</h3>
            </div>
            
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3 md:gap-4">
                <CheckCircle className="text-[#b9aa86] mt-1 flex-shrink-0" size={20} />
                <span className="text-sm md:text-base lg:text-lg">
                  Allow customers to choose from various payment methods and offer flexible billing options to accommodate their financial preferences.
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <CheckCircle className="text-[#b9aa86] mt-1 flex-shrink-0" size={20} />
                <span className="text-sm md:text-base lg:text-lg">
                  Deliver excellent customer service through various channels, including phone, email, live chat, and in-person assistance at physical locations.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* solution */}
   <div className="bg-darkGreen min-h-screen w-full py-12 px-4 md:py-16 md:px-8 lg:px-12 relative overflow-hidden cursor-default">
  {/* Background decorative elements */}
  <div className="absolute left-0 bottom-0 w-20 h-20 rounded-full border border-[#f5d78c] opacity-20"></div>
  <div className="absolute right-8 bottom-40 w-32 h-32 rounded-full border border-[#f5d78c] opacity-10"></div>

  {/* Decorative Star - Fixed to the far left of the page */}
  <img
    src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/star.png"
    alt="Star"
    data-aos="fade-up"
    data-aos-delay="100"
    data-aos-offset="0"
    data-aos-duration="1000"
    className="absolute top-28 left-0 w-16 sm:w-20 lg:w-24 opacity-40 animate-float z-0 pointer-events-none"
  />

  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left side - solution List */}
      <div className="space-y-4">
        <div className="mb-6">
          <p className="text-white text-sm md:text-base max-w-lg">
            Our experienced consultants can assist you in aligning your IT
            strategy with your business objectives. We provide expert
            guidance on technology selection, system integration.
          </p>
        </div>

        {solution.map((service) => (
          <a 
            href={service.link} 
            key={service.id}
            className="block border-t border-[#304038] py-6 group hover:bg-[#1E2E2B]/30 transition-colors duration-300 px-2 rounded-md"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="text-[#f5d78c] text-sm">{service.id}</span>
                <h3 className="text-white font-medium text-lg">
                  {service.title}
                </h3>
              </div>
              <div className="text-white transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </a>
        ))}

        <div className="pt-8">
          <button className="relative overflow-hidden bg-[#1E2E2B] group px-6 py-3 rounded-md border border-[#3ABF6E] text-white text-base xl:text-lg hover:text-black z-10">
            <span className="relative z-10">View Our Solutions→</span>

            {/* Yellow wave */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#F7D270] to-[#F7D270]/60 blur-sm translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
          </button>
        </div>
      </div>

      {/* Right side - solution Heading and Image */}
      <div className="flex flex-col space-y-8">
        <p className="inline-block bg-[#1E2E2B] text-[#F7D270] px-6 py-2 rounded-md text-lg font-bold tracking-wide w-max">
          Our Solutions
        </p>
        <div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            What Solutions We Provide <br />
            For Your Business
          </h2>
        </div>

        <div className="relative">
          <div className="w-full h-auto overflow-hidden rounded-tl-3xl rounded-br-3xl">
            <img
              src="/images/solutions.jpg"
              alt="Team of professionals working together"
              className="w-full h-full object-cover rounded-tl-3xl rounded-tr-3xl rounded-br-[15rem] rounded-bl-3xl"
            />
          </div>

          {/* Decorative Half Circle - Right Side */}
          <img
            src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/circle.png"
            alt="Circle"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-duration="1000"
            className="absolute right-0 bottom-0 w-32 sm:w-40 lg:w-52 z-0 opacity-70 xl:top-[calc(100%-30%)]"
          />
        </div>
      </div>
    </div>
  </div>
</div>
<ProjectStatsComponent/>
    <LatestProject/>
    <HowItWork/>
  
    {/* <TestimonialSlider/> */}

    <Footer/>
    </>
  );
};

export default Home;
