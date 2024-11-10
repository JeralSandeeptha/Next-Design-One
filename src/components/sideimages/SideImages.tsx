import React from "react";
import "./SideImages.scss";
import { SideImagesComponentProps } from "@/types/components";

const SideImages = (props: SideImagesComponentProps) => {
  return (
    <div className="side-images">
      <div className="left-image-container"></div>
      <div className="right-image-container">
        <div className="side-image-content">
          <h1 className="side-images-header">Green Atelier</h1>
          <h4 className="side-images-subheader">this is your assistant</h4>
        </div>
        <h4 className="bottom-subheader">IN DESIGN</h4>
      </div>
    </div>
  );
};

export default SideImages;
