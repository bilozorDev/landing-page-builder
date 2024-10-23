type Step = {
  name: string;
  current: boolean;
};

type Steps = Step[];

type Color = {
  hex: string;
  color: string;
  shade: string;
};

type Colors = Color[];

type LogoSizeOptions = number[];

type General = {
  predefinedColors: Colors;
  logoSizeOptions: LogoSizeOptions;
};

// Header Alignment Types
type Alignment = {
  label: string;
  value: string;
};

type Alignments = Alignment[];

type Header = {
  aligment: Alignments;
};

// Banner Style Types
type Style = {
  id: string;
  name: string;
  description: string;
};

type Styles = Style[];

type Banner = {
  availableStyles: Styles;
};

interface Text {
  text: string;
}

interface TextLink extends Text {
  link: string;
}

interface TextLinkWithStyleSelection extends TextLink {
  style: "text" | "button";
}

type CTA = TextLinkWithStyleSelection[];

type Data = {
  news?: TextLink;
  selectedStyle: Style;
  headline: Text;
  description: Text;
  cta: CTA;
};
type BodyPartSelection = {
  name: string;
  id: string;
  availableStyles: Styles;
  data: Data;
};

type BodyPart = {
  name: string;
  id: string;
  data: Data;
};

type BodyPartsSelections = BodyPartSelection[];
export type {
  Steps,
  General,
  Header,
  Banner,
  BodyPartsSelections,
  BodyPartSelection,
  BodyPart,
};
