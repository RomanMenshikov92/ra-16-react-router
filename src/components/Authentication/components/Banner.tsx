import React from "react";
import { BannerProps } from "../interfaces/InterfaceBanner";

export const Banner: React.FC<BannerProps> = ({ title, description }: BannerProps) => {
  return (
    <div className="main__neto-banner">
      <div className="main__neto-title">{title}</div>
      <div className="main__neto-description">{description}</div>
    </div>
  );
};
