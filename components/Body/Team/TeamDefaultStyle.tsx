import React from "react";
import {
  SelectedComponent,
  TeamMember,
} from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import IconComponent from "@/components/ui/IconComponent";

const TeamDefaultStyle = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {data.heading?.text && (
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {data.heading.text}
            </h2>
          )}
          {data.description?.text && (
            <p className="mt-6 text-lg/8 text-gray-600">
              {data.description.text}
            </p>
          )}
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {(data.teamMembers?.list as TeamMember[]).map(
            (member: TeamMember) => (
              <li key={member.id}>
                <img
                  alt=""
                  src={member.image}
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                  {member.name}
                </h3>
                <p className="text-base/7 text-gray-600">{member.position}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  {member.socialLinks.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.link}
                        className="text-gray-400 hover:text-gray-500"
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

export default TeamDefaultStyle;
