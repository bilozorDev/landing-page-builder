import React from "react";
import Drawer from "../ui/Drawer";
import SectionsTabs from "./SectionsTabs";
import { showOpen } from "../@types/showOpen.t";
import { StepTab } from "../@types/stepTab.t";

const tabs: StepTab[] = [
  { name: "General", current: true },
  { name: "Header", current: false },
  { name: "Body", current: false },
  { name: "Footer", current: false },
];
const Settings = ({ show, setShow }: showOpen) => {
  return (
    <Drawer show={show} setShow={setShow}>
      <SectionsTabs tabs={tabs} />
    </Drawer>
  );
};

export default Settings;
