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
  icons: [
    "SquaresPlusIcon",
    "ChartPieIcon",
    "CursorArrowRaysIcon",
    "FingerPrintIcon",
    "BellIcon",
    "BookmarkIcon",
    "BriefcaseIcon",
    "CalendarIcon",
    "CameraIcon",
    "ChatBubbleLeftIcon",
    "CheckCircleIcon",
    "ClockIcon",
    "CloudIcon",
    "CogIcon",
    "CreditCardIcon",
    "DocumentDuplicateIcon",
    "ExclamationCircleIcon",
    "EyeIcon",
    "FlagIcon",
    "GiftIcon",
    "GlobeAltIcon",
    "HeartIcon",
    "HomeIcon",
    "InboxIcon",
    "InformationCircleIcon",
    "KeyIcon",
    "LightBulbIcon",
    "LockClosedIcon",
    "MagnifyingGlassIcon",
    "MapIcon",
    "PencilSquareIcon",
    "PhoneIcon",
    "ChartBarIcon",
  ],
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
            image: false,
          },
          {
            id: "image_right",
            name: "Split with image",
            description: "Image on the left, text on the right",
            image: true,
            defaultImgScr:
              "https://tailwindui.com/plus/img/component-images/project-app-screenshot.png",
          },
          {
            id: "image_bottom",
            name: "Image on the bottom",
            description: "Text on top, image on the bottom",
            image: true,
            defaultImgScr:
              "https://tailwindui.com/plus/img/component-images/project-app-screenshot.png",
          },
          {
            id: "hero_with_full_image_right",
            name: "With full height image ",
            description: "Text on left and full height image on right",
            image: true,
            defaultImgScr:
              "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
          },
        ],
        contentBlocks: [
          {
            type: ContentBlockTypes.image,
            blockName: "image",
            image: "",
          },
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
            name: "Text left and image right",
            description: "List of features on the left and image on the right",
            image: true,
            defaultImgScr:
              "https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png",
          },
          {
            id: "image-above-list",
            name: "One column",
            description: "Headline, image and 3 columns of features",
            image: true,
            defaultImgScr:
              "https://tailwindui.com/plus/img/component-images/project-app-screenshot.png",
          },
          {
            id: "just-list",
            name: "Headline and 3 columns of features",
            description: "No image, just headline and list of features",
            selected: true,
          },
          {
            id: "text-left-feature-right",
            name: "Haedline and 2 columns of features",
            description: "Headline on left and 2 columns of features on right",
          },
          {
            id: "no-icons",
            name: "2 Columns of features",
            description: "Checkmarks instead of icons",
          },
        ],
        contentBlocks: [
          {
            type: ContentBlockTypes.image,
            blockName: "image",
            image: "",
          },
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
          {
            type: ContentBlockTypes.list,
            blockName: "features",
            list: [
              {
                id: "pushToDeploy",
                name: "Push to deploy.",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
                icon: "CloudArrowUpIcon",
              },
              {
                id: "sslCertificate",
                name: "SSL certificates.",
                description:
                  "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
                icon: "LockClosedIcon",
              },
              {
                id: "databaseBackup",
                name: "Database backups.",
                description:
                  "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
                icon: "ServerIcon",
              },
            ],
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
      {
        name: "CTA",
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
      {
        name: "stats",
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
      {
        name: "testimonials",
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
      {
        name: "team",
        availableStyles: [
          {
            id: "default",
            name: "One line",
            description: "Text on left & form on right",
          },
          {
            id: "stacked",
            name: "Stacked",
            description: "Text and input stacked on top of each other",
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
      {
        name: "logos",
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
      {
        name: "FAQ",
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
