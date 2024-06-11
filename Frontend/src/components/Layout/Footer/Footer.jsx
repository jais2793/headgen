import React from "react";
import { Link } from "react-router-dom";
import AppSvgs from "../../AppSvgs/AppSvgs";

const Footer = () => {
  const footerContent = [
    {
      title: "Corporate headshot",
      list: [
        {
          title: "Dating Photos",
          link: "/upload/dating",
        },
        {
          title: "Doctor Headshots",
          link: "/upload/Doctor%20Headshots",
        },
        {
          title: "Lawyer Headshots",
          link: "/upload/Lawyer%20Headshots",
        },
        {
          title: "Salesperson",
          link: "/upload/Sales%20Headshots",
        },
      ],
    },
    {
      title: "Corporate headshot",
      list: [
        {
          title: "Corporate Headshots",
          link: "/upload/Corporate%20Headshots",
        },
        {
          title: "Student Headshots",
          link: "/upload/Student%20Headshots",
        },
        {
          title: "Teacher Headshots",
          link: "/upload/Teacher%20Headshots",
        },
      ],
    },
    {
      title: "Company",
      list: [
        {
          title: "AI Portrait Generator",
          link: "/upload",
        },
        {
          title: "LinkedIn Headshots",
          link: "/upload/Corporate%20Headshots",
        },
        {
          title: "Blog",
          link: "/blogs",
        },
      ],
    },
    {
      title: "Trust & Legal",
      list: [
        {
          title: "About us",
          link: "/aboutus",
        },
        {
          title: "Privacy Policy",
          link: "/privacypolicy",
        },
        {
          title: "Terms & Conditions",
          link: "/termsandconditions",
        },
        {
          title: "Cancellation & Refund",
          link: "cancellation",
        },
        {
          title: "Contact",
          link: "/contactus",
        },
      ],
    },
    {
      title: "Support",
      list: [
        {
          title: "Support@headgen.ai",
          link: "email:support@headgen.ai",
        },
      ],
    },
  ];

  return (
    <div id="footer" style={{
      fontFamily: 'Oswald'
    }} className="flex !oswald flex-col items-center gap-20 px-10 2xl:px-[250px] py-10">
      <div className="flex flex-row flex-wra lg:flex-nowrap gap-2 w-full">
        <div className="w-[350px] hidden rounded-2xl lg:flex flex-col justify-center items-center relative">
          <img
            src="https://drive.google.com/thumbnail?id=18dNFZW3wy9xCml4GbGHxJhgPlv4mOM5i&sz=s600"
            alt=""
            srcset=""
            className="w-full h-full rounded-2xl shadow-[0_0_0_3px#59caff]"
          />
          <div className="flex flex-col gap-1">
            <div className="w-[90%] px-2 py-3 bg-gradient-to-r from-[#59caff] to-[#5636F3] rounded-xl text-[#f1f1f1] text-[15px] font-medium transition duration-300 absolute -bottom-4 left-1/2 -translate-x-1/2">
              <img src="/logo.webp" />
            </div>
          </div>
        </div>

        <div className="py-16 px-8 oswald md:px-16  w-full rounded-2xl bg-[#E6E0F4] grid md:grid-cols-5 gap-2 md:justify-center">
          {footerContent &&
            footerContent?.map((fc, idx) => (
              <div className="flex flex-col gap-2  w-[90%] " key={`fc${idx}`}>
                <div className="text-base xl:text-lg font-medium h-[80px]">
                  {fc?.title}
                </div>
                <div className="flex flex-col gap-1 ">
                  {fc?.list &&
                    fc?.list?.map((item, idx2) => (
                      <Link to={item?.link} key={`fcl${idx2}`}>
                        {item?.title}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="w-full flex flex-row justify-between">
        <div className="text-sm text-[#f1f1f1]">
          Copyright ©2024 Playcloud Technologies Private Limited.
        </div>
        <div className="flex flex-row gap-4">
          <Link to="/">
            <AppSvgs name="linkedIn" />
          </Link>

          <AppSvgs name="tiktok" />
          <AppSvgs name="youtube" />
          <AppSvgs name="x" />
          <AppSvgs name="facebook" />
          <AppSvgs name="discord" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
