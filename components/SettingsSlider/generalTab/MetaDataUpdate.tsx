import { useGeneralSetting } from "@/components/contexts/GeneralTabSettings";
import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import { useEffect, useState } from "react";

const MetaDataUpdate = () => {
  const brandColor = useGetBrandColor();
  const { generalSettings, setGeneralSettings } = useGeneralSetting();
  const [newMetaData, setNewMetaData] = useState({
    title: generalSettings.metaData.title,
    description: generalSettings.metaData.description,
  });

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setGeneralSettings({
      ...generalSettings,
      metaData: {
        ...generalSettings.metaData,
        [e.target.name]: e.target.value,
      },
    });
  };
  // update
  useEffect(() => {
    if (generalSettings.metaData.title) {
      document.title = generalSettings.metaData.title;
    }
  }, [generalSettings.metaData.title]);

  return (
    <form>
      <div className="isolate -space-y-px rounded-md shadow-sm">
        <div
          className={`relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-[${brandColor}]`}
        >
          <label
            htmlFor="title"
            className="block text-xs font-medium text-gray-500"
          >
            Website name
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={generalSettings.metaData.title}
            onChange={handleUpdate}
            placeholder="Website builder"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div
          className={`relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-[${brandColor}]`}
        >
          <label
            htmlFor="description"
            className="block text-xs font-medium text-gray-500"
          >
            Website Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            value={generalSettings.metaData.description}
            onChange={handleUpdate}
            placeholder="Awesome website to build your own website"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </form>
  );
};

export default MetaDataUpdate;
