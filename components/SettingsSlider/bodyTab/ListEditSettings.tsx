import DraggableList from "@/components/ui/DraggableList";
import IconComponent from "@/components/ui/IconComponent";
import {
  ContentBlock,
  ContentBlockList,
} from "@/components/utils/allAvailableOptions.t";
import { XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const ListEditSettings = ({
  part,
  handleReorder,
  handleDelete,
}: {
  part: ContentBlock;
  handleReorder: (newOrder: ContentBlockList[]) => void;
  handleDelete?: (id: string) => void;
}) => {
  return (
    <>
      <div className="flex relative items-center ">
        <p className="mt-4  capitalize whitespace-nowrap">{part.blockName}</p>
        <div className="w-full h-4 border-b border-gray-300"></div>
      </div>

      <DraggableList<ContentBlockList>
        axis="y"
        onReorder={handleReorder}
        values={part.list}
        renderItem={(item) => {
          return (
            <>
              <div className="flex relative group justify-start w-full items-center space-x-6 mt-4">
                {item.icon && (
                  <div>
                    <IconComponent iconName={item.icon} />
                  </div>
                )}
                <div>
                  <p className="font-semibold mb-2">{item.name}</p>
                  {item.description && (
                    <div className="block text-gray-600">
                      {item.description}
                    </div>
                  )}
                </div>
                {handleDelete && (
                  <XCircleIcon
                    className="w-5 h-5 z-50 absolute -top-2 -right-2 bg-white text-gray-300 group-hover:text-gray-700 hover:text-red-500 hover:cursor-pointer"
                    onClick={() => handleDelete(item.id)}
                  />
                )}
              </div>
            </>
          );
        }}
      />
    </>
  );
};

export default ListEditSettings;
