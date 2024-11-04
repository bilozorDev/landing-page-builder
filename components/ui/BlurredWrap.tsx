import React, { ReactNode } from "react";

const BlurredWrap = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) => {
  return (
    <div className="relative group z-10 hover:cursor-pointer ">
      <span className="absolute font-bold w-full h-full flex justify-center items-center z-50">
        {text}
      </span>
      <div className="blur-[2.5px] group-hover:blur-[1px] transition-all duration-300">
        {children}
      </div>
    </div>
  );
};

export default BlurredWrap;
