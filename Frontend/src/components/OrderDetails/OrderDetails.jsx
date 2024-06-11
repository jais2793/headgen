import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderDetails = ({ userData, files, type }) => {

  const validateUserData = (item1, item2) => {
    if (
      item1.email.length > 0 &&
      item1.headshotType.length > 0 &&
      item1.gender.length > 0 &&
      item1.selectedPlan &&
      item2.length > 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <div className="flex justify-center">
            <dl className="w-full text-white divide-y divide-gray-200">
              <div className="flex flex-col pb-3">
                <div className="mb-1 text-white md:text-lg ">
                  Email address
                </div>
                <div className="text-lg font-semibold">{userData?.email}</div>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-400 md:text-lg ">
                  Gender
                </dt>
                <dd className="text-lg font-semibold">{userData?.gender}</dd>
              </div>
              <div className="flex flex-col pt-3">
                <dt className="mb-1 text-gray-400 md:text-lg ">
                  Headshot Type
                </dt>
                <dd className="text-lg font-semibold">{userData?.headshotType}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="w-1/2 overflow-auto">
          <div className="flex justify-center py-2 gap-2">
            <div
              className={`w-[300px] !bg-gradient-to-br ${type === 'Dating' ? 'from-[#8a0815] shadow-[0_0_0_2px_#ffffff]' : 'from-[#0d2e756c] to-[#031b4e] shadow-[0_0_0_2px_#ffffff]'} rounded-3xl p-4 flex flex-col gap-2 justify-evenly items-center min-h-[400px] relative transition duration-300`}
            >

              <div className={`text-[22px]  bg-gradient-to-r ${type === 'Dating' ? 'from-[#e73e71] to-[#af1040]' : 'from-[#afc5f5] to-[#6495ff]'}  inline-block text-transparent bg-clip-text font-bold`}>{userData?.selectedPlan?.title}</div>
              <div className="text-[36px] line-through text-[#dad4d4]">
                {userData?.selectedPlan?.originalPrice}
              </div>
              <div className="text-[75px] font-bold">{userData?.selectedPlan?.price}</div>
              <div className="flex flex-col items-center gap-4">
                {userData?.selectedPlan?.features &&
                  userData?.selectedPlan?.features?.map((e, idx1) => (
                    <div
                      key={`PriceCardFeature${idx1}`}
                      className="flex justify-center gap-2  w-full"
                    >
                      <span className="flex flex-col w-auto justify-center">
                        <FaCheckCircle size={18} className={` ${type === 'Dating' ? 'text-[#af1040]' : ' text-[#2563EB] '}`} />
                      </span>
                      <span className="text-lg text-wrap">{e}</span>
                    </div>
                  ))}
              </div>

            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full overflow-auto">
          <div className="flex gap-2 bg-[#1d2838]">
            {files &&
              files?.map((item) => <img src={item} className="h-[200px]" />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
