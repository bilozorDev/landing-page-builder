import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import DraggableList from "@/components/ui/DraggableList";
import PartCard from "./PartCard";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";

const SelectedParts = () => {
  const { bodySettings, setBodySettings } = useBodySettings();
  const { parts } = bodySettings;
  const handleReorder = (newOrder: SelectedComponent[]) => {
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
