import Inquiry from "@/components/Inquiry";
import Layout from "@/components/Layout";
import SubHero from "@/components/SubHero";
import React from "react";

function Contact() {
  return (
    <Layout>
      <SubHero head={"Contact us"} />
      <Inquiry />
    </Layout>
  );
}

export default Contact;
