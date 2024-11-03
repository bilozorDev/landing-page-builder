// utils/getHeroIcon.ts
import dynamic from "next/dynamic";
import React from "react";

const getHeroIcon = (iconName: string) => {
  try {
    // Import icons specifically from the 20/solid path
    return dynamic(async () => {
      const mod = await import(`@heroicons/react/20/solid`);
      const IconComponent =
        (mod as unknown as { [key: string]: React.ComponentType<{ className?: string }> })[
          iconName
        ] || (() => <div>Icon not found</div>);

      // Return a component that forwards className to the dynamically imported icon
      const DynamicIconComponent = (props: { className?: string }) => <IconComponent {...props} />;
      DynamicIconComponent.displayName = iconName;
      return DynamicIconComponent;
    });
  } catch (error) {
    console.error(`Icon ${iconName} could not be found.`, error);
    return null;
  }
};

export default getHeroIcon;
