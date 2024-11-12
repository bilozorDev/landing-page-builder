import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React from "react";
import { TeamStyles } from "./TeamStyles.t";
import TeamDefaultStyle from "./TeamDefaultStyle";
import TeamCircleAvatars from "./TeamCircleAvatars";
import TeamWithDarkBgCards from "./TeamWithDarkBgCards";

const Team = ({ part }: { part: SelectedComponent }) => {
  if (part.selectedStyle?.id === TeamStyles.DEFAULT)
    return <TeamDefaultStyle part={part} />;
  if (part.selectedStyle?.id === TeamStyles.WITH_CIRCLE_AVATARS)
    return <TeamCircleAvatars part={part} />;
  if (part.selectedStyle?.id === TeamStyles.DARK_BG_CARDS_AVATARS)
    return <TeamWithDarkBgCards part={part} />;
  return <div>Team</div>;
};

export default Team;
