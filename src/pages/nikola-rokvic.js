import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";

import Nikola1 from "@/components/ProjectDetails/nikola1";

import React from "react";

const Nikola = () => {
  return (
    <Layout pageTitle="Детаљи">
      <PageHeader page="Догађаји" title="Детаљи догађаја" />
      <Nikola1 />
    </Layout>
  );
};

export default Nikola;
