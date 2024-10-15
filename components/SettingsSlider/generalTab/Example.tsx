import { useGeneralSetting } from "@/components/contexts/GeneralTabSettings";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const { generalSettings } = useGeneralSetting();
  const { brandColor } = generalSettings.colors;
  return (
    <div className="isolate bg-white rounded-3xl px-6 pb-24 sm:pb-32 lg:px-8 mt-16">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className={`text-base font-semibold leading-8 text-[${brandColor}]` }>
          Our track record
        </h2>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact sales
        </h2>
        <p className="mt-2 text-lg leading-8">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        <div className="flex gap-x-6">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[${brandColor}]`}>
            <ChatBubbleLeftRightIcon
              aria-hidden="true"
              className="h-6 w-6 text-white"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7">Sales support</h3>
            <p className="mt-2 leading-7">
              Ut cursus est ut amet. Lobortis eget egestas leo vitae eget
              porttitor risus blandit. Nunc a in lorem vel iaculis porttitor.
            </p>
            <p className="mt-4">
              <a href="#" className={`text-sm font-semibold leading-6 text-[${brandColor}]`}>
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
