import React, { useEffect, useState } from "react";
import HeadshotSelection from "../HeadshotSelection/HeadshotSelection";
import UserDetails from "../UserDetails/UserDetails";
import ImageSection from "../ImageSection/ImageSection";
import PriceCards from "../PriceCards/PriceCards";
import OrderDetails from "../OrderDetails/OrderDetails";
import { BeatLoader } from "react-spinners";

const IndividualTab = ({
  userData,
  setUserData,
  setErrors,
  errors,
  fileErrorMsg,
  setFileErrorMsg,
  files,
  setFiles,
  headshots,
  tabContentRef,
  isLoading,
  handlePayment,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const priceCardData = [
    {
      title: "STARTER PACK",
      originalPrice: "$35",
      price: "$29",
      features: ["Basic Quality"],
      packName: "Starter Pack",
      tag: "",
    },
    {
      title: "BASIC PACK",
      originalPrice: "$79",
      price: "$45",
      features: ["High Quality"],
      packName: "Basic Pack",
      tag: "83% pick this plan",
    },
    {
      title: "PREMIUM PACK",
      originalPrice: "$149",
      price: "$79",
      features: ["Premium Quality"],
      packName: "Premium Pack",
      tag: "Best Value",
    },
  ];

  const indivdualData = [
    
    {
      idx: 0,
      ele: (
        <>
          <HeadshotSelection
            userData={userData}
            setUserData={setUserData}
            errors={errors}
            headshots={headshots}
          />
        </>
      ),
    },

    {
      idx: 1,
      ele: (
        <>
          <UserDetails
            userData={userData}
            setUserData={setUserData}
            errors={errors}
          />
        </>
      ),
    },

    {
      idx: 2,
      ele: (
        <>
          <ImageSection
            userData={userData}
            setUserData={setUserData}
            files={files}
            setFiles={setFiles}
            fileErrorMsg={fileErrorMsg}
            setFileErrorMsg={setFileErrorMsg}
          />
        </>
      ),
    },

    {
      idx: 3,
      ele: (
        <>
          <div>
            <PriceCards
              data={priceCardData}
              userData={userData}
              setUserData={setUserData}
            />
          </div>
        </>
      ),
    },

    {
      idx: 4,
      ele: (
        <>
          <div>
            <OrderDetails userData={userData} files={files} />
          </div>
        </>
      ),
    },
  ];

  let maxIndex = 5 - 1;

  const updateIndex = (val) => {
    let newIndex = Math.max(currentIndex + val, 0);

    if (newIndex > 1 && newIndex < 3 && val > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        emailRegex.test(userData?.email) &&
        userData?.email?.length > 0 &&
        userData?.gender?.length > 0
      ) {
        setErrors({});
        if (maxIndex === currentIndex && val > 0) {
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setCurrentIndex(newIndex);
      } else {
        let error = { email: "", gender: "" };
        error.email = "Incorrect/Missing email";

        if (userData?.gender?.length == 0) {
          error.gender = "Please select a gender";
        }
        console.log(userData?.gender?.length);
        setErrors(() => {
          // console.log(error);
          return error;
        });
        return;
      }
    }
    if (newIndex > 2 && val > 0) {
      if (files.length > 0 && files.length <= 4) {
        setFileErrorMsg();
        console.log("in this");
        if (maxIndex === currentIndex && val > 0) {
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setCurrentIndex(newIndex);
      } else {
        setFileErrorMsg("Please upload 1-4 images to continue");
      }
      return;
    } else {
      if (maxIndex === currentIndex && val > 0) {
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      localStorage.clear();
      setUserData({
        email: "",
        gender: "",
        files: "",
      });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (files.length > 0) {
      localStorage.setItem("userImgs", files);
    }
  }, [files]);

  return (
    <div
      className="flex flex-col justify-between h-full gap-8"
      ref={tabContentRef}
    >
      {indivdualData &&
        indivdualData?.map((item, idx) => {
          if (item?.idx === currentIndex) {
            return (
              <div className="h-[90%] w-full" key={`individualData${idx}`}>
                {item?.ele}
              </div>
            );
          }
        })}

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
              handlePayment("individual");
            }}
          >
            {isLoading ? <BeatLoader color="#ffffff" /> : "Proceed to Payment"}
          </button>
        )}
      </div>
    </div>
  );
};

export default IndividualTab;
