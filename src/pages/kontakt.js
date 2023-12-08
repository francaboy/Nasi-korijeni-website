import ContactPage from "@/components/ContactPage/ContactPage";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import Layout from "@/components/Layout/Layout";

import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Kontakt = () => {
  return (
    <Layout pageTitle="Kontakt">
      <PageHeader title="Kontakt" />

      <ContactPage />
      <GoogleMap />
    </Layout>
  );
};

export default Kontakt;
