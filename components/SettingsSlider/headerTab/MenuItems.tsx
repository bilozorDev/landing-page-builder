import { menuItem } from "@/components/@types/menuItem.t";
import { useHeaderSettings } from "@/components/contexts/HeaderTabSettings";
import DraggableList from "@/components/ui/DraggableList";
import InputItem from "@/components/ui/InputForm";
import React from "react";

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
  return (
    <DraggableList
      axis="y"
      onReorder={handleReorder}
      values={headerSettings.menuItems}
      renderItem={(item) => (
        <InputItem.withLink menuItem={item} onChange={handleUpdate} />
      )}
    />
  );
};

export default MenuItems;
