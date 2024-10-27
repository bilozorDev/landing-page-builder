import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import DraggableList from "@/components/ui/DraggableList";
import PartCard from "./PartCard";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { ActionTypes } from "@/components/reducers/bodyReducerTypes.t";

const SelectedParts = () => {
  const { bodySettings, dispatch } = useBodySettings();
  const { parts } = bodySettings;
  const handleReorder = (newOrder: SelectedComponent[]) => {
    dispatch({ type: ActionTypes.HANDLE_PARTS_REORDER, payload: newOrder });
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
