import React from "react";
import Drawer from "../ui/Drawer";
import SectionsTabs from "./SectionsTabs";
import { showOpen } from "../@types/showOpen.t";

const Settings = ({ show, setShow }: showOpen) => {
  return (
    <Drawer show={show} setShow={setShow}>
      <SectionsTabs />
    </Drawer>
  );
};

export default Settings;
