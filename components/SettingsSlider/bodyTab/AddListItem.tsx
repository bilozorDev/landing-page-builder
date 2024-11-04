import React, { useState } from "react";
import { ContentBlockList } from "@/components/utils/allAvailableOptions.t";
import SingleTextInput from "@/components/ui/SingleTextInput";
import { allAvailableOptions } from "@/components/utils/allAvailableOptions";
import IconComponent from "@/components/ui/IconComponent";
import classNames from "classnames";
import useGetBrandColor from "@/components/hooks/useGetBrandColor";

const AddListItem = ({
  handleAddListItem,
}: {
  handleAddListItem: (newItem: ContentBlockList) => void;
}) => {
  const brandColor = useGetBrandColor();
  const [newFeature, setNewFeature] = useState<ContentBlockList>({
    id: "",
    name: "",
    description: "",
    icon: "",
  });
  const handleSubmit = () => {
    for (const [key, value] of Object.entries(newFeature)) {
      if (value.trim() === "" && key !== "id") {
        alert(`Error: The field "${key}" is empty.`);
        return;
      }
    }

    handleAddListItem(newFeature);
    setNewFeature({
      id: "",
      name: "",
      description: "",
      icon: "",
    });
  };

  return (
    <div className="py-4 space-y-4">
      <div className="flex gap-5 flex-wrap">
        {allAvailableOptions.icons.map((item) => (
          <div
            key={item}
            className={classNames(
              "flex items-center justify-center w-12 h-12 rounded-lg  cursor-pointer hover:grayscale-0 hover:scale-110 transition-all duration-100",
              {
                grayscale: newFeature.icon !== item,
                "grayscale-0 scale-110": newFeature.icon === item,
              }
            )}
            onClick={() => setNewFeature({ ...newFeature, icon: item })}
          >
            <IconComponent iconName={item} />
          </div>
        ))}
      </div>
      <SingleTextInput
        label="Name"
        value={newFeature.name}
        onChange={(value) =>
          setNewFeature({
            ...newFeature,
            name: value,
            id: value.replace(/\s/g, "-").toLowerCase(),
          })
        }
        placeholder="Feature name"
      />
      <SingleTextInput
        label="Description"
        value={newFeature.description || ""}
        onChange={(value) =>
          setNewFeature({ ...newFeature, description: value })
        }
        placeholder="Feature description"
      />
      <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className={`rounded-md bg-[${brandColor}] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[${brandColor}]`}
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddListItem;
