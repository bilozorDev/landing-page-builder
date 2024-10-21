import { ChartPieIcon } from "@heroicons/react/24/outline";

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
    alignment: Alignments; 
  };
  
  // Banner Style Types
  type Style = {
    id: string;
    name: string;
    description: string;
    selected?: boolean;
  };
  
  type Styles = Style[];
  
  type Banner = {
    styles: Styles;
  };
  
  
  type CTA = {
    text: string;
    link: string;
    style: string;
  };
  
  
  type IconStyle = {
    id: string;
    name: string;
    description: string;
    selected: boolean;
  };
  
  
  type ListStyle = {
    id: string;
    name: string;
    description: string;
    selected: boolean;
  };
  type FeaturesList = {
    id: string;
    name: string;
    description: string;
    icon: string; 
  };
  
  
  type BulletPoint = {
    name: string;
    description: string;
    icon: typeof ChartPieIcon; 
  };
  
  
  type PartOptions = {
    styleSelections: Style[];
    news?: { text: string; link: string };
    headline?: { text: string };
    description?: { text: string };
    cta?: CTA[];
    iconsStyle?: IconStyle[];
    listStyle?: ListStyle[];
    featuresList?: FeaturesList[];
    bulletPoints?: BulletPoint[];
    statsList?: { name: string; description: string }[];
    subtitle?: { text: string };
    privacyNote?: { text: string; link: string };
    button?: { text: string };
  };
  
  
  type BodyPart = {
    name: string;
    id: string;
    options: PartOptions;
  };
  
  type Parts = BodyPart[];
  
  export type { Steps, General, Header, Banner, Parts };
  