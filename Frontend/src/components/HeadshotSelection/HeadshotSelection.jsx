import React, { useEffect, useLayoutEffect, useState } from "react";
// import { GenIcon } from "react-icons";
import { FaChevronRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";

const HeadshotSelection = ({
  userData,
  setUserData,
  errors,
  headshots = null,
}) => {
  const { headshot } = useParams();
  const decodedParam = decodeURIComponent(headshot);
  const [headshotType, setHeadshotType] = useState(userData?.headshotType);

  useEffect(() => {
    if (headshotType) {
      console.log(headshotType);
      const updatedUserData = { ...userData };
      updatedUserData.headshotType = headshotType;
      setUserData(updatedUserData);
    }
  }, [headshotType]);

  useEffect(() => {
    console.log(headshotType);
    if (decodedParam) {
      setHeadshotType(decodedParam);
    }
  }, [decodedParam]);

  return (
    <div className="flex flex-col gap-4 justify-between relative h-full items-center space-y-10">
      <div>Pick from our custom headshot templates:</div>
      <div className="grid md:grid-cols-[auto_20rem] gap-8 w-full  ">
        <div className="w-full mt-2 flex flex-col  justify-end  rounded-xl">
          {headshots &&
            headshots
              ?.filter((item) => {
                return item?.name === headshotType && item?.headshotInfo;
              })
              .map((filteredItem, idx) => (
                <div
                  key={`filteredItem${idx}`}
                  className="w-full h-[90%]   rounded-xl  shadow-[0_0_1px#ababab] "
                >

                  <img
                    src={`${filteredItem?.headshotInfo?.imgPath}`}
                    className="w-full h-full rounded-xl"
                  />

                </div>
              ))}
        </div>

        <div className="flex flex-col justify-center  items-center w-full max-h-[400px]  overflow-auto">
          <div className="text-center text-xl py-2">What you'll get:</div>
          {headshots &&
            headshots
              ?.filter((item) => {
                return item?.name === headshotType && item?.headshotInfo;
              })
              .map((filteredItem, idx) => (
                <div className="flex justify-center rounded-xl ">
                  <img
                    src={filteredItem?.imgPreview}
                    className="!h-[320px] mx-auto rounded-xl"
                  />
                </div>
              ))}

        </div>
      </div>

      <div className="px-1 flex flex-col gap-4 justify-center">
        <div className="text-2xl text-center">Headshot Type:</div>
        <div className="flex flex-row justify-center flex-wrap gap-1">
          {headshots &&
            headshots?.map((item, idx) => (
              <div
                key={`headshotType${idx}`}
                className={`bg-[#f1f1f1]  text-[#131313] ${userData?.headshotType === item?.name
                  ? "!bg-[#355cc9] text-[#f1f1f1]"
                  : "bg-[#f1f1f1] "
                  } hover:bg-[#355cc9] hover:text-[#f1f1f1] rounded-lg w-1/4 transition duration-500 text-[18px] font-semibold cursor-pointer flex justify-center gap-2 relative`}
                onClick={() => {
                  setHeadshotType(item?.name);
                }}
              >
                <span>{item?.name}</span>
                <span className="absolute right-4 -translate-y-1/2 top-1/2">
                  <FaChevronRight />
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeadshotSelection;
