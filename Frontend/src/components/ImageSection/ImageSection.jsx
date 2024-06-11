import React, { useState } from "react";
import DragAndDrop from "./DragAndDrop/DragAndDrop";
import ImgCropT from "./CropTool/ImgCropT";

const ImageSection = ({ files, setFiles, fileErrorMsg, setFileErrorMsg }) => {
  const maxUploads = 4;
  const [selectedImage, setSelectedImage] = useState(null);

  const correctData = [
    {
      imgPath:
        "https://dashboard.aragon.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flooking_at_camera.71f1f9f0.jpeg&w=384&q=75",
      content: (
        <>
          👁️ <strong>Eye Contact:</strong> You should be looking directly at the
          camera.
        </>
      ),
    },
    {
      imgPath:
        "https://dashboard.aragon.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftaken_recently.c5880900.jpeg&w=384&q=75",
      content: (
        <>
          🆕 <strong> Recent:</strong> Photos taken recently, ideally within the
          past six months.
        </>
      ),
    },
    {
      imgPath:
        "https://dashboard.aragon.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclear.ad993087.jpeg&w=384&q=75",
      content: (
        <>
          ☀️ <strong> Clear:</strong> Good lighting and not too far or close to
          the camera.
        </>
      ),
    },
  ];

  const incorrectData = [
    {
      imgPath:
        "https://dashboard.aragon.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faccessories.4e9558eb.png&w=384&q=75",
      content: (
        <>
          🧢 <strong>No Accessories:</strong> (e.g. hats, backpacks,
          headphones).
        </>
      ),
    },
    {
      imgPath:
        "https://dashboard.aragon.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frevealing.d2f1ddf4.jpeg&w=384&q=75",
      content: (
        <>
          👙 <strong>No Revealing Clothing:</strong> (e.g. tank tops, shirtless,
          bikinis).
        </>
      ),
    },
    {
      imgPath:
        "https://dashboard.aragon.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsilly_expression.7fcdef6c.png&w=384&q=75",
      content: (
        <>
          🥴 <strong> No Goofy Faces:</strong> No unusual expressions (e.g. duck
          faces, tongue out).
        </>
      ),
    },
  ];

  const deleteFile = (file) => {
    setFiles((currentSelection) => {
      const newSelection = currentSelection.slice();
      const fileIndex = currentSelection.indexOf(file);
      if (selectedImage === file) {
        setSelectedImage(null);
      }
      newSelection.splice(fileIndex, 1);
      return newSelection;
    });
  };

  const updateFile = (oldFile, newFile) => {
    setFiles((currentSelection) => {
      const newSelection = currentSelection.slice();
      const fileIndex = currentSelection.indexOf(oldFile);
      newSelection[fileIndex] = newFile;
      // setSelectedImage(newFile);
      setSelectedImage(null);
      return newSelection;
    });
  };

  return (
    <div className="flex w-full h-full max-h-[700px] justify-center">
      <DragAndDrop
        files={files}
        setFiles={setFiles}
        maxUploads={maxUploads}
        setSelectedImage={setSelectedImage}
        deleteFile={deleteFile}
        fileErrorMsg={fileErrorMsg}
        setFileErrorMsg={setFileErrorMsg}
      />

      <div className="w-[60%] relative max-h-full overflow-auto px-4 flex flex-col gap-2">
        {selectedImage && (
          <>
            <div>
              {selectedImage && (
                <div className="relative w-full">
                  <ImgCropT
                    selectedImage={selectedImage}
                    updateFile={updateFile}
                  />
                </div>
              )}
            </div>
          </>
        )}

        <div className="w-full h-fit bg-[#ecfff1] text-black rounded-md flex flex-col gap-2 p-4">
          <div className="text-[18px]">✅ PHOTO REQUIREMENTS</div>
          <div className="w-full flex gap-2 p-4">
            {correctData &&
              correctData?.map((item, idx) => (
                <div className="flex flex-col  rounded-2xl w-[32%]  max-w-[200px]">
                  <img
                    src={item?.imgPath}
                    className="w-full h-[180px] rounded-2xl"
                  />
                  <span className="text-justified text-[14px] text-[#131313] leading-relaxed p-1">
                    {item?.content}
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div className="w-full h-fit bg-[#ffecec] text-black rounded-md flex flex-col gap-2 p-4">
          <div className="text-[18px]">❌ PHOTO RESTRICTIONS</div>
          <div className="w-full flex gap-2 p-4">
            {incorrectData &&
              incorrectData?.map((item, idx) => (
                <div className="flex flex-col  rounded-2xl w-[32%]  max-w-[200px]">
                  <img
                    src={item?.imgPath}
                    className="w-full h-[180px] rounded-2xl"
                  />
                  <span className="text-justified text-[14px] text-[#131313] leading-relaxed p-1">
                    {item?.content}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* {croppedImage && <img src={croppedImage} />} */}
    </div>
  );
};

export default ImageSection;
