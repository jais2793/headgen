import React, { useEffect, useRef, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { PiCurrencyDollarBold } from "react-icons/pi";
import "./styles.css";
import Select, { useStateManager } from "react-select";
import { Controller, useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import axios from "axios";

const Teams = ({ userData, setUserData }) => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  const priceData = [
    {
      discount: "Small Business",
      price: "35",
      totalPrice: "35",
      users: 1,
    },
    {
      discount: "10% OFF",
      price: "32",
      totalPrice: "32",
      users: 1,
    },
    {
      discount: "15% OFF",
      price: "30",
      totalPrice: "30",
      users: 1,
    },
    {
      discount: "25% OFF",
      price: "26",
      totalPrice: "26",
      users: 1,
    },
    {
      discount: "Enterprise",
      title: "Contact Sales",
      desc: "Looking for a custom plan for your team? We’ll create the appropriate package for your team",
    },
  ];

  const includes = [
    `Dedicated account manager`,
    `Custom Branded Headshots (Coming Soon)`,
    `View, favorite, and download team member headshots`,
    `Variety of outfits, backgrounds, and styles`,
    `High-resolution`,
    `Easy to use admin dashboard`,
    `Priority Support`,
  ];

  const [data, setData] = useState(priceData[0]);
  const [form, setForm] = useState(false);
  const [index, setIndex] = useState(1);

  const onSubmit = (data1) => {
    // console.log(data1)
    // console.log(data)
    setFormValid(true);
    setUserData((prevData) => {
      let tempData = { ...data, ...data1 };
      return tempData;
    });
    updateIndex(1);
  };

  const handleData = (e) => {
    const val = parseInt(e.target.value, 10);
    console.log(typeof val);
    if (val < 51) {
      setData((prev) => {
        const temp = priceData[0];

        return {
          ...temp,
          totalPrice: val * temp.price,
        };
      });
    } else if (val < 101) {
      setData((prev) => {
        const temp = priceData[1];

        return {
          ...temp,
          totalPrice: val * temp.price,
        };
      });
    } else if (val < 151) {
      setData((prev) => {
        const temp = priceData[2];

        return {
          ...temp,
          totalPrice: val * temp.price,
        };
      });
    } else if (val < 251) {
      setData((prev) => {
        const temp = priceData[3];

        return {
          ...temp,
          totalPrice: val * temp.price,
        };
      });
    } else if (val > 250) {
      setData((prev) => {
        const temp = priceData[4];

        return {
          ...temp,
          totalPrice: val * temp.price,
        };
      });
    }

    console.log(val);
    setData((prev) => {
      return { ...prev, users: val };
    });
  };

  //<---------------form ---------------------->//
  const teamSize = [
    { value: "1-50", label: "1-50" },
    { value: "51-100", label: "51-100" },
    { value: "101-150", label: "101-150" },
    { value: "200-250", label: "200-250" },
    { value: "251+", label: "300+" },
  ];
  const role = [
    { value: "Customer Support", label: "Customer Support" },
    { value: "Designer", label: "Designer" },
    { value: "Developer", label: "Developer" },
    { value: "Executive", label: "Executive" },
    { value: "Finance", label: "Finance" },
    { value: "Hr", label: "Hr" },
  ];
  const useCase = [
    { value: "Branded Headshot", label: "Branded Headshot" },
    { value: "Bulk Purchase", label: "Bulk Purchase" },
    { value: "Company Websites", label: "Company Websites" },
    { value: "Confrence And Events", label: "Confrence And Events" },
    { value: "Corporate Badges", label: "Corporate Badges" },
    { value: "Corporate Gift Or Benefit", label: "Corporate Gift Or Benefit" },
  ];

  // next back
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formValid, setFormValid] = useState(false);
  const teamsData = [
    {
      idx: 0,
      ele: (
        <>
          <div className="max-w-5xl min-h-[30rem]  w-full grid md:grid-cols-2 gap-3 shadow-[0_0_0_1px#f1f1f1 rounded-2xl text-white">
            <div className="flex flex-col justify-between p-6">
              <div className="space-y-6">
                <div className="bg-slate-50/10 w-fit px-4 py-2 rounded-md">
                  <span className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold text-lg">
                    {data?.discount}
                  </span>
                </div>
                {!data?.price ? (
                  <>
                    <div className="text-blue-500 text-5xl font-bold flex justify-start ">
                      Contact Sales
                    </div>
                    <p>
                      Looking for a custom plan for your team? We’ll create the
                      appropriate package for your team
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex justify-start items-end -translate-x-3">
                      <div className="text-blue-500 text-7xl font-bold flex justify-start">
                        {" "}
                        <PiCurrencyDollarBold className=" " />
                        {data?.price}{" "}
                      </div>{" "}
                      <span className="pb-3 pl-1">/ Team Members</span>
                    </div>
                    <div>
                      <div className="flex justify-start gap-1 items-center font-bold">
                        Total Price:{" "}
                        <span className="flex justify-start gap-1 items-center">
                          <PiCurrencyDollarBold className="" />
                          {data?.totalPrice}{" "}
                        </span>
                        <span className="flex justify-start items-center line-through text-gray-500">
                          ${data?.totalPrice}
                        </span>{" "}
                      </div>
                    </div>
                  </>
                )}

                <div className="space-y-6">
                  <label for="default-range" class="  text-lg font-medium ">
                    USERS <span>{data?.users}</span>
                  </label>
                  <input
                    onChange={handleData}
                    id="default-range"
                    value={data?.users}
                    min={1}
                    max={300}
                    type="range"
                    class="PB-range-slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="font-medium">INCLUDES:</div>
              <div className="list-inside">
                {includes?.map((item) => {
                  return (
                    <div className="flex justify-start items-center gap-3  py-4 ">
                      <FaCircleCheck className="text-blue-500" /> {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ),
    },

    {
      idx: 1,
      ele: (
        <>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 max-w-3xl mx-auto"
          >
            <div className="w-full">
              <div className="mb-2 ">Team or Company Name</div>
              <input
                {...register("companyName", { required: true })}
                className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline undefined"
                placeholder=""
                type="text"
              />

              {errors.companyName && (
                <span className="text-red-500">This field is required </span>
              )}
            </div>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
              <div className="w-full text-black">
                <div className="mb-2 text-white">Your Role</div>

                <Controller
                  name="Role"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      options={role}
                      value={value || null}
                      onChange={(val) => {
                        onChange(val);
                      }}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          padding: "0.08rem 0",
                        }),
                      }}
                    />
                  )}
                  rules={{ required: true }}
                />

                {errors.Role && (
                  <span className="text-red-500">This field is required </span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
              <div className="w-full">
                <div className="mb-2 ">First Name</div>
                <input
                  {...register("firstName", { required: true })}
                  className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline undefined"
                  placeholder=""
                  type="text"
                />
                {errors.firstName && (
                  <span className="text-red-500">This field is required </span>
                )}
              </div>
              <div className="w-full">
                <div className="mb-2 ">Last Name</div>
                <input
                  {...register("lastName", { required: true })}
                  className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline undefined"
                  placeholder=""
                  type="text"
                />
                {errors.lastName && (
                  <span className="text-red-500">This field is required </span>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
              <div className="w-full">
                <div className="mb-2 ">Contact Email</div>
                <input
                  {...register("email", { required: true })}
                  className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline undefined"
                  placeholder=""
                  type="text"
                />
                {errors.contactEmail && (
                  <span className="text-red-500">This field is required </span>
                )}
              </div>

              <div className="w-full">
                <div className="mb-2 ">WhatsApp Number</div>
                <input
                  {...register("whatsappNumber", { required: true })}
                  className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline undefined"
                  placeholder=""
                  type="text"
                />
                {errors.whatsappNumber && (
                  <span className="text-red-500">This field is required </span>
                )}
              </div>
            </div>
            <div className="w-full">
              <div className="mb-2 ">Website (Optional)</div>
              <input
                {...register("website", { required: false })}
                className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline undefined"
                placeholder=""
                type="text"
              />
            </div>
            <div className="flex gap-4 justify-start">
              <button
                ref={formRef}
                type="submit"
                className="py-3 hidden bg-gradient-to-r mt-2 active:scale-[0.98] transition-all from-[#02AFDC] to-[#2563EB] w-48 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </>
      ),
    },
    {
      idx: 2,
      ele: (
        <>
          <div className="grid md:grid-cols-2">
            {/* Order Detils */}
            <div className="shadow-[0_0_0_1px#f1f1f1 rounded-2xl text-white p-6  w-full">
              <div class="flex flex-col gap-2 pb-2">
                <div class="bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text text-4xl font-bold tracking-tight">
                  Order Details
                </div>
              </div>
              <div className="space-y-3">
                <div className="w-full">
                  <div className="mb-2 ">Team or Company Name</div>
                  <div className="w-full border-b-2 pl-0  px-4 py-2 text-base leading-[140%]  outline-none ">
                    {userData?.companyName}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
                  <div className="w-full ">
                    <div className="mb-2 text-white">Your Role</div>

                    <div className="w-full    border-b-2 pl-0 px-4 py-2 text-base leading-[140%]  outline-none ">
                      {userData?.Role?.value}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
                  <div className="w-full">
                    <div className="mb-2 ">First Name</div>
                    <div className="w-full    border-b-2 pl-0 px-4 py-2 text-base leading-[140%]  outline-none ">
                      {userData?.firstName}
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mb-2 ">Last Name</div>
                    <div className="w-full    border-b-2 pl-0 px-4 py-2 text-base leading-[140%]  outline-none ">
                      {userData?.lastName}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">

                <div className="w-full">
                  <div className="mb-2 ">Contact Email</div>
                  <div className="w-full border-b-2 pl-0 px-4 py-2 text-base leading-[140%]  outline-none ">
                    {userData?.email}
                  </div>
                </div>

                <div className="w-full">
                  <div className="mb-2 ">Whatsapp Number</div>
                  <div className="w-full border-b-2 pl-0 px-4 py-2 text-base leading-[140%]  outline-none ">
                    {userData?.whatsappNumber}
                  </div>
                </div>
                </div>
                <div className="w-full">
                  <div className="mb-2 ">Website (Optional)</div>
                  <div className="w-full   border-b-2 pl-0 px-4 py-2 text-base leading-[140%]  outline-none ">
                    {userData?.website}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full overflow-auto   grid place-items-center mt-10">
              <div className="flex justify-center gap-2 ">
                <div
                  className={`w-[300px] shadow-[0_0_0_2px_#ffffff] !bg-gradient-to-br !from-[#2963bede] to-[#073791de] rounded-3xl p-4 flex flex-col gap-2 justify-evenly items-center min-h-[400px] relative transition duration-300`}
                >
                  <div className="text-[22px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB]  inline-block text-transparent bg-clip-text font-bold">
                    Price
                  </div>
                  <div className="text-[40px]  text-[#dad4d4]">
                    {userData?.users} X ${userData?.price}
                  </div>
                  <div className="text-2xl font-bold">
                    Total Price - ${userData?.totalPrice}
                  </div>
                  <div className="flex flex-col items-center gap-4"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  let maxIndex = 3 - 1;

  const updateIndex = (val) => {
    let newIndex = Math.max(currentIndex + val, 0);
    if (newIndex === 2 && formValid) {
      return setCurrentIndex(newIndex);
    }
    if (newIndex === 2) {
      formRef.current.click();
    } else {
      if (maxIndex === currentIndex && val > 0) {
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      localStorage.clear();
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handlePayment = () => {
    const formData = new FormData();
    formData.append("teamsData", JSON.stringify(userData));
    setIsLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}/payment/checkout`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.sessionUrl) {
          window.location.href = res.data.sessionUrl;
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);

        console.error(err);
      });
  };

  return (
    <div className="!text-base flex flex-col gap-5 justify-center items-center ">
      <div className="w-full  grid place-items-center">
        {teamsData &&
          teamsData?.map((item, idx) => {
            if (item?.idx === currentIndex) {
              return (
                <div className="h-[90%] w-full" key={`teamsData${idx}`}>
                  {item?.ele}
                </div>
              );
            }
          })}
      </div>

      <div className="flex justify-center gap-2">
        {currentIndex > 0 && (
          <button
            className={`hover:squeezyBtn px-8 py-3 bg-[#b41f58] hover:bg-[#b41f58a8] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
            onClick={() => updateIndex(-1)}
          >
            Back
          </button>
        )}
        {currentIndex >= 0 && currentIndex < maxIndex && (
          <button
            className={`hover:squeezyBtn px-8 py-3 bg-[#1f58ad] hover:bg-[#1f58ad94] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
            onClick={() => {
              updateIndex(1);
            }}
          >
            Next
          </button>
        )}

        {currentIndex === maxIndex && (
          <button
            className={`hover:squeezyBtn flex justify-center items-center px-8 py-3 bg-[#1f58ad] hover:bg-[#1f58ad94] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
            onClick={() => {
              handlePayment("teams");
            }}
          >
            {isLoading ? (
              <BeatLoader color="#1f58ad94" />
            ) : (
              "Proceed to Payment"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Teams;
