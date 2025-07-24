'use client'
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
<<<<<<< HEAD
=======
import ServiceSection from "@/components/ServiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
>>>>>>> master


export default function Home() {
  return (
    <main>
      {/* Body Container  */}
      <div id="page-content" className="mb-0">

        {/* Home Slideshow  */}
        <ImageSlider />

        {/* service section  */}



        {/* Product category section */}
        {/* <CategorySection /> */}

        {/* product section  */}
        <HomeProductSection />

<<<<<<< HEAD
        {/* home section  */}
        {/* <HomeAbout /> */}
        <CoreServices />

=======
        <ServiceSection />

        {/* core service section  */}
        <CoreServices />


        {/* home section  */}
        <HomeAbout />

        <SupportServices />


        {/* testimonial section  */}
        <TestimonialsSection />

>>>>>>> master
        {/* product by brand tab section   */}
        {/* <BrandTabSection /> */}

        {/* service Tab Section  */}
<<<<<<< HEAD
        <ServiceTabSection />
=======
        {/* <ServiceTabSection /> */}
>>>>>>> master

        {/* sale banner  */}
        {/* <div className="section parallax-banner-style1 py-0 bg-light">
          <div className="row justify-content-center mx-0">
            <div className="col-6">
                <div
            className="hero hero-large hero-overlay bg-size"
            style={{
                position: "relative",
                paddingBottom: "50.25%", // controls height
                height: 0,
                overflow: "hidden",
              }}
          >
            <iframe
              src="https://www.youtube.com/embed/iE_iKL0qTEY?autoplay=1&mute=1&loop=1&playlist=iE_iKL0qTEY"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
            </div>
          </div>
        </div> */}

<<<<<<< HEAD
        <SupportServices />
=======
>>>>>>> master



        {/* testimonial section  */}
<<<<<<< HEAD
        <section className="section testimonial-slider style1 mt-1">
          <TestimonialSlider />
        </section>

                {/* faq section  */}
=======
        {/* <section className="section testimonial-slider style1 mt-1">
          <TestimonialSlider />
        </section> */}

        {/* faq section  */}
>>>>>>> master
        <FaqSection />

        {/* blog section  */}
        <BlogSection />

      </div>
    </main>
  );
}
