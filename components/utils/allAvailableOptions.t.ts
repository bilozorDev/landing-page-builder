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
  description?: string;
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
type ContentBlock = {
  type: "news" | "headline" | "description" | "";
  text: string;
  link?: string;
  contentBlock?: ContentBlock;
};

type SelectedComponent = {
  id: string;
  name: string;
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
};
