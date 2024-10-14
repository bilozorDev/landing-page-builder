import React from "react";
import SectionTitle from "../../ui/SectionTitle";
import MetaDataUpdate from "./MetaDataUpdate";
import LogoUploader from "./LogoUploader";

const GeneralTab = () => {
  return (
    <>
      <SectionTitle title="Website identity" />
      <MetaDataUpdate />
      <SectionTitle title="Logo" />
      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
        <LogoUploader />
      </div>
      <SectionTitle title="Colors" />
    </>
  );
};

export default GeneralTab;
