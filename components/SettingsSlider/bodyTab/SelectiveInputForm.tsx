import { ContentBlock } from "@/components/utils/allAvailableOptions.t";

const SelectiveInputForm = ({ obj }: { obj: ContentBlock }) => {
  const keys = Object.keys(obj);
  switch (true) {
    case keys.includes("style"):
      return "styled button";
    case keys.includes("link"):
      return "simple link";
    case keys.includes("text"):
      return "simple text";
    default:
      return "not valid";
  }
};

export default SelectiveInputForm;
