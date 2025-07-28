'use client';
import HomeProductSection from "@/components/HomeProductSection";
import ImageSlider from "@/components/ImageSlider";
import BlogSection from "@/components/BlogSection";
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
