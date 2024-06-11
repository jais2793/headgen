import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfinityTextSlider from "../../components/InfinitySlider/InfinityTextSlider";

const HowItWorks = () => {
  //   const [isAnimated, setIsAnimated] = useState(false);
  const cardData = [
    {
      title: "Upload a selfie",
      imgPath:
        "https://drive.google.com/thumbnail?id=1Z2eHvjtVo6jYo9EGwSPYILub23hsMxBY&sz=s600",
    },
    {
      title: "Make payment",
      imgPath:
        "https://drive.google.com/thumbnail?id=1pndNiBuEgvuDl_RVGFTpw_W6vCCWvCn1&sz=s600",
    },
    {
      title: "Get Images",
      imgPath:
        "https://drive.google.com/thumbnail?id=17smkegUhG8QWeR3v8xMhLqx8gGPG8l1a&sz=s600",
    },
  ];

  const imgData1 = [
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1zltDX4qtRqhuof60XWaTdOwQXSCQhETw&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1GUyv6jlwuNGrbaT6Yrd-GLY8pIF-keXf&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=15HVg-zhaBCYOB0Oc2Oo--UrS6AlYZuiL&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1HMLeKlSPY97lR-viypYIXazQF8uKjra5&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1AdTy58hl9yEcyjXuvp1F-UAPI8vrNQqh&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1oIOd5rDDBUX19HTiz5eDLokW57w1X0nF&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1SC-xFjJKwj9IUmnK8rYdoJnVAcg5-wQH&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1qYhll_Ny7A4pJhoPPvW6743tYJiE7yWP&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1zltDX4qtRqhuof60XWaTdOwQXSCQhETw&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1GUyv6jlwuNGrbaT6Yrd-GLY8pIF-keXf&sz=s600",
    },
  ];

  return (
    <div className="w-full py-20 flex flex-col bg-[#161616] gap-10">
      <div className="flex justify-center px-10  xl:px-[160px] 2xl:px-[250px] py-14">
        <div className="flex flex-row flex-wrap md:justify-between w-full">
          <div className="w-1/5 flex flex-col gap-4 justify-center items-center ">
            <div className="flex flex-col gap-1 w-fit">
              <div className="text-[#F1F1F1] text-[60px] 2xl:text-[72px] font-medium leading-6">
                How it
              </div>
              <div className="text-[60px] 2xl:text-[72px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
                works
              </div>
              <Link
                to="/upload/Corporate%20Headshots"
                className="hover:squeezyBtn flex flex-col justify-center  items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 px-2 text-[14px]"
              >
                Get your photos for $29
              </Link>
            </div>
          </div>
          <div className="w-3/5 flex flex-col gap-6 items-center">
            <div className="w-full flex justify-center">
              <iframe
                src="https://drive.google.com/file/d/16UKFJcaT2Y3Kn9dsSakqJl6uVfYJITEb/preview"
                width="640"
                height="480"
                className="rounded-2xl"
              ></iframe>
            </div>

            <div className="text-[#F1F1F1] text-[10px]">
              Upload a selfie and get Professional Images for your LinkedIn
              Profile, Resume, TV Commercial etc
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-24 px-10  xl:px-[160px] 2xl:px-[250px]">
        {/* <div className="text-center text-[60px] text-[#F1F1F1]">
          <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            HeadGen
          </span>{" "}
          AI Blog
        </div> */}
        <div>
          <div className="flex flex-row justify-between">
            {cardData?.map((item, idx) => (
              <div
                key={`blogCard${idx}`}
                className={`flex flex-col justify-evenly items-center w-[32%] bg-gradient-to-b from-[#1a1e43] to-[#1b2bbb] rounded-xl  py-10 group shadow-[0_0_0_1px_#babcbf80]`}
              >
                <div className="w-[80%] -translate-y-20 group-hover:-translate-y-24 rounded-xl transition duration-300">
                  <img src={item?.imgPath} className="w-full rounded-xl" />
                </div>
                <div
                  className={`h-[100px] flex flex-col ${
                    item?.btnLink ? "justify-between" : ""
                  }  gap-4 items-center`}
                >
                  {item?.title?.length > 0 && (
                    <div className="px-2 text-center font-bold text-[#F1F1F1] text-3xl ">
                      {item?.title}
                    </div>
                  )}

                  {item?.btnLink && (
                    <div className="w-2/3">
                      <button className="hover:squeezyBtn bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 px-2 text-[14px]">
                        Learn More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <InfinityTextSlider />
        </div>
      </div>

      <div className="flex flex-col gap-10 px-10  xl:px-[160px] 2xl:px-[250px]">
        <div className="text-center text-[60px] text-[#F1F1F1]">
          Get{" "}
          <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Team Headshots
          </span>
        </div>

        <div className="container mx-auto bg-white py-10 rounded-xl flex ">
          <div className="grid grid-cols-6 gap-3 px-8">
            <div className="col-span-2 text-black text-6xl font-sans font-bold">
              AI Generated Team Gallery
            </div>
            {imgData1.map((item) => {
              return (
                <div className="text-black border rounded-lg overflow-hidden">
                  <img src={item?.path} alt="" />
                  <div className="flex flex-col px-2 py-1">
                    <span className="font-medium">John Doe</span>
                    <span className="font-normal">Software Developer</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-10  xl:px-[160px] 2xl:px-[250px]">
        <div className="text-center text-[60px] text-[#F1F1F1]">
          Get{" "}
          <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Custom Headshots
          </span>
        </div>

        <div className="container rounded-xl flex justify-center">
          <Link to={`/upload/customize`}>
            <img
              src={`/howItWorks/customizeSection.png`}
              className="w-full rounded-xl"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-10  xl:px-[160px] 2xl:px-[250px]">
        <div className="text-center text-[60px] text-[#F1F1F1]">
          Create{" "}
          <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Custom Prompts
          </span>
        </div>

        <div className="container rounded-xl flex justify-center">
          <Link to={`/upload/prompt`}>
            <img
              src={`/howItWorks/promptSection.png`}
              className="w-full rounded-xl"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
