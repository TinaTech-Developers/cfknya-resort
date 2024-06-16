import Layout from "@/components/Layout";
import SubHero from "@/components/SubHero";
import React from "react";
import About from "@/components/About";
import Inquiry from "@/components/Inquiry";
import Staff from "@/components/Staff";

function page() {
  return (
    <Layout>
      <SubHero head={"About Us"} />
      <Inquiry />
      <About />
      <Staff />
    </Layout>
  );
}

export default page;
