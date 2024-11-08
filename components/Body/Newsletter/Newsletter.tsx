import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React from "react";
import NewsletterDefaultStyle from "./NewsletterDefaultStyle";
import NewsletterSimpleSideBySide from "./NewsletterSimpleSideBySide";
import NewsletterSimpleStacked from "./NewsletterSimpleStacked";
import NewsletterCenteredCard from "./NewsletterCenteredCard";
import { NewsletterStyles } from "./NewsletterStyles.t";

const Newsletter = ({ part }: { part: SelectedComponent }) => {
  if (part.selectedStyle?.id === NewsletterStyles.DEFAULT)
    return <NewsletterDefaultStyle part={part} />;
  if (part.selectedStyle?.id === NewsletterStyles.SIMPLE_SIDE_BY_SIDE)
    return <NewsletterSimpleSideBySide part={part} />;
  if (part.selectedStyle?.id === NewsletterStyles.SIMPLE_STACKED)
    return <NewsletterSimpleStacked part={part} />;
  if (part.selectedStyle?.id === NewsletterStyles.CENTERED_CARD)
    return <NewsletterCenteredCard part={part} />;
  return <div>Newsletter</div>;
};

export default Newsletter;
