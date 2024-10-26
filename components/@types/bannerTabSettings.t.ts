import { SelectionVariation } from "../utils/allAvailableOptions.t";
import { menuItem } from "./menuItem.t";

export type BannerTabSettingsType = {
  display: boolean;
  style: SelectionVariation;
  data: menuItem;
};
