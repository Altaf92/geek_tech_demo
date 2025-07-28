import AboutService from '@/components/AboutService'
import AboutSection from '@/components/HomeAbout'
import TestimonialsSection from '@/components/TestimonialsSection'
import WebsiteCounter from '@/components/WebsiteCounter'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="page-header text-center w-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <div className="page-title">
                <h1>Pricing</h1>
              </div>
              <div className="breadcrumbs">
                <Link href="/" title="Back to the home page">Home</Link>
                <span className="main-title">
                  <i className="icon anm anm-angle-right-l"></i> About Us
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutSection />


      <AboutService />

      <WebsiteCounter />

      <TestimonialsSection />

    </div>
  )
}

export default page
