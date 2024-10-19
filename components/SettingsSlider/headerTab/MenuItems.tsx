import { menuItem } from "@/components/@types/menuItem.t";
import { useHeaderSettings } from "@/components/contexts/HeaderTabSettings";
import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import BlurredWrap from "@/components/ui/BlurredWrap";
import DraggableList from "@/components/ui/DraggableList";
import InputItemWithLink from "@/components/ui/InputForm";
import React from "react";
import { v4 } from "uuid";

const MenuItems = () => {
  const { headerSettings, setHeaderSettings } = useHeaderSettings();
  const handleReorder = (newOrder: menuItem[]) => {
    setHeaderSettings({ ...headerSettings, menuItems: newOrder });
  };
  const handleUpdate = (id: string, field: string, value: string) => {
    const updatedMenuItems = headerSettings.menuItems.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setHeaderSettings({ ...headerSettings, menuItems: updatedMenuItems });
  };

  const handleAddItem = () => {
    const updatedArray = headerSettings.menuItems;
    updatedArray.push({ name: "", href: "#", id: v4() });
    console.log("you are here");
    setHeaderSettings({ ...headerSettings, menuItems: updatedArray });
  };
  return (
    <>
      <DraggableList
        axis="y"
        onReorder={handleReorder}
        values={headerSettings.menuItems}
        renderItem={(item) => (
          <InputItemWithLink menuItem={item} onChange={handleUpdate} />
        )}
      />
      <div onClick={handleAddItem}>
        <AddMenuItem />
      </div>
    </>
  );
};

export default MenuItems;

const AddMenuItem = () => {
  return (
    <BlurredWrap text="Add item">
      <div className="flex flex-row items-center space-x-4 w-full justify-between mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39 39"
          width="10"
          height="10"
        >
          <path
            d="M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z"
            fill="#CCC"
          ></path>
          <path
            d="M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z"
            fill="#CCC"
          ></path>
          <path
            d="M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z"
            fill="#CCC"
          ></path>
          <path
            d="M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z"
            fill="#CCC"
          ></path>
          <path
            d="M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z"
            fill="#CCC"
          ></path>
          <path
            d="M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z"
            fill="#CCC"
          ></path>
          <path
            d="M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z"
            fill="#CCC"
          ></path>
          <path
            d="M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z"
            fill="#CCC"
          ></path>
          <path
            d="M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z"
            fill="#CCC"
          ></path>
        </svg>
        <div className="isolate -space-y-px rounded-md shadow-sm flex-1">
          <div
            className={`relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-[${useGetBrandColor}]`}
          >
            <label className="block text-xs font-medium text-gray-500">
              Title
            </label>
            <input
              name="name"
              type="text"
              placeholder=""
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
            <span className="absolute animate-pulse -mt-6">|</span>
          </div>
          <div
            className={`relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-[${useGetBrandColor}]`}
          >
            <label className="block text-xs font-medium text-gray-500">
              Link
            </label>
            <input
              name="href"
              type="text"
              placeholder="#newsletter"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </BlurredWrap>
  );
};
