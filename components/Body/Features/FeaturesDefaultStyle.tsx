import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import IconComponent from "@/components/ui/IconComponent";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";

const FeaturesDefaultStyle = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  const brandColor = useGetBrandColor();
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className={`text-base/7 font-semibold text-[${brandColor}]`}>
                {data.subtitle.text}
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {data.headline.text}
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                {data.description.text}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {data.features.list.map((feature) => (
                  <div key={feature.name} className="flex">
                    <div className="mr-4">
                      <IconComponent iconName={feature.icon || "PhoneIcon"} />
                    </div>
                    <div className="flex-1">
                      <dt className="inline font-semibold text-gray-900 space-x-4">
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={part.image || "https://placehold.co/1920x1080"}
            width={1920}
            height={1080}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesDefaultStyle;
