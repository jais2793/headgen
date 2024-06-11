import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const SubDropdown = ({ data, setShowMobDropdown }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div
        className="w-full flex justify-center  py-2 hover:bg-gradient-to-r hover:from-[#02AFDC] hover:to-[#2563EB] text-[#ffffff] text-lg transition duration-300 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="w-[120px] flex justify-center gap-1">
          {data.name}
          <span className="flex flex-col justify-center">
            <IoIosArrowDown />
          </span>
        </span>
      </div>

      {data?.paths?.map((item, idx) => (
        <Link
          key={`subDropdownMenu${idx}`}
          href={item.path}
          className={`${
            showDropdown ? "" : "hidden"
          } w-full text-center py-2 bg-[#1a1a1b] hover:bg-gradient-to-r hover:from-[#02AFDC] hover:to-[#2563EB] text-[#ffffff] text-lg transition duration-300 cursor-pointer relative`}
          onClick={() => setShowMobDropdown(false)}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default SubDropdown;
