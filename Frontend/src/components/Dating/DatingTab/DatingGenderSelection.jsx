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

import UserDetails from "../../UserDetails/UserDetails";

const DatingGenderSelection = ({
  userData,
  setUserData,
  errors,
  headshots = null,
  type,
}) => {


  useEffect(() => {
    if (localStorage.getItem("userData")) {

      setUserData({
        email: "",
        gender: "Male",
        files: "",
        generationType: "individualDating",

      });
      localStorage.clear();
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const selectionData = [
    {
      name: "Male",
      bannerImg: "https://drive.google.com/thumbnail?id=1Le7sNfry_GtYt4c80YNlqF3ie_nAyIIb&sz=s800",
      imgPreview: 'https://drive.google.com/thumbnail?id=1gmamUE-6HTTCgEa3LO9ZBTf-ObzzuRdF&sz=s400'
    },
    {
      name: "Female",
      bannerImg: "https://drive.google.com/thumbnail?id=159GoHgA0aUlaBvT4Y47sVN6MtbX9eFP1&sz=s800",
      imgPreview: 'https://drive.google.com/thumbnail?id=1ldGP02xs-W7coX7omosobZO6_x6iGdUF&sz=s400'
    },

  ];

  return (
    <div className="flex flex-col gap-4 justify-between relative h-full items-center space-y-10 ">
      <div>Pick from our custom headshot templates:</div>
      <div className="grid md:grid-cols-[auto_20rem] gap-8 w-full  ">
        <div className="w-full mt-2 flex flex-col  justify-end  rounded-xl">
          {userData?.gender?.length > 0 &&
            selectionData
              ?.filter((item) => {
                return item?.name === userData?.gender;
              })
              .map((filteredItem, idx) => (
                <div
                  key={`filteredItem${idx}`}
                  className="w-full h-[90%]   rounded-xl  shadow-[0_0_1px#ababab] "
                >

                  <img
                    src={`${filteredItem?.bannerImg}`}
                    className="w-full h-full rounded-xl"
                  />

                </div>
              ))}
        </div>

        <div className="flex flex-col justify-center  items-center w-full max-h-[400px]  overflow-auto">
          <div className="text-center text-xl py-2">What you'll get:</div>
          {userData?.gender?.length > 0 &&
            selectionData
              ?.filter((item) => {
                return item?.name === userData?.gender;
              })
              .map((filteredItem) => (
                <div className="flex justify-center rounded-xl ">
                  <img
                    src={filteredItem?.imgPreview}
                    className="!h-[320px] mx-auto rounded-xl"
                  />
                </div>
              ))}

        </div>
      </div>

      <div className="px-1  w-full">
        <UserDetails
          userData={userData}
          setUserData={setUserData}
          errors={errors}
          type={type}
        />
      </div>
    </div>
  );
};

export default DatingGenderSelection;
