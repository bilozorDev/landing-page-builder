import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import PartPreview from "./PartPreview";
import DraggableList from "@/components/ui/DraggableList";
import { Parts } from "@/components/utils/allAvailableOptions.t";

const SelectedParts = () => {
  const { bodySettings, setBodySettings } = useBodySettings();
  const { parts } = bodySettings;
  const handleReorder = (newOrder: Parts) => {
    setBodySettings((prev) => ({
      ...prev,
      parts: newOrder,
    }));
  };

  return (
    <>
      <DraggableList
        axis="y"
        onReorder={handleReorder}
        values={parts}
        renderItem={(item) => <PartPreview part={item} />}
      />
    </>
  );
};

export default SelectedParts;
