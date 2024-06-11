import React from "react";
import { Link } from "react-router-dom";

const DatingHero = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 py-8 md:py-0">
      <div className="flex flex-col items-center md:items-start justify-center gap-6 w-full">
        <div className="text-4xl text-center md:text-left lg:text-[4.3rem] font-semibold  leading-tight text-[#F1F1F1] w-full">
          <div >
            <span className="font-semibold bg-gradient-to-r from-[#e73e71] to-[#af1040]  inline-block text-transparent bg-clip-text">
              Double
            </span>{" "}
            your
          </div>
          <div>matches with our</div>
          <div>AI dating photos</div>
        </div>
        <div className="text-[14px]  2xl:text-[16px] text-[#F1F1F1] text-center md:text-left">
          <div>
            Use our AI headshot generator built by AI researchers to improve
            your dating
          </div>
          <div>
            profile in just minutes. Look your best to attract the best.
          </div>
        </div>
        <div>
          <Link
            to="/upload/dating"
            className="hover:squeezyBtn flex flex-col justify-center items-center bg-gradient-to-b from-[#e73e71] to-[#af1040] hover:from-[#bb2c57] hover:to-[#861436] text-[#F1F1F1] rounded-lg w-full px-6 h-[58px] hover:shadow-[0_0_0_2px_#ffffff] transition duration-500"
          >
            Get your photos for $29
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-end">
        <img
          src="https://lh3.googleusercontent.com/d/11mgX3mlp1kIqIc9ehghQ8DRzD1GVBwvv=s800?authuser=0"
          className="h-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default DatingHero;
