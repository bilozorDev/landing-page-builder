import { menuItem } from "./menuItem.t";
import { styleOption } from "./styleOption.t";

export type BannerTabSettingsType = {
  display: boolean;
  style: styleOption;
  data: menuItem;
};
