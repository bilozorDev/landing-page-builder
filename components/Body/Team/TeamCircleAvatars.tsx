import React from "react";
import {
  SelectedComponent,
  TeamMember,
} from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";

const TeamCircleAvatars = ({ part }: { part: SelectedComponent }) => {
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
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {(data.teamMembers?.list as TeamMember[]).map(
            (member: TeamMember) => (
              <li key={member.id}>
                <img
                  alt={member.name}
                  src={member.image}
                  className="mx-auto h-24 w-24 rounded-full"
                />
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm/6 text-gray-600">{member.position}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default TeamCircleAvatars;
