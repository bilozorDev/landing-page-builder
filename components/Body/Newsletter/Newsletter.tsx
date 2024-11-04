import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React from "react";

const Newsletter = ({ part }: { part: SelectedComponent }) => {
  console.log(part);
  return <div>Newsletter</div>;
};

export default Newsletter;
