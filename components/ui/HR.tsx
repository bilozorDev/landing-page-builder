import React from "react";
import useGetBrandColor from "../hooks/useGetBrandColor";

const Hr = ({ styles = "mt-8" }: { styles?: string }) => {
  const brandColor = useGetBrandColor();
  return (
    <div className={`w-full border-b-2 border-[${brandColor}] ${styles}`} />
  );
};

export default Hr;
