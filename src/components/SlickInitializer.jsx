'use client';
import { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';

export default function SlickInitializer({ selector = '.product-slider-4items' }) {
  useEffect(() => {
    const slider = $(selector);

    // Wait for DOM to be fully rendered
    const timeout = setTimeout(() => {
      // Check if already initialized
      if (slider.hasClass('slick-initialized')) {
        try {
          slider.slick('unslick'); // safely destroy
        } catch (e) {
          console.warn('Slick unslick error:', e.message);
        }
      }

      try {
        slider.slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          infinite: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: { slidesToShow: 3 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 2 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 1 },
            },
          ],
        });
      } catch (e) {
        console.error('Slick init failed:', e.message);
      }
    }, 100); // small delay ensures clean DOM

    return () => {
      // Cleanup on unmount
      if (slider.hasClass('slick-initialized')) {
        try {
          slider.slick('unslick');
        } catch (e) {
          console.warn('Cleanup unslick failed:', e.message);
        }
      }
      clearTimeout(timeout);
    };
  }, [selector]);

  return null;
}
