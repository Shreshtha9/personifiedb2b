// src/components/AboutHeader.jsx

import { motion, useInView } from "framer-motion";
import React, { useState, useEffect,useRef } from "react";
// import AOS from "aos";
import "aos/dist/aos.css";

import { CheckCircle, Award, ArrowUpRight } from 'lucide-react';
import Upnav from "../components/Upnav"
import Lownav from "../components/Lownav";
// import PricingPlanComponent from "../components/ViewPlan";
// import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import LatestProject from "../components/LatestProject";
import Logoscroll from "../components/Logoscroll";
import HowItWork from "../components/HowItWork";

import ProjectStatsComponent from "../components/ProjectStatsComponent";

const About = () => { 
  useEffect(() => {
      // Import AOS CSS
      const aosCSS = document.createElement('link');
      aosCSS.rel = 'stylesheet';
      aosCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
      document.head.appendChild(aosCSS);
  
      // Import AOS JS
      const aosScript = document.createElement('script');
      aosScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
      aosScript.async = true;
      aosScript.onload = () => {
        // Initialize AOS once script is loaded
        if (window.AOS) {
          window.AOS.init({
            duration: 1000,
            once: false,
          });
        }
      };
      document.body.appendChild(aosScript);
  
      // Cleanup function
      return () => {
        if (document.head.contains(aosCSS)) {
          document.head.removeChild(aosCSS);
        }
        if (document.body.contains(aosScript)) {
          document.body.removeChild(aosScript);
        }
      };
    }, []);
  return (
    <> <Upnav/>
      <Lownav/>
{/*  about section */}
    <div className="relative w-full h-[300px] mt-[100px] sm:mt-[120px] md:mt-[144px] bg-gradient-to-r from-[#302600] via-[#121b1a] to-[#08231f] flex flex-col items-center justify-center text-white overflow-hidden">
  {/* Background swirl-like circles */}
  <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-600 opacity-10 top-[20%] left-[15%]"></div>
  <div className="absolute w-[200px] h-[200px] rounded-full border border-gray-600 opacity-10 bottom-[10%] right-[10%]"></div>

  {/* Title */}
  <h1 className="mt-4 text-3xl font-extrabold z-10">About US</h1>
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
        <Logoscroll/>
        <LatestProject/>
        <HowItWork/>
        <ProjectStatsComponent/>
        {/* <PricingPlanComponent/> */}
       {/* our vesion section  */}
     <div className="min-h-screen bg-darkGreen text-white p-4 md:p-8 lg:p-12 relative overflow-hidden">
      {/* Star at left mid */}
      <img
        decoding="async"
        src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/star.png"
        alt="Services"
        className="star__shap absolute left-4 md:left-8 lg:left-12 top-1/2 transform -translate-y-1/2 w-20 md:w-24 lg:w-32 h-auto aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="0"
        data-aos-duration="1000"
      />

    

      {/* Lines at bottom right */}
      <img
        decoding="async"
        src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/rat_agal.png"
        alt="About Shape Image 2"
        className="rat_agal absolute bottom-0 right-0 w-48 md:w-64 lg:w-80 h-auto aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="0"
        data-aos-duration="1000"
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <span className="inline-block bg-[#1E2E2B]  text-[#F7D270] px-6 py-2 rounded-md text-lg font-bold tracking-wide">
            Our Vision
          </span>
        </div>

        {/* Side by side grid on larger screens, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div className="p-6 rounded-lg transition-all duration-300 hover:bg-[#efe0b8] hover:text-emerald-900 border border-emerald-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              At Queen B2M leadership, our mission is to revolutionize the
              full-time literacy landscape through its world-leading strategies,
              cutting-edge technology, and deep understanding of our clients'
              unique needs and aspirations.
            </p>
            <p>
              We strive to be the trusted partner that guides businesses
              towards sustainable growth and prosperity.
            </p>
          </div>

          {/* Our Approach */}
          <div className="p-6 rounded-lg transition-all duration-300 hover:bg-[#efe0b8] hover:text-emerald-900 border border-emerald-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Approach</h2>
            <p className="mb-4">
              We believe in the power of data-driven insights, creative
              ingenuity, and a relentless pursuit of excellence.
            </p>
            <p>
              Our approach is rooted in a deep understanding of market dynamics,
              enabling us to continuously transform solutions and directly
              address the challenges and opportunities faced by our clients.
            </p>
          </div>

          {/* Our Values */}
          <div className="p-6 rounded-lg transition-all duration-300 hover:bg-[#efe0b8] hover:text-emerald-900 border border-emerald-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
            <p className="mb-4">
              <span className="font-semibold">Innovation:</span> We are committed to
              exploring new frontiers and pushing the boundaries to deliver
              fresh, impactful strategies.
            </p>
            <p>
              <span className="font-semibold">Collaboration:</span> Our success is
              linked to the success of our clients. We believe in building strong,
              collaborative partnerships to achieve common goals.
            </p>
          </div>

          {/* Our Vision */}
          <div className="p-6 rounded-lg transition-all duration-300 hover:bg-[#efe0b8] hover:text-emerald-900 border border-emerald-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="mb-4">
              <span className="font-semibold">Integrity:</span> Trust is at the core
              of everything we do. We uphold the highest standards of integrity
              in all our interactions.
            </p>
            <p>
              <span className="font-semibold">Results:</span> We are focused on
              achieving tangible, measurable results for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
       
        {/* <Feedback/> */}

        <Footer/>

        
 </>
  );
};

export default About;