import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "./Header.css";

const HeaderLink = ({ data, showDropdown }) => {
  if (showDropdown) {
    return (
      <div className="relative flex gap-2 h-full py-4 px-4 shadow-bottom-blue transition duration-300 cursor-pointer group ">
        <div className="px-2 py-3 bg-transparent active:bg-[#0c0c0c] rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-300 flex justify-between gap-2">
          <div className="flex flex-col justify-center oswald ">{data?.name}</div>

          <div className="flex flex-col justify-center group-hover:rotate-180 transition duration-200">
            <IoIosArrowDown />
          </div>
        </div>

        <div className={`hidden group-hover:flex absolute top-full w-[120%] left-1/2 -translate-x-1/2 bg-[#2f2f31] flex-col text-[13px] font-semibold rounded-xl animateDropdown shadow-[0_0_0_1px_#061535] z-[99]`}>
          {data?.paths &&
            data?.paths?.map((item, idx) => (
              <Link
              key={`headerLink${idx}`}
                to={item?.path}
                className="px-3 py-3 hover:bg-gradient-to-r hover:from-[#02AFDC] hover:to-[#2563EB] text-[#ffffff] text-[16px] rounded-lg oswald"
              >
                {item?.name}
              </Link>
            ))}
        </div>
      </div>
    );
  }
  return (
    <Link
      to={data?.path}
      className="flex gap-2 h-full py-4 px-4 shadow-bottom-blue transition duration-300 cursor-pointer group"
    >
      <div className="px-2 py-3 bg-transparent active:bg-[#0c0c0c] rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-300 flex justify-between gap-2">
        <div className="flex flex-col justify-center oswald">{data?.name}</div>
      </div>
    </Link>
  );
};

export default HeaderLink;
