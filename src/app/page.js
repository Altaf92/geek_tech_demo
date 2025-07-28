'use client';
import Image from "next/image";
import HomeProductSection from "@/components/HomeProductSection";
import BrandTabSection from "@/components/BrandTabSection";
import ImageSlider from "@/components/ImageSlider";
import CategorySection from "@/components/CategoryList";
import TestimonialSlider from "@/components/TestimonialSlider";
import BlogSection from "@/components/BlogSection";
import ServiceTabSection from "@/components/ServiceTabSection";
import FaqSection from "@/components/FaqSection";
import HomeAbout from "@/components/HomeAbout";
import CoreServices from "@/components/SmartItServices";
import SupportServices from "@/components/SupportServices";
import ServiceSection from "@/components/ServiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <main>
      {/* Body Container  */}
      <div id="page-content" className="mb-0">

        {/* Home Slideshow */}
        <ImageSlider />

        {/* Product section */}
        <HomeProductSection />

        {/* Service Section */}
        <ServiceSection />

        {/* Core IT Services */}
        <CoreServices />

        {/* Home About Section */}
        <HomeAbout />

        {/* Support Services */}
        <SupportServices />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Brand-based Product Tab Section */}
        {/* <BrandTabSection /> */}

        {/* Service Tab Section */}
        {/* <ServiceTabSection /> */}

        {/* FAQ Section */}
        <FaqSection />

        {/* Blog Section */}
        <BlogSection />

      </div>
    </main>
  );
}
