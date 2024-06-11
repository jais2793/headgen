import React from "react";
import AppSvgs from "../AppSvgs/AppSvgs";
import { MdGroups } from "react-icons/md";

const InfinityTextSlider = () => {
  const data = [
    {
      content: "AI HEADSHOTS",
    },
    {
      svg: <AppSvgs name="linkedIn" width={38} height={38} />,
      content: "LINKEDIN HEADSHOTS",
    },
    {
      svg: <AppSvgs name="tinder" />,
      content: "DATING HEADSHOTS",
    },
    {
      svg: (
        <>
          <MdGroups size={38} className="text-white" />
        </>
      ),
      content: "TEAM HEADSHOTS",
    },
    {
      //   svg: <AppSvgs name="tinder" />,
      content: "AI HEADSHOTS",
    },
    {
      svg: <AppSvgs name="linkedIn" width={38} height={38} />,
      content: "LINKEDIN HEADSHOTS",
    },
    {
      svg: <AppSvgs name="tinder" />,
      content: "DATING HEADSHOTS",
    },
    {
      svg: (
        <>
          <MdGroups size={38} className="text-white" />
        </>
      ),
      content: "TEAM HEADSHOTS",
    },

    {
      //   svg: <AppSvgs name="tinder" />,
      content: "AI HEADSHOTS",
    },
    {
      svg: <AppSvgs name="linkedIn" width={38} height={38} />,
      content: "LINKEDIN HEADSHOTS",
    },
    {
      svg: <AppSvgs name="tinder" />,
      content: "DATING HEADSHOTS",
    },
    {
      svg: (
        <>
          <MdGroups size={38} className="text-white" />
        </>
      ),
      content: "TEAM HEADSHOTS",
    },

    {
      //   svg: <AppSvgs name="tinder" />,
      content: "AI HEADSHOTS",
    },
    {
      svg: <AppSvgs name="linkedIn" width={38} height={38} />,
      content: "LINKEDIN HEADSHOTS",
    },
    {
      svg: <AppSvgs name="tinder" />,
      content: "DATING HEADSHOTS",
    },
    {
      svg: (
        <>
          <MdGroups size={38} className="text-white" />
        </>
      ),
      content: "TEAM HEADSHOTS",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div class="infinityTextSlider">
          <div class="text-slide-track-left ">
            {data?.map((item) => (
              <div class="text-slide-left pt-2 md:pt-0">
                <div className="flex gap-2 items-center">
                  {item.svg && <span>{item.svg}</span>}
                  <span className="text-white text-2xl sm:text-3xl md:text-5xl">{item?.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfinityTextSlider;
