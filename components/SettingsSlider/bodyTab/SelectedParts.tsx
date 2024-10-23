import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import DraggableList from "@/components/ui/DraggableList";
import { Parts } from "@/components/utils/allAvailableOptions.t";
import PartCard from "./PartCard";

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
        renderItem={(item) => <PartCard part={item} />}
      />
    </>
  );
};

export default SelectedParts;
