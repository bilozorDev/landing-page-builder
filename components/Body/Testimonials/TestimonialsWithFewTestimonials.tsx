import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import {
  SelectedComponent,
  StatsBlockList,
} from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const TestimonialsWithFewTestimonials = ({
  part,
}: {
  part: SelectedComponent;
}) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  const brandColor = useGetBrandColor();
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {data.subheading?.text && (
            <h2 className={`text-base/7 font-semibold text-[${brandColor}]`}>
              {data.subheading.text}
            </h2>
          )}
          {data.heading?.text && (
            <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {data.heading.text}
            </p>
          )}
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {(data.testimonials?.list as StatsBlockList[])?.map(
              (testimonial: StatsBlockList) => (
                <div
                  key={testimonial.id}
                  className="pt-8 sm:inline-block sm:w-full sm:px-4"
                >
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.description}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600">{testimonial.value}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsWithFewTestimonials;
