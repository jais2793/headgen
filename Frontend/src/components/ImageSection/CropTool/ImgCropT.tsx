import React, { useState, useRef, useEffect } from "react";

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
  convertToPixelCrop,
} from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebouncingEffect";

import "react-image-crop/dist/ReactCrop.css";
import "./style.css";

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

const ImgCropT = ({ selectedImage, updateFile }) => {
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  useEffect(() => {
    if (selectedImage) {
      setImgSrc(selectedImage);
    }
  }, [selectedImage]);

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  async function onSaveCropClick() {
    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error("Crop canvas does not exist");
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY
    );
    const ctx = offscreen.getContext("2d");
    if (!ctx) {
      throw new Error("No 2d context");
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height
    );
    // You might want { type: "image/jpeg", quality: <0 to 1> } to
    // reduce image size
    const blob = await offscreen.convertToBlob({
      type: "image/png",
    });

    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
    }
    blobUrlRef.current = URL.createObjectURL(blob);

    // converting blob to base64
    const reader = new FileReader();
    reader.onload = function () {
      const base64 = reader.result;
      updateFile(selectedImage, base64);
   
      // console.log(base64, "base64");
    };
    reader.readAsDataURL(blob);
    // if (hiddenAnchorRef.current) {
    //   hiddenAnchorRef.current.href = blobUrlRef.current;
    //   hiddenAnchorRef.current.click();
    // }

    // console.log(blobUrlRef.current, "blobUrlRef.current");
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined);
    } else {
      setAspect(16 / 9);

      if (imgRef.current) {
        const { width, height } = imgRef.current;
        const newCrop = centerAspectCrop(width, height, 16 / 9);
        setCrop(newCrop);
        // Updates the preview
        setCompletedCrop(convertToPixelCrop(newCrop, width, height));
      }
      if (hiddenAnchorRef.current) {
        hiddenAnchorRef.current.href = blobUrlRef.current;
        hiddenAnchorRef.current.click();
      }
    }
  }

  return (
    <div className=" bg-white">

      <div className="w-full h-full space-y-2 p-1">
        {selectedImage && (
          <div className="flex justify-center">

          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={undefined}
            // minWidth={400}
            minHeight={100}
          
            // circularCrop
          >
            <img
              ref={imgRef}
              alt="Crop me"
              src={
                selectedImage ||
                "https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80"
              }
              style={{
                width: "100%",
                // height: "500px",
                transform: `scale(${scale}) rotate(${rotate}deg)`,
              }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
          </div>
        )}
       
        <div className="flex flex-col items-center gap-4 w-full px-4 pt-3">
       
          {/* <input type="file" accept="image/*" onChange={onSelectFile} /> */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="scale-input" className="block mb-2 text-lg font-medium text-gray-900 ">
              Scale:{" "}
            </label>
            <input
              id="scale-input"
              type="range"
              step="0.1"
              max="5"
              min="1"
              value={scale}
              disabled={!imgSrc}
              onChange={(e) => setScale(Number(e.target.value))}
              className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm "
            />
          
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="rotate-input" className="block mb-2 text-lg font-medium text-gray-900 ">
              Rotation:{" "}
            </label>
            <input
              type="range"
              step="0.1"
              id="rotate-input"
              value={rotate}
              disabled={!imgSrc}
              onChange={(e) =>
                setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
              }
              className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm "
            />
            
          </div>
          <button
          onClick={onSaveCropClick}
          className="hover:squeezyBtn bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-lg text-[#F1F1F1] rounded-lg w-1/2 py-1  hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
        >
          Save
        </button>

          <div>
            <button onClick={handleToggleAspectClick}>
              Toggle aspect {aspect ? "off" : "on"}
            </button>
          </div>
        </div>
      </div>
      {!!completedCrop && (
        <div className="hidden">
          <div>
            <canvas
              ref={previewCanvasRef}
              style={{
                border: "1px solid black",
                objectFit: "contain",
                width: completedCrop.width,
                height: completedCrop.height,
              }}
            />
          </div>
          <div>
            <button
              onClick={onSaveCropClick}
              className="px-6 py-2 !font-medium bg-green-500 rounded-md"
            >
              Save
            </button>
            <div style={{ fontSize: 12, color: "#666" }}>
              If you get a security error when downloading try opening the
              Preview in a new tab (icon near top right).
            </div>
            <a
              href="#hidden"
              ref={hiddenAnchorRef}
              download
              style={{
                position: "absolute",
                top: "-200vh",
                visibility: "hidden",
              }}
            >
              Hidden download
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgCropT;