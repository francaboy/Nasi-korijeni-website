import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProjectDetailsPage from "@/components/ProjectDetails/ProjectDetailsPage";

import React from "react";

const ProjectDetails = () => {
  return (
    <Layout pageTitle="Detalji">
      <PageHeader page="Galerija" title="Detalji događaja" />
      <ProjectDetailsPage />
    </Layout>
  );
};

export default ProjectDetails;
