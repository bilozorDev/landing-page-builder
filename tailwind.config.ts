import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import { allAvailableOptions } from "./components/utils/allAvailableOptions";

// add responsive class to each item in safe list
const addResponsiveClasses = (array: string[]) => {
  const responsiveClasses = ["sm", "md", "lg", "xl", "2xl"];
  const newArray: string[] = [];
  array.map((className) => {
    responsiveClasses.forEach((responsiveClassName) => {
      newArray.push(className);
      newArray.push(`${responsiveClassName}:${className}`);
    });
  });
  console.log(newArray);
  return newArray;
};

//tailwind safe list for dynamic func to work
const generateSafelist = () => {
  const safelist: string[] = [];
  allAvailableOptions.header.aligment.forEach((alignment) => {
    safelist.push(`justify-${alignment.label}`);
  });
  allAvailableOptions.general.predefinedColors.forEach((color) => {
    safelist.push(
      `bg-[${color.hex}]`,
      `text-[${color.hex}]`,
      `ring-[${color.hex}]`,
      `data-[checked]:bg-[${color.hex}]`,
      `border-[${color.hex}]`,
      `outline-[${color.hex}]`,
      `divide-[${color.hex}]`,
      `placeholder-[${color.hex}]`,
      `shadow-[${color.hex}]`,
      `accent-[${color.hex}]`,
      `caret-[${color.hex}]`,
      `fill-[${color.hex}]`,
      `stroke-[${color.hex}]`,
      `to-[${color.hex}]`,
      `focus-within:ring-[${color.hex}]`
    );
  });

  return addResponsiveClasses(safelist);
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [forms],
  safelist: [
    "h-8",
    "h-9",
    "h-10",
    "h-11",
    "h-12",
    "h-14",
    "h-16",
    "h-20",
    "h-24",
    "h-28",
    ...generateSafelist(),
  ],
};
export default config;
