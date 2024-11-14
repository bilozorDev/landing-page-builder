import { useFooterSetting } from "@/components/contexts/FooterTabSettings";
import SingleTextInput from "@/components/ui/SingleTextInput";
import React from "react";

const FooterDataInput = () => {
  const { footerSettings, setFooterSettings } = useFooterSetting();
  return (
    <>
      <SingleTextInput
        label="Footer Text"
        onChange={(value) =>
          setFooterSettings((prev) => ({ ...prev, text: value }))
        }
        value={footerSettings.text}
      />
    </>
  );
};

export default FooterDataInput;
