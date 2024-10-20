import { styleOption } from "./styleOption.t";

export type BannerTabSettingsType = {
  display: boolean;
  style: styleOption;
  data: {
    text: string;
    cta: {
      text: string;
      href: string;
    };
  };
};
