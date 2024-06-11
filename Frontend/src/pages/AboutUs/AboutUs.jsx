import React from "react";
import AppSvgs from "../../components/AppSvgs/AppSvgs";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation } from "swiper/modules";

const AboutUs = () => {
  const imgData = [
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1zltDX4qtRqhuof60XWaTdOwQXSCQhETw&sz=s800",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1GUyv6jlwuNGrbaT6Yrd-GLY8pIF-keXf&sz=s800",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=15HVg-zhaBCYOB0Oc2Oo--UrS6AlYZuiL&sz=s800",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1HMLeKlSPY97lR-viypYIXazQF8uKjra5&sz=s800",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1AdTy58hl9yEcyjXuvp1F-UAPI8vrNQqh&sz=s800",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1oIOd5rDDBUX19HTiz5eDLokW57w1X0nF&sz=s800",
    },
  ];

  const aboutUsContent = (
    <div className="leading-relaxed flex flex-col gap-1">
      <span className="font-bold">
        Our Mission:
      </span>

      <span>
        Harness the transformative power of generative AI to enhance everyday life.
        Democratize access to generative AI, making it accessible to everyone.

      </span>

      <span className="font-bold">
        About Us:
      </span>

      <span>
        Playcloud Technologies Limited (HeadGen AI) is dedicated to perfecting AI-generated images.
        Situated at the crossroads of design, programming, and art.
        We craft exceptional digital tools and services leveraging generative AI.
      </span>


      <span className="font-bold">
        Founders:
      </span>

      <span>
        Ruark Gordon: Film Director, Producer, and Serial Entrepreneur.
        <br />
        Krasia Gordon: Computer Engineer with a knack for visual design.
      </span>

      <span className="font-bold">
        Contact Us:

      </span>

      <span>
        Email: support@headgen.ai <br />
        WhatsApp: +91 9820442749 (for collaborations or urgent requests)<br />
        We value your input and welcome your thoughts, feedback, and requests. Let's shape the future together!
      </span>

    </div>
  );

  const foundersContent = [
    {
      name: "Ruark Gordon",
      designation: "Founder & CEO.",
      imagePath: "/ruark.png",
      socials: [
        {
          name: "linkedIn",
          link: "/",
        },
        {
          name: "instagram",
          link: "/",
        },
      ],
      content: (
        <>
          Ruark Gordon is an experienced Film Director and Producer who has created over 700 ad films for 200 corporations over the past 11 years.
          As a serial entrepreneur, he has founded companies such as Affy Studios, Playcloud Technologies Limited, and Medzzi.
          With a deep passion for generative AI, Ruark has utilized his extensive experience as a photographer, during which he created print campaigns for numerous brands and corporations.
          This background has equipped him with the skills to craft the best prompts for generating the most realistic and high-quality AI images, tailored specifically for corporate needs and dating applications.

        </>
      )
    },
    {
      name: "Krasia Gordon",
      designation: "Co-Founder & Design Lead.",
      imagePath: "/krasia.png",
      socials: [
        {
          name: "linkedIn",
          link: "/",
        },
        {
          name: "instagram",
          link: "/",
        },
      ],

      content: (
        <>
          Krasia is a
          computer engineer with a knack for visual design. Together we created
          HeadGen AI.
          Krasia's unique blend of technical prowess and creative flair has been instrumental in driving the innovation and excellence that define HeadGen AI. With a deep understanding of both the artistic and technical aspects of AI, she ensures that their digital tools and services are at the cutting edge of generative AI technology.
        </>
      )
    },
  ];

  const logoData = [
    {
      name: "walmart logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1up3Y8G7BYQt4vFDeXYicUUbrnMDNz0QK&sz=s600",
    },
    {
      name: "microsoft logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=10vAAtNBCVa35oLUmY6NZKDwrq2kl8w6V&sz=s600",
    },
    {
      name: "google logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1T5_P_dHHDNxPdlN_oCp8lxcxAM7BXYEp&sz=s600",
    },
    {
      name: "airbnb logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1m45hPUM6sDgtDdC1hG89FKgd7MAmAwsi&sz=s600",
    },
    {
      name: "amazon logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1bupr8brSqprqrt5xDygIUbcTkxkc-uX0&sz=s600",
    },
  ];

  return (
    <div className="bg-[#161616]">
      <div className="relative w-full text-white py-10 xl:py-20 px-10 xl:px-[250px]  flex flex-col gap-8 xl:gap-[3.5rem] tracking-wider">
        <div className="mt-10">
          <img src="https://drive.google.com/thumbnail?id=1KpGw_yfU-oOPsc9fkrJUWAcIkJOkp8_M&sz=s1000" className="w-full rounded-xl  shadow-[0_0_0_1px#d1d1d1]" />
        </div>
        <div className="flex justify-center my-10">
          <div className="flex flex-row flex-wrap md:justify-between w-full">
            <div className="w-1/5 flex flex-col gap-4 justify-center items-center ">
              <div className="flex flex-col gap-1 w-fit">
                <div className="text-[#F1F1F1] text-[60px] 2xl:text-[72px] font-medium leading-6">
                  Our
                </div>
                <div className="text-[60px] 2xl:text-[72px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
                  story
                </div>
              </div>
            </div>
            <div className="w-3/5 flex flex-col gap-6 items-center">
              {aboutUsContent && (
                <p className="text-justified">{aboutUsContent}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* trusted by */}

      <div className="flex  justify-center gap-6">
        <div
          className={`flex flex-col justify-center text-center font-bold text-[20px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] text-transparent bg-clip-text `}
        >
          Trusted By
        </div>
        <div className={`flex flex-row`}>
          {logoData?.map((item, idx) => (
            <div
              key={`logo${idx}`}
              className="w-[150px] flex flex-col justify-center"
            >
              <img
                src={item?.imgPath}
                alt={item?.name}
                className="w-auto h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full text-white px-10 xl:px-[250px] py-20 bg-[#161616] flex flex-col gap-8 xl:gap-[6rem] tracking-wider">
        <div className="text-[#F1F1F1] text-center text-5xl font-medium">
          Meet the AI Founders of{" "}
          <span className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB]  inline-block text-transparent bg-clip-text font-bold py-5">
            Headgen
          </span>
        </div>

        <div className="flex flex-row flex-wrap md:justify-between w-full">
          <div className="w-2/5 flex flex-col gap-4 justify-center items-start ">
            <div
              className={`flex flex-col justify-evenly items-center bg-gradient-to-b  from-[#1a1e43] to-[#1b2bbb] rounded-xl  py-10 group shadow-[0_0_0_1px_#babcbf80]`}
            >
              <div className="w-[80%] -translate-y-20 group-hover:-translate-y-24 rounded-xl transition duration-300">
                <img
                  src={foundersContent[0]?.imagePath}
                  className="w-full rounded-xl"
                />
              </div>
              <div
                className={`h-[50%] flex flex-col justify-between
                gap-4 items-center`}
              >
                <div className="px-2 text-center font-bold text-[#F1F1F1] text-3xl">
                  {foundersContent[0]?.name}
                </div>

                <div className="px-2 text-center font-bold text-[#F1F1F1] text-md">
                  {foundersContent[0]?.designation}
                </div>
                <div className="flex font-medium animatedReveal">
                  {foundersContent[0]?.socials?.map((e, idx) => (
                    <Link
                      key={`founder0${idx}`}
                      to={e?.link}
                      className="flex flex-col justify-center "
                    >
                      <AppSvgs name={e?.name} width={32} height={32} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/5 flex flex-col gap-6 justify-center *:items-center">
            {foundersContent[0]?.content && (
              <p className="text-justified">{foundersContent[0]?.content}</p>
            )}
          </div>
        </div>

        <div className="flex flex-row flex-wrap md:justify-between w-full">
          <div className="w-3/5 flex flex-col gap-6 justify-center *:items-center">
            {foundersContent[1]?.content && (
              <p className="text-justified">{foundersContent[1]?.content}</p>
            )}
          </div>

          <div className="w-2/5 flex flex-col gap-4 justify-center items-end ">
            <div
              className={`flex flex-col justify-evenly items-center bg-gradient-to-b  from-[#1a1e43] to-[#1b2bbb] rounded-xl  py-10 group shadow-[0_0_0_1px_#babcbf80]`}
            >
              <div className="w-[80%] -translate-y-20 group-hover:-translate-y-24 rounded-xl transition duration-300">
                <img
                  src={foundersContent[1]?.imagePath}
                  className="w-full rounded-xl"
                />
              </div>
              <div
                className={`h-[50%] flex flex-col justify-between
                gap-4 items-center`}
              >
                <div className="px-2 text-center font-bold text-[#F1F1F1] text-3xl">
                  {foundersContent[1]?.name}
                </div>

                <div className="px-2 text-center font-bold text-[#F1F1F1] text-md">
                  {foundersContent[1]?.designation}
                </div>
                <div className="flex font-medium animatedReveal">
                  {foundersContent[1]?.socials?.map((e, idx) => (
                    <Link
                      key={`founder0${idx}`}
                      to={e?.link}
                      className="flex flex-col justify-center "
                    >
                      <AppSvgs name={e?.name} width={32} height={32} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="/upload/Corporate%20Headshots"
          className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 px-2 text-[14px]"
        >
          Get your photos for $29
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
