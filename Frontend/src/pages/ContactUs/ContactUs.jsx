import React from "react";

const ContactUs = () => {
  const contactContent = [
    {
      title: "Company Name:",
      heading: "Playcloud Technologies Private Limited",
      content: (
        <>
          <span className="font-bold">Address:</span>
          <br />
          10th floor, RMZ Latitude Commercial Building, Bellary Rd,
          Vinayakanagar, Byatarayanapura, Bengaluru, Karnataka 560024
          <br />
          Date: 10-01-2024
        </>
      ),
    },
    {
      title: "Contact:",
      heading: "",
      content: (
        <>
          Playcloud Technologies Private Limited
          <br />
          Email: <a href="mailto:support@headgen.ai" className="text-[#e6e4e4] underline hover:text-[#ffffff]">support@headgen.ai</a>
          <br />
          Customer Care: <a href="tel:+919987357345" className="text-[#e6e4e4] underline hover:text-[#ffffff]">+91 9987357345</a>
        </>
      ),
    },
  ];

  return (
    <div className="w-full text-white py-10 xl:py-20 px-10 xl:px-[250px] bg-[#161616] flex flex-col gap-6 xl:gap-[3.5rem] tracking-wider">
      <div className="w-full text-center font-medium text-[44px] md:text-[52px] xl:text-[60px]">
        Contact Us
      </div>

      <div className="flex gap-10 font-regular text-[#f1f1f1]">
        {contactContent &&
          contactContent?.map((item) => (
            <div className="w-[48%] shadow-[0_0_0_1px_#F1F1F1] rounded-xl p-6 flex flex-col gap-2  text-[16px] md:text-[18px]  xl:text-[22px] bg-gradient-to-r from-[#295ac4] to-[#0a3797] cursor-default hover:-translate-y-2 transition duration-1000">
              <div className="flex font-semibold gap-2">
                <div className="font-bold">{item?.title}</div>
                {item?.heading}
              </div>
              <div className="leading-7 xl:leading-9  font-semibold">
                {item?.content}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContactUs;
