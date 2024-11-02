import DraggableList from "@/components/ui/DraggableList";
import {
  ContentBlock,
  ContentBlockList,
} from "@/components/utils/allAvailableOptions.t";
import React from "react";

const ListEditSettings = ({
  part,
  handleReorder,
}: {
  part: ContentBlock;
  handleReorder: (newOrder: ContentBlockList[]) => void;
}) => {
  return (
    <>
      <div className="flex relative items-center space-x-4">
        <p className="mt-4  capitalize whitespace-nowrap">{part.blockName}</p>
        <div className="w-full h-4 border-b border-gray-300"></div>
      </div>
      <DraggableList<ContentBlockList>
        axis="y"
        onReorder={handleReorder}
        values={part.list}
        renderItem={(item) => (
          <div className="flex items-center space-x-4" >
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <p>{item.name}</p>
          </div>
        )}
      />
    </>
  );
};

export default ListEditSettings;
