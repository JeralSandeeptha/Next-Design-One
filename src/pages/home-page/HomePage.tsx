import React from "react";
import "./HomePage.scss";
import { HomePageProps } from "@/types/pages";
import SideImages from "@/components/sideimages/SideImages";
import Footer from "@/components/footer/Footer";

const HomePage = (props: HomePageProps) => {
  return (
    <>
      <SideImages />
      <Footer />
    </>
  )
};

export default HomePage;
