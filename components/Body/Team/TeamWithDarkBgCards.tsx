import React from "react";
import {
  SelectedComponent,
  TeamMember,
} from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import IconComponent from "@/components/ui/IconComponent";

const TeamWithDarkBgCards = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          {data.heading?.text && (
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {data.heading.text}
            </h2>
          )}
          {data.description?.text && (
            <p className="mt-6 text-lg/8 text-gray-400">
              {data.description.text}
            </p>
          )}
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {(data.teamMembers?.list as TeamMember[]).map(
            (member: TeamMember) => (
              <li
                key={member.id}
                className="rounded-2xl bg-gray-800 px-8 py-10"
              >
                <img
                  alt={member.name}
                  src={member.image}
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                />
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">
                  {member.name}
                </h3>
                <p className="text-sm/6 text-gray-400">{member.position}</p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  {member.socialLinks?.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.link}
                        className="text-gray-400 hover:text-gray-300"
                      >
                        <span className="sr-only">{social.name}</span>
                        <IconComponent iconName={social.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default TeamWithDarkBgCards;
