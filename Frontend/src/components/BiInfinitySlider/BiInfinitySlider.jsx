import React, { useEffect } from "react";


const BiInfinitySlider = ({ imgData1, imgData2 }) => {
  
  return (
<div className="w-full flex flex-col gap-4">
      <div class="infinitySlider">
        <div class="slide-track-left">
          {imgData1?.map((item) => (
            <div class="slide-left">
              <img src={item.path} className="!h-[200px] rounded-2xl" />
            </div>
          ))}
        </div>
      </div>

      <div class="infinitySlider">
        <div class="slide-track-right">
          {imgData2?.map((item) => (
            <div class="slide-right">
              <img src={item.path} className="!h-[200px] rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default BiInfinitySlider;
