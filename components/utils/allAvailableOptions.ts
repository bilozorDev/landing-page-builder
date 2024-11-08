// no use of UUID!!!!!!!!

import { CTAStyles } from "../Body/CTA/CTAStyles.t";
import { FeatureStyles } from "../Body/Features/FeatureStyles.t";
import { HeroStyles } from "../Body/Hero/HeroStyles";
import { NewsletterStyles } from "../Body/Newsletter/NewsletterStyles.t";
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
            id: HeroStyles.DEFAULT,
            name: "Centered text without image",
            description: "Include a headline and description",
            requiredBlocks: [
              "news",
              "headline",
              "description",
              "main button",
              "secondary button",
            ],
            image: false,
          },
          {
            id: HeroStyles.IMAGE_RIGHT,
            name: "Split with image",
            description: "Image on the left, text on the right",
            requiredBlocks: [
              "news",
              "headline",
              "description",
              "main button",
              "secondary button",
            ],
            image: true,
            defaultImgScr:
              "https://tailwindui.com/plus/img/component-images/project-app-screenshot.png",
          },
          {
            id: HeroStyles.IMAGE_BOTTOM,
            name: "Image on the bottom",
            description: "Text on top, image on the bottom",
            requiredBlocks: [
              "news",
              "headline",
              "description",
              "main button",
              "secondary button",
            ],
            image: true,
            defaultImgScr:
              "https://tailwindui.com/plus/img/component-images/project-app-screenshot.png",
          },
          {
            id: HeroStyles.HERO_WITH_FULL_IMAGE_RIGHT,
            name: "With full height image ",
            description: "Text on left and full height image on right",
            requiredBlocks: [
              "news",
              "headline",
              "description",
              "main button",
              "secondary button",
            ],

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
            id: FeatureStyles.DEFAULT,
            name: "Text left and image right",
            description: "List of features on the left and image on the right",
            requiredBlocks: [
              "image",
              "headline",
              "description",
              "features",
              "subtitle",
            ],
            image: true,
            defaultImgScr:
              "https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png",
          },
          {
            id: FeatureStyles.IMAGE_ABOVE_LIST,
            name: "One column",
            description: "Headline, image and 3 columns of features",
            requiredBlocks: [
              "image",
              "headline",
              "description",
              "features",
              "subtitle",
            ],
            image: true,
            defaultImgScr:
              "https://tailwindui.com/plus/img/component-images/project-app-screenshot.png",
          },
          {
            id: FeatureStyles.JUST_LIST,
            name: "Headline and 3 columns of features",
            description: "No image, just headline and list of features",
            selected: true,
          },
          {
            id: FeatureStyles.TEXT_LEFT_FEATURE_RIGHT,
            name: "Haedline and 2 columns of features",
            description: "Headline on left and 2 columns of features on right",
            requiredBlocks: [
              "image",
              "headline",
              "description",
              "features",
              "subtitle",
            ],
          },
          {
            id: FeatureStyles.NO_ICONS,
            name: "2 Columns of features",
            description: "Checkmarks instead of icons",
            requiredBlocks: [
              "image",
              "headline",
              "description",
              "features",
              "subtitle",
            ],
          },
        ],
        contentBlocks: [
          {
            type: ContentBlockTypes.text,
            blockName: "subtitle",
            text: "Deploy faster",
          },
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
            type: ContentBlockTypes.featureWithIcon,
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
            id: NewsletterStyles.DEFAULT,
            name: "Side-by-side with details",
            description: "Email form on left and details on right",
            image: false,
            requiredBlocks: [
              "heading",
              "description",
              "inputPlaceholder",
              "button",
              "features",
            ],
          },
          {
            id: NewsletterStyles.SIMPLE_SIDE_BY_SIDE,
            name: "Side-by-side ",
            description: "Email form on right and text on lett",
            requiredBlocks: [
              "heading",
              "inputLabel",
              "inputPlaceholder",
              "button",
              "privacyText",
              "privacyLink",
            ],
          },
          {
            id: NewsletterStyles.SIMPLE_STACKED,
            name: "Text and email form ",
            description: "Simple text and email form",
            requiredBlocks: [
              "heading",
              "inputLabel",
              "inputPlaceholder",
              "button",
              "privacyText",
              "privacyLink",
            ],
          },
          {
            id: NewsletterStyles.CENTERED_CARD,
            name: "Text, description and email form ",
            description: "Centered in dark background",
            requiredBlocks: [
              "heading",
              "inputLabel",
              "inputPlaceholder",
              "button",
              "description",
            ],
          },
        ],
        contentBlocks: [
          {
            type: ContentBlockTypes.text,
            blockName: "heading",
            text: "Subscribe to our newsletter",
          },
          {
            type: ContentBlockTypes.text,
            blockName: "description",
            text: "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.",
          },
          {
            type: ContentBlockTypes.text,
            blockName: "inputPlaceholder",
            text: "Enter your email",
          },
          {
            type: ContentBlockTypes.button,
            blockName: "button",
            text: "Subscribe",
            link: "#",
          },
          {
            type: ContentBlockTypes.featureWithIcon,
            blockName: "features",
            list: [
              {
                id: "weekly_articles",
                name: "Weekly articles",
                description:
                  "Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.",
                icon: "CalendarDaysIcon",
              },
              {
                id: "no_spam",
                name: "No spam",
                description:
                  "Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.",
                icon: "HandRaisedIcon",
              },
              {
                type: ContentBlockTypes.text,
                blockName: "privacyText",
                text: "We care about your data. Read our",
              },
              {
                type: ContentBlockTypes.textWithLink,
                blockName: "privacyLink",
                text: "privacy policy",
                link: "#",
              },
            ],
          },
        ],
      },
      {
        name: "CTA",
        availableStyles: [
          {
            id: CTAStyles.DEFAULT,
            name: "Image on the left with dark bg",
            description: "On dark background with some bullet points",
            requiredBlocks: [
              "headline",
              "description",
              "job_postings_link",
              "image",
              "benefits",
            ],
            image: true,
            defaultImgScr:
              "https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          },
          {
            id: CTAStyles.IMAGE_RIGHT_DARK_BG,
            name: "Image right with dark bg",
            description: "With text and 2 buttons",
            image: true,
            requiredBlocks: [
              "headline",
              "description",
              "primary_button",
              "secondary_button",
              "image",
            ],
            defaultImgScr:
              "https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png",
          },
          {
            id: CTAStyles.SIMPLE_STACKED_CENTER_DARK_BG,
            name: "Stacked centered on dark bg card",
            description: "Simple title, descriptions and buttons",
            requiredBlocks: [
              "headline",
              "description",
              "primary_button",
              "secondary_button",
            ],
            image: false,
          },
          {
            id: CTAStyles.FULL_WIDTH_STACKED_CENTER_DARK_BG,
            name: "Stacked centered on dark bg full width",
            description: "Simple title, descriptions and buttons",
            requiredBlocks: [
              "headline",
              "description",
              "primary_button",
              "secondary_button",
            ],
            image: false,
          },
          {
            id: CTAStyles.IMAGE_LEFT_TEXT_RIGHT,
            name: "Image on the left with text on the right",
            description:
              "On a dark background with title, description and button",
            image: true,
            defaultImgScr:
              "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply",
            requiredBlocks: [
              "overline",
              "headline",
              "description",
              "image",
              "primary_button",
            ],
          },
          {
            id: CTAStyles.SIMPLE_STACKED_LEFT,
            name: "Stacked on the left side",
            description: "Simple title and buttons",
            requiredBlocks: ["headline", "primary_button", "secondary_button"],
            image: false,
          },
          {
            id: CTAStyles.SIMPLE_JUSTIFIED_BETWEEN,
            name: "Title and buttons",
            description: "Simple title buttons on opposite sides",
            requiredBlocks: ["headline", "primary_button", "secondary_button"],
            image: false,
          },
        ],
        contentBlocks: [
          {
            type: ContentBlockTypes.text,
            blockName: "headline",
            text: "Join our team",
          },
          {
            type: ContentBlockTypes.text,
            blockName: "description",
            text: "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
          },
          {
            type: ContentBlockTypes.text,
            blockName: "overline",
            text: "Award winning support",
          },
          {
            type: ContentBlockTypes.textWithLink,
            blockName: "job_postings_link",
            text: "See our job postings",
            link: "#",
          },
          {
            type: ContentBlockTypes.button,
            blockName: "primary_button",
            text: "Get started",
            link: "#",
          },
          {
            type: ContentBlockTypes.button,
            blockName: "secondary_button",
            text: "Learn more",
            link: "#",
          },
          {
            type: ContentBlockTypes.image,
            blockName: "image",
            image: "",
          },
          {
            type: ContentBlockTypes.simpleList,
            blockName: "benefits",
            list: [
              { id: "competitive_salaries", name: "Competitive salaries" },
              { id: "flexible_work_hours", name: "Flexible work hours" },
              {
                id: "30_days_of_paid_vacation",
                name: "30 days of paid vacation",
              },
              { id: "annual_team_retreats", name: "Annual team retreats" },
              {
                id: "benefits_for_you_and_your_family",
                name: "Benefits for you and your family",
              },
              {
                id: "a_great_work_environment",
                name: "A great work environment",
              },
            ],
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
