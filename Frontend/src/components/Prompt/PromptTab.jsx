import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PromptTab = ({ userData, setUserData, errors, type }) => {
  const [promptData, setPromptData] = useState("");

  useEffect(() => {
    setUserData((prevData) => {
      let tempData = { ...prevData };
      if (type === 'Dating') {
        tempData.promptData = promptData;

      } else {

        tempData.promptData = promptData;
      }
      return tempData
    });
  }, [promptData]);

  return (
    <>
      <div className="text-2xl text-center">
        Enter your Prompts for our cutting edge AI
      </div>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="grid md:grid-cols-2 gap-x-12 sm:px-4 md:px-0 lg:flex ">
            <div className="w-full  w px-4 py-4 space-y-3 mt-6 sm:px-0 md:mt-0 ">
              <textarea
                onChange={(e) => setPromptData(e.target.value)}
                placeholder="E.g. Portrait, smile, white shirt, outside, city, blurred background..."
                className="w-full text-lg !h-[50%] bg-black/30 outline-none focus:ring-4 ring-white/10 rounded-md px-3 py-1 shadow-[0_0_0_1px#ffffff]"
                name=""
                id=""
              ></textarea>
              <div className="flex justify-end">
                <svg
                  width="175"
                  height="188"
                  viewBox="0 0 175 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.153 4.52759C10.8724 3.03509 10.2458 1.24195 8.75326 0.522492C7.26077 -0.196963 5.46762 0.429713 4.74817 1.92221L10.153 4.52759ZM77.3525 117.111L74.432 116.425L77.3525 117.111ZM25.7786 110.083L28.7593 110.423L25.7786 110.083ZM174.812 154.871L140.792 161.398L163.455 187.597L174.812 154.871ZM4.74817 1.92221C-1.62527 15.1438 -0.768039 32.4505 3.80517 49.6874C8.40491 67.0243 16.9022 84.8243 26.5158 99.4243C36.056 113.913 46.9964 125.708 56.6958 130.515C61.5757 132.934 66.7142 133.851 71.2436 131.632C75.7485 129.425 78.6779 124.587 80.273 117.797L74.432 116.425C73.0184 122.442 70.7678 125.184 68.6039 126.244C66.4643 127.292 63.445 127.164 59.3602 125.14C51.13 121.061 40.9136 110.38 31.527 96.1246C22.2137 81.9807 14.0142 64.7691 9.60453 48.1487C5.16835 31.4283 4.7036 15.8322 10.153 4.52759L4.74817 1.92221ZM80.273 117.797C83.2272 105.22 81.7589 95.145 77.3267 87.9324C72.8839 80.7024 65.6764 76.7142 57.9699 76.0014C42.4901 74.5696 25.4817 86.2175 22.7979 109.743L28.7593 110.423C31.1151 89.7719 45.5446 80.8777 57.4173 81.9759C63.3871 82.5281 68.8345 85.5729 72.2148 91.0737C75.6057 96.5918 77.1287 104.945 74.432 116.425L80.273 117.797ZM22.7979 109.743C19.9032 135.117 40.0287 159.466 66.5987 173.326C93.3358 187.273 127.969 191.404 155.901 175.129L152.88 169.944C127.253 184.877 94.8956 181.319 69.3737 168.006C43.6848 154.606 26.2835 132.124 28.7593 110.423L22.7979 109.743Z"
                    fill={type === 'Dating' ? '#DE3769' : '#1D70ED'}
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1  lg:block  rounded-xl">
              <LazyLoadImage
                className="md:max-w-md"
                effect="black-and-white"
                placeholderSrc="https://drive.google.com/thumbnail?id=1f4MXXPgJ5NvYa8j3iW49XXpT0CX4FG1k&sz=s600"
                src="https://drive.google.com/thumbnail?id=1f4MXXPgJ5NvYa8j3iW49XXpT0CX4FG1k&sz=s600" // use normal <img> attributes as props
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromptTab;
