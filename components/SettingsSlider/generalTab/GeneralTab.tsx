import React from "react";
import SectionTitle from "../../ui/SectionTitle";
import MetaDataUpdate from "./MetaDataUpdate";
import LogoUploader from "./LogoUploader";
import ColorPicker from "./ColorPicker";
import Example from "./Example";

const GeneralTab = () => {
  return (
    <>
      <SectionTitle title="Website identity" />
      <MetaDataUpdate />
      <SectionTitle title="Logo" />

      <LogoUploader />

      <SectionTitle title="Colors" />
      <ColorPicker/>
      
      <Example/>
    </>
  );
};

export default GeneralTab;
