import React from "react";
import Drawer from "../ui/Drawer";
import SectionsTabs from "./SectionsTabs";

const Settings = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Drawer open={open} setOpen={setOpen}>
      <SectionsTabs />
    </Drawer>
  );
};

export default Settings;
