//setting step
type Step = {
  name: string;
  current: boolean;
};

// available color selection
type Color = {
  hex: string;
  color: string;
  shade: string;
};

// general section of available options
type General = {
  predefinedColors: Color[];
  logoSizeOptions: number[];
};

// Header Alignment Types
type Alignment = {
  label: string;
  value: string;
};

type Header = {
  aligment: Alignment[];
};

type SelectionVariation = {
  id: string;
  name: string;
  requiredBlocks: string[];
  description?: string;
  image: boolean;
  defaultImgScr: string;
};

// Banner section on top of header
type Banner = {
  availableStyles: SelectionVariation[];
};
// Part list in allAvailableOptionsObject
type AvailableComponentToAdd = {
  name: string;
  availableStyles: SelectionVariation[];
  contentBlocks: ContentBlock[];
};

export enum ContentBlockTypes {
  textWithLink = "textWithLink",
  text = "text",
  button = "button",
  featureWithIcon = "featureWithIcon",
  image = "image",
  simpleList = "simpleList",
}

export enum ButtonStyles {
  button = "button",
  text = "text",
}
type ContentBlock = {
  type: ContentBlockTypes;
  blockName: string;
  text?: string;
  image?: string;
  link?: string;
  style?: "text" | "button";
  list: ContentBlockList[] | SimpleListItem[];
};

type SimpleListItem = {
  id: string;
  name: string;
};
type ContentBlockList = {
  id: string;
  name: string;
  description?: string;
  icon?: string;
};

type SelectedComponent = {
  id: string;
  name: string;
  image: string;
  selectedStyle?: SelectionVariation;
  contentBlocks: ContentBlock[];
};

type SelectedBodyParts = {
  parts: SelectedComponent[];
};

export type {
  Step,
  General,
  Header,
  Banner,
  SelectionVariation,
  AvailableComponentToAdd,
  SelectedComponent,
  ContentBlock,
  SelectedBodyParts,
  ContentBlockList,
};
