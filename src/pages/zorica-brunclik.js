import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";


import Zorica1 from "@/components/ProjectDetails/zorica1";

import React from "react";

const Zorica = () => {
  return (
    <Layout pageTitle="Детаљи">
      <PageHeader page="Догађаји" title="Детаљи догађаја" />
      <Zorica1 />
    </Layout>
  );
};

export default Zorica;
