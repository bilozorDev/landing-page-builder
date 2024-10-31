import { CldUploadWidget } from "next-cloudinary";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React, { useEffect, useState } from "react";
import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import { ActionTypes } from "@/components/reducers/bodyReducerTypes.t";

const ImageUpload = ({ part }: { part: SelectedComponent }) => {
  const [resource, setResource] = useState<{ url: string } | null>(null);
  console.log("resource", resource);
  const { dispatch } = useBodySettings();
  useEffect(() => {
    if (resource) {
      dispatch({
        type: ActionTypes.UPLOAD_IMAGE,
        payload: { id: part.id, imageSrc: resource?.url || "" },
      });
    }
  }, [resource, part.id, dispatch]);
  return (
    <>
      <CldUploadWidget
        signatureEndpoint="/api/sign-cloudinary-params"
        onSuccess={(result, { widget }) => {
          setResource(
            result?.info && typeof result.info !== "string"
              ? { url: result.info.secure_url }
              : null
          ); // { public_id, secure_url, etc }
          widget.close();
        }}
      >
        {({ open }) => {
          function handleOnClick() {
            setResource(null);
            open();
          }
          return (
            <div
              onClick={handleOnClick}
              className="relative max-h-72 overflow-hidden hover:cursor-pointer  block w-full rounded-lg group border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <p className="absolute hidden group-hover:flex items-center justify-center text-gray-200 font-medium text-lg group-hover:bg-gray-700/30 w-full h-full inset-0">
                Change image
              </p>

              <img
                src={part.image || "https://placehold.co/1920x1080"}
                className="object-cover mx-auto h-full "
              />
            </div>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default ImageUpload;
