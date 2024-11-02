// utils/getHeroIcon.ts
import dynamic from "next/dynamic";

const getHeroIcon = (iconName: string) => {
  try {
    // Import icons specifically from the 20/solid path
    return dynamic(async () => {
      const mod = await import(`@heroicons/react/20/solid`);
      return (
        (mod as unknown as { [key: string]: React.ComponentType })[iconName] ||
        (() => <div>Icon not found</div>)
      ); // Access the icon as a named export with a fallback
    });
  } catch (error) {
    console.error(`Icon ${iconName} could not be found.`, error);
    return null;
  }
};

export default getHeroIcon;
