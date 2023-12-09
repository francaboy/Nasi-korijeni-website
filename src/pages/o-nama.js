import AboutPage from "@/components/AboutPage/AboutPage";
import BestAgency from "@/components/BestAgency/BestAgency";
import BrandOne from "@/components/BrandOne/BrandOne";
import DesignStudio from "@/components/DesignStudio/DesignStudio";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";

// import TestimonialTwo from "@/components/TestimonialTwo/TestimonialTwo";
import React from "react";

const O_nama = () => {
  return (
    <Layout pageTitle="О нама">
      <PageHeader page="О нама" title="О нама" />
      <AboutPage />
      <BrandOne />
      <DesignStudio className="services-page-design-studio" />
      {/* <TestimonialTwo className="about-page-testimonial-two" /> */}

      <BestAgency className="about-page-best-agency" />
    </Layout>
  );
};

export default O_nama;
