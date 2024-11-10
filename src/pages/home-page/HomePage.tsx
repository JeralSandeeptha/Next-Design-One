import React from "react";
import "./HomePage.scss";
import { HomePageProps } from "@/types/pages";
import SideImages from "@/components/sideimages/SideImages";

const HomePage = (props: HomePageProps) => {
  return (
    <>
      <SideImages />
    </>
  )
};

export default HomePage;
