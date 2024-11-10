import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { HeaderStyles } from "./HeaderStyles.t";
import HeaderDefaultStyle from "./HeaderDefaultStyle";
import HeaderSimpleWithSubTitle from "./HeaderSimpleWithSubTitle";
import HeaderSimpleLeftAligned from "./HeaderSimpleLeftAligned";
import HeaderCenteredDarkBG from "./HeaderCenteredDarkBG";
import HeaderSimpleWithImageBG from "./HeaderSimpleWithImageBG";
import HeaderWithCards from "./HeaderWithCards";
import HeaderWithStats from "./HeaderWithStats";

const Header = ({ part }: { part: SelectedComponent }) => {
  if (part.selectedStyle?.id === HeaderStyles.DEFAULT) {
    return <HeaderDefaultStyle part={part} />;
  }
  if (part.selectedStyle?.id === HeaderStyles.SIMPLE_WITH_SUBTITLE) {
    return <HeaderSimpleWithSubTitle part={part} />;
  }
  if (part.selectedStyle?.id === HeaderStyles.SIMPLE_LEFT_ALIGNED) {
    return <HeaderSimpleLeftAligned part={part} />;
  }
  if (part.selectedStyle?.id === HeaderStyles.CENTERED_DARK_BG) {
    return <HeaderCenteredDarkBG part={part} />;
  }
  if (part.selectedStyle?.id === HeaderStyles.SIMPLE_WITH_BG_IMAGE) {
    return <HeaderSimpleWithImageBG part={part} />;
  }
  if (part.selectedStyle?.id === HeaderStyles.WITH_CARDS) {
    return <HeaderWithCards part={part} />;
  }
  if (part.selectedStyle?.id === HeaderStyles.WITH_STATS) {
    return <HeaderWithStats part={part} />;
  }
  return <div>Headess</div>;
};

export default Header;
