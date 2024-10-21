// no use of UUID!!!!!!!!

import { ChartPieIcon } from "@heroicons/react/24/outline";
import { Banner, General, Header, Parts, Steps } from "./allAvailableOptions.t";

export const allAvailableOptions = {
  steps: <Steps>[
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
    styles: [
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
    parts: <Parts>[
      {
        name: "hero",
        id: "hero",
        options: {
          styleSelections: [
            {
              id: "default",
              name: "Centered text without image",
              description: "Include a headline and description",
              selected: true,
            },
            {
              id: "image_right",
              name: "Split with image",
              description: "Image on the left, text on the right",
              selected: false,
            },
            {
              id: "image_bottom",
              name: "Image on the bottom",
              description: "Text on top, image on the bottom",
              selected: false,
            },
            {
              id: "array_of_images",
              name: "Array of images",
              description: "Text on left, and array of images on right",
              selected: false,
            },
          ],
          news: {
            text: "Announcing our next round of funding.",
            link: "#",
          },
          headline: {
            text: "Data to enrich your online business",
          },
          description: {
            text: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
          },
          cta: [
            {
              text: "Get Started",
              link: "#",
              style: "btn",
            },
            {
              text: "Learn Morse",
              link: "#",
              style: "text",
            },
          ],
        },
      },
      {
        name: "feature",
        id: "feature",
        options: {
          iconsStyle: [
            {
              id: "default",
              name: "With solid background",
              description: "Brand color as BG and white icons",
              selected: true,
            },
            {
              id: "no-background",
              name: "Solid color with no background",
              description: "Brand color as text color and no background",
              selected: false,
            },
            {
              id: "checkmarks",
              name: "Just checkmarks instead of icons",
              description:
                "Each feature will have a checkmark instead of an icon",
              selected: false,
            },
            {
              id: "no-icons",
              name: "Icons disabled",
              description: "Feature will just have a title and description",
              selected: false,
            },
          ],
          listStyle: [
            {
              id: "default",
              name: "2 Columns",
              description: "List of features in 2 columns",
              selected: true,
            },
            {
              id: "3-columns",
              name: "3 Columns",
              description: "List of features in 3 columns",
              selected: false,
            },
            {
              id: "4-columns",
              name: "4 Columns",
              description: "List of features in 4 columns",
              selected: false,
            },
          ],
          styleSelections: [
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
          featuresList: [
            {
              id: "analytics",
              name: "Analytics",
              description:
                "Get a better understanding where your traffic is coming from",
              icon: "ChartPieIcon",
            },
            {
              id: "engagement",
              name: "Engagement",
              description:
                "Speak directly to your customers with our engagement tool",
              icon: "CursorArrowRaysIcon",
            },
            {
              id: "security",
              name: "Security",
              description: "Your customers’ data will be safe and secure",
              icon: "FingerPrintIcon",
            },
            {
              id: "integrations",
              name: "Integrations",
              description: "Your customers’ data will be safe and secure",
              icon: "SquaresPlusIcon",
            },
          ],
          subtitle: { text: "Deploy faster" },
          headline: { text: "Everything you need to deploy your app" },
          description: {
            text: "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.",
          },
        },
      },

      {
        name: "newsletter",
        id: "newsletter",
        options: {
          iconsStyle: [
            {
              id: "default",
              name: "With solid background",
              description: "Brand color as BG and white icons",
              selected: true,
            },
            {
              id: "no-background",
              name: "Solid color with no background",
              description: "Brand color as text color and no background",
              selected: false,
            },
            {
              id: "checkmarks",
              name: "Just checkmarks instead of icons",
              description:
                "Each feature will have a checkmark instead of an icon",
              selected: false,
            },
            {
              id: "no-icons",
              name: "Icons disabled",
              description: "Feature will just have a title and description",
              selected: false,
            },
          ],
          bulletPoints: [
            {
              name: "Weekly articles",
              description:
                "Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.",
              icon: ChartPieIcon,
            },
            {
              name: "No spam",
              description:
                "Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.",
              icon: ChartPieIcon,
            },
          ],
          styleSelections: [
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
              description:
                "Text and form on the left and bullet points on right",
              selected: false,
            },
          ],
          headline: {
            text: "Want product news and updates?.",
          },
          subheadline: {
            text: "Sign up for our newsletter.",
          },
          privacyNote: {
            text: " We care about your data. Read our",
            link: "#",
          },
          button: {
            text: "subscribe",
          },
        },
      },

      {
        name: "stats",
        id: "stats",
        options: {
          styleSelections: [
            {
              id: "default",
              name: "Centered stats",
              description: "Plain and Simple",
              selected: true,
            },
            {
              id: "with_title",
              name: "Title and description",
              description:
                "Title and description stacked with stats underneath",
              selected: false,
            },
            {
              id: "image_background_with_text",
              name: "Image on background",
              description:
                "Title, subtitle and description stacked with stats under",
              selected: false,
            },
            {
              id: "image_on_left",
              name: "Image on the left",
              description:
                "Image on the left with title, subtitle and description on the right",
              selected: false,
            },
          ],
          statsList: [
            { name: "44 million", description: "Transactions every 24 hours" },
            { name: "$119 trillion", description: "Assets under holding" },
            { name: "46,000", description: "New users annually" },
            { name: "8,000+", description: "Creators on the platform" },
          ],
          headline: { text: "Data to enrich your online business" },
          subtitle: { text: "Deploy faster" },
          description: {
            text: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
          },
        },
      },
    ],
  },
};
