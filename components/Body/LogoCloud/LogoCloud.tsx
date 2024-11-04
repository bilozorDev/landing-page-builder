import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React from "react";

const LogoCloud = ({ part }: { part: SelectedComponent }) => {
  console.log(part);
  return <div>LogoCloud</div>;
};

export default LogoCloud;
