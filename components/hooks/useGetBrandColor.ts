import { useGeneralSetting } from "../contexts/GeneralTabSettings";

const useGetBrandColor = () => {
  const { generalSettings } = useGeneralSetting();
  const { hex } = generalSettings.colors.brandColor;
  return hex;
};

export default useGetBrandColor;
