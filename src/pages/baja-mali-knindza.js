import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import Baja1 from "@/components/ProjectDetails/baja1";


import Zorica1 from "@/components/ProjectDetails/zorica1";

import React from "react";

const Baja = () => {
  return (
    <Layout pageTitle="Детаљи">
      <PageHeader page="Догађаји" title="Детаљи догађаја" />
      <Baja1 />
    </Layout>
  );
};

export default Baja;
