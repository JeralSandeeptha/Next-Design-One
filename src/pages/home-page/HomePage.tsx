import React from "react";
import "./HomePage.scss";
import { HomePageProps } from "@/types/pages";
import SideImages from "@/components/sideimages/SideImages";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact-section/Contact";

const HomePage = (props: HomePageProps) => {
  return (
    <>
      <SideImages />
      <Contact />
      <Footer />
    </>
  )
};

export default HomePage;
