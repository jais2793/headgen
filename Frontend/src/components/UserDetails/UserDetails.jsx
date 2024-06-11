import React, { useEffect, useState } from "react";
import { IoManSharp, IoWoman } from "react-icons/io5"

const UserDetails = ({ userData, setUserData, errors, type }) => {
  const [email, setEmail] = useState(userData?.email);
  const [gender, setGender] = useState(userData?.gender);
  const genderSelections = [
    {
      name: "Male",
      svg: (
        <>
          <IoManSharp size={22} />
        </>
      ),
    },
    {
      name: "Female",
      svg: (
        <>
          <IoWoman size={22} />
        </>
      ),
    },
  ];

  useEffect(() => {
    const updatedUserData = { ...userData };
    updatedUserData.email = email;
    updatedUserData.gender = gender;
    setUserData(updatedUserData);
  }, [email, gender]);



  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-col items-center gap-4 w-1/2 relative">
          <label htmlFor="email" className="text-center text-2xl text-white ">
            Enter your Email:
          </label>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Enter your email"
            className="w-2/3 text-center bg-[#f1f1f1]  text-[#131313] text-[18px] px-2 rounded-lg  shadow-[0_0_0_1px_#5d5b68] focus:shadow-[0_0_0_1px_#1d2838]"
          />

          <div className="text-[#ff1717] text-[16px] leading-3">
            {errors?.email && errors?.email}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-1/2">
          <label htmlFor="gender" className="text-center text-2xl text-white">
            What's your gender?
          </label>
          <div className="flex gap-2 justify-center">
            {genderSelections &&
              genderSelections?.map((item, idx) => (
                <div
                  onClick={() => {
                    setGender(item?.name);
                  }}
                  key={`gender${idx}`}
                  className={`bg-[#f1f1f1]  text-[#131313] ${userData?.gender === item?.name
                    ? "!bg-[#355cc9] text-[#f1f1f1]"
                    : "bg-[#f1f1f1]"
                    } hover:bg-[#355cc9] hover:text-[#f1f1f1] rounded-lg w-1/3 transition duration-500 text-[18px] font-semibold cursor-pointer flex justify-center gap-2`}
                >
                  <span className="flex flex-col justify-center">
                    {item?.svg}
                  </span>
                  <span>{item?.name}</span>
                </div>
              ))}
          </div>
          <div className="text-[#ff1717] text-center text-[16px] leading-3">
            {errors?.gender && errors?.gender}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
