import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import rn from "random-number";
import SideNav from "./SideNav";
import LoadingOverlay from "../loading/LoadingOverlay";
import Notification from "../alerts/Notification";
import { addToGallery, liveGallery, uploadToGallery } from "../../firebase";

function ImageGallery() {
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    liveGallery((querySnapshot) => {
      setPhotos([]);
      querySnapshot.forEach((doc) => {
        setPhotos((currentPhotos) =>
          currentPhotos.concat([{ ...doc.data(), id: doc.id, uploaded: true }])
        );
      });
    });

    setLoading(false);
  }, []);

  const uploadImage = (i) => {
    return new Promise((resolve) => {
      setToast({
        message: `Uploading ${!!i.file && i.file.name} ...`,
        type: "success",
        time: 1000,
      });

      uploadToGallery(i.file).then(() => {
        addToGallery(i.file.name);

        setToast({
          message: `Uploaded ${!!i.file && i.file.name}!`,
          type: "success",
          time: 1000,
        });

        resolve({
          ...i,
          id: rn(),
          uploaded: true,
          uploading: false,
        });
      });
    });
  };

  const onChange = (imageList) => {
    setUploading(true);
    const uploads = [];
    // eslint-disable-next-line no-param-reassign
    imageList = imageList.map((i) => {
      if (!i.id || i.dataURL || !i.uploaded) {
        const id = rn();
        uploads.push(uploadImage(i, id));

        return {
          ...i,
          src: i.dataURL,
          uploading: true,
          dataURL: null,
        };
      }

      return i;
    });

    setUploading(false);
    setPhotos([...imageList]);
    Promise.all(uploads).then((results) => {
      setPhotos([...photos, ...results]);
    });
  };

  return (
    <div className="min-h-full">
      <SideNav activeNav="Photos" />
      {(loading || uploading) && <LoadingOverlay />}
      {toast && (
        <Notification
          onClose={() => setToast(null)}
          message={toast.message || ""}
          description={toast.description || ""}
          type={toast.type}
        />
      )}
      <div className="lg:pl-64 flex flex-col">
        <main className="h-full flex-auto overflow-y-auto px-4 py-4">
          <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
                All Photos
              </h1>
            </div>
          </div>
          <ul className="py-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            <ImageUploading multiple value={photos || []} onChange={onChange}>
              {({ imageList, onImageUpload }) => {
                const images = imageList.map((image) => (
                  <li key={rn()} className="relative">
                    <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                      <img
                        src={image.dataURL || image.src}
                        alt=""
                        className="pointer-events-none object-cover group-hover:opacity-75"
                      />
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                      {image.title}
                    </p>
                  </li>
                ));

                const uploadButton = (
                  <button
                    key={rn()}
                    onClick={onImageUpload}
                    type="button"
                    className="relative block border-2 border-gray-300 border-dashed rounded-lg p-5 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
                      />
                    </svg>
                    <span className="mt-2 block text-sm font-medium text-gray-900">
                      Upload new image
                    </span>
                  </button>
                );

                return (
                  <>
                    {uploadButton}
                    {images}
                  </>
                );
              }}
            </ImageUploading>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default ImageGallery;
