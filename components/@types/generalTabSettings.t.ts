export type GeneralTabSettingsType = {
  metaData: {
    title: string;
    description: string;
  };
  colors: {
    brandColor: {
      hex: string;
      color: string;
      shade: string;
    };
  };
  logo: {
    src: string;
    size: number;
  };
};
