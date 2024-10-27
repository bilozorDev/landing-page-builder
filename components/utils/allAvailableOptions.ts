// no use of UUID!!!!!!!!

import {
  AvailableComponentToAdd,
  Banner,
  ContentBlockTypes,
  General,
  Header,
  Step,
} from "./allAvailableOptions.t";

export const allAvailableOptions = {
  steps: <Step[]>[
    { name: "General", current: true },
    { name: "Header", current: false },
    { name: "Banner", current: false },
    { name: "Body", current: false },
    { name: "Footer", current: false },
  ],
  general: <General>{
    predefinedColors: [
      {
        hex: "#a855f7",
        color: "purple",
        shade: "500",
      },
      {
        hex: "#d97706",
        color: "amber",
        shade: "600",
      },
      {
        hex: "#059669",
        color: "emerald",
        shade: "600",
      },
      {
        hex: "#facc15",
        color: "yellow",
        shade: "400",
      },
      {
        hex: "#6366F1",
        color: "indigo",
        shade: "600",
      },
      {
        hex: "#e11d48",
        color: "rose",
        shade: "600",
      },
      {
        hex: "#0891b2",
        color: "cyan",
        shade: "600",
      },
      {
        hex: "#52525b",
        color: "zinc",
        shade: "600",
      },
    ],
    logoSizeOptions: [8, 9, 10, 11, 12, 14, 16, 20, 24, 28],
  },
  header: <Header>{
    aligment: [
      { label: "Left", value: "start" },

      { label: "Center", value: "center" },

      { label: "Right", value: "end" },
    ],
  },
  banner: <Banner>{
    availableStyles: [
      {
        id: "brand-bg",
        name: "Solid background",
        description: "Background color is brand color",
      },
      {
        id: "gray-bg",
        name: "Gray background",
        description: "White background with underline",
      },
    ],
  },
  body: {
    availableComponents: <AvailableComponentToAdd[]>[
      {
        name: "hero",
        availableStyles: [
          {
            id: "default",
            name: "Centered text without image",
            description: "Include a headline and description",
          },
          {
            id: "image_right",
            name: "Split with image",
            description: "Image on the left, text on the right",
          },
          {
            id: "image_bottom",
            name: "Image on the bottom",
            description: "Text on top, image on the bottom",
          },
          {
            id: "hero_with_full_image_right",
            name: "With full height image ",
            description: "Text on left and full height image on right",
          },
        ],
        contentBlocks: [
          {
            type: ContentBlockTypes.textWithLink,
            blockName: "news",
            text: "Announcing our next round of funding.",
            link: "#",
          },
          {
            type: ContentBlockTypes.text,
            blockName: "headline",
            text: "Data to enrich your online business",
          },
          {
            type: ContentBlockTypes.text,
            blockName: "description",
            text: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
          },
          {
            type: ContentBlockTypes.button,
            blockName: "main button",
            style: "text",
            text: "Learn More",
            link: "#",
          },
          {
            type: ContentBlockTypes.button,
            blockName: "secondary button",
            text: "Get Started",
            style: "button",
            link: "#",
          },
        ],
      },
      {
        name: "features",
        availableStyles: [
          {
            id: "default",
            name: "Centered content",
            description: "Optional link to feature page on Title click",
            selected: false,
          },
          {
            id: "image-under-text",
            name: "Text between headline and features list",
            description: "Optional link to feature page on Title click",
            selected: false,
          },
          {
            id: "headline-left-and-features-list-on-right",
            name: "Headline left and 2 columns of features on the right",
            description: "Optional link to feature page on Title click",
            selected: false,
          },
          {
            id: "image-right",
            name: "Text & features on the left and image on the right",
            description: "Optional link to feature page on Title click",
            selected: false,
          },
        ],
        contentBlocks: [
          {
            type: ContentBlockTypes.text,
            blockName: "headline",
            text: "Everything you need to deploy your app",
          },
          {
            type: ContentBlockTypes.text,
            blockName: "description",
            text: "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.",
          },
          {
            type: ContentBlockTypes.text,
            blockName: "subtitle",
            text: "Deploy faster",
          },
        ],
      },
      {
        name: "newsletter",
        availableStyles: [
          {
            id: "default",
            name: "One line",
            description: "Text on left & form on right",
            selected: true,
          },
          {
            id: "stacked",
            name: "Stacked",
            description: "Text and input stacked on top of each other",
            selected: false,
          },
          {
            id: "stacked-centered",
            name: "Stacked centered",
            description: "Text and form stacked centered",
            selected: false,
          },
          {
            id: "with-bullet-points",
            name: "With bullet points",
            description: "Text and form on the left and bullet points on right",
            selected: false,
          },
        ],
        contentBlocks: [
          {
            type: ContentBlockTypes.text,
            blockName: "headline",
            text: "Want product news and updates?.",
          },
          {
            type: ContentBlockTypes.text,
            blockName: "subtitle",
            text: "Sign up for our newsletter.",
          },
          {
            type: ContentBlockTypes.textWithLink,
            blockName: "privacyNote",
            text: " We care about your data. Read our",
            link: "#",
          },
          {
            type: ContentBlockTypes.button,
            blockName: "button",
            text: "Subscribe",
            style: "button",
          },
        ],
      },
    ],
  },
};
