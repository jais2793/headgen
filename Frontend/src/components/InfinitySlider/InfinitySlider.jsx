import React from "react";

const InfinitySlider = ({ imgData1, imgData2, height = '200px' }) => {
  if (imgData2) {
    return (
      <div className="w-full flex flex-col gap-4">
        <div class="infinitySlider">
          <div class="slide-track-left">
            {imgData1?.map((item) => (
              <div class="slide-left">
                <img src={item.path} className={`!h-[${height}] rounded-2xl`} />
              </div>
            ))}
          </div>
        </div>

        <div class="infinitySlider">
          <div class="slide-track-right">
            {imgData2?.map((item) => (
              <div class="slide-right">
                <img src={item.path} className={`!h-[${height}] rounded-2xl`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="w-full flex flex-col gap-4">
          <div class="infinitySlider">
            <div class="slide-track-left">
              {imgData1?.map((item) => (
                <div class="slide-left">
                  <img src={item.path} className={`!h-[${height}] rounded-2xl`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

};

export default InfinitySlider;
