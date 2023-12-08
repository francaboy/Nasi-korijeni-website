import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProjectOne from "@/components/ProjectOne/ProjectOne";
import React from "react";

const Galerija = () => {
  return (
    <Layout pageTitle="Galerija">
      <PageHeader title="Galerija" />
      <ProjectOne projectPage />
    </Layout>
  );
};

export default Galerija;
