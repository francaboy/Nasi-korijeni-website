import BlogPage from "@/components/BlogPage/BlogPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Dogadjaji = () => {
  return (
    <Layout pageTitle="Догађаји">
      <PageHeader page="Догађаји" title="ЗАВИЧАЈ ФЕСТИВАЛ" />
      <BlogPage />
    </Layout>
  );
};

export default Dogadjaji;
