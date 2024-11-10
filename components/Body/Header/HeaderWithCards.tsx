import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import IconComponent from "@/components/ui/IconComponent";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const HeaderWithCards = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  const brandColor = useGetBrandColor();
  console.log(data);
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src={data.image?.image || part.selectedStyle?.defaultImgScr}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className={`aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[${brandColor}] to-[#776fff] opacity-20`}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className={`aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[${brandColor}] to-[#776fff] opacity-20`}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {data.headline?.text && (
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              {data.headline.text}
            </h2>
          )}
          {data.description?.text && (
            <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
              {data.description.text}
            </p>
          )}
        </div>

        {/* Cards Section */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {data.cards?.list.map((card) => (
            <div
              key={card.id}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              {"icon" in card && (
                <IconComponent iconName={card.icon || "PhoneIcon"} />
              )}

              <div className="text-base/7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                {"description" in card && card.description && (
                  <p className="mt-2 text-gray-300">{card.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderWithCards;
