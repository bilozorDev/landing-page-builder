import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React from "react";
import TestimonialDefaultStyle from "./TestimonialDefaultStyle";
import { TestimonialStyles } from "./TestimonialsStyles.t";
import TestimonialsRightImage from "./TestimonialsRightImage";
import TestimonialOverlapImage from "./TestimonialOverlapImage";
import TestimonialsImageBg from "./TestimonialsImageBg";
import TestimonialsWithFewTestimonials from "./TestimonialsWithFewTestimonials";

const Testimonials = ({ part }: { part: SelectedComponent }) => {
  if (part.selectedStyle?.id === TestimonialStyles.DEFAULT)
    return <TestimonialDefaultStyle part={part} />;
  if (part.selectedStyle?.id === TestimonialStyles.IMAGE_RIGHT)
    return <TestimonialsRightImage part={part} />;
  if (part.selectedStyle?.id === TestimonialStyles.OVERLAP_IMAGE)
    return <TestimonialOverlapImage part={part} />;
  if (part.selectedStyle?.id === TestimonialStyles.IMAGE_BACKGROUND)
    return <TestimonialsImageBg part={part} />;
  if(part.selectedStyle?.id === TestimonialStyles.WITH_FEW_TESTIMONIALS)
    return <TestimonialsWithFewTestimonials part={part} />;
  return <div>Testimonialss</div>;
};

export default Testimonials;
