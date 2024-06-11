import React, { useEffect, useState } from "react";
import BeforeAfterSlider from "../../components/BeforeAfterSlider/BeforeAfterSlider";
import InfinitySlider from "../../components/InfinitySlider/InfinitySlider";
import FaqAccordian from "../../components/FaqAccordian/FaqAccordian";
import Carousel from "../../components/Carousel/Carousel";
import BlogCards from "../../components/BlogCards/BlogCards";
import DatingHero from "../../components/Dating/DatingHero/DatingHero";
import { FaLinkedin } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoDocumentTextOutline, IoStarSharp } from "react-icons/io5";
import AppSvgs from "../../components/AppSvgs/AppSvgs";
import { Link } from "react-router-dom";
import InfinityTextSlider from "../../components/InfinitySlider/InfinityTextSlider";
import { IoIosStar } from "react-icons/io";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const imgData1 = [
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1zltDX4qtRqhuof60XWaTdOwQXSCQhETw&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1GUyv6jlwuNGrbaT6Yrd-GLY8pIF-keXf&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=15HVg-zhaBCYOB0Oc2Oo--UrS6AlYZuiL&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1HMLeKlSPY97lR-viypYIXazQF8uKjra5&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1AdTy58hl9yEcyjXuvp1F-UAPI8vrNQqh&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1oIOd5rDDBUX19HTiz5eDLokW57w1X0nF&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1SC-xFjJKwj9IUmnK8rYdoJnVAcg5-wQH&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1qYhll_Ny7A4pJhoPPvW6743tYJiE7yWP&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1IOdDiEkZd6_mDZcTHbwlxHTn_UvD3b8u&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1GUyv6jlwuNGrbaT6Yrd-GLY8pIF-keXf&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=15HVg-zhaBCYOB0Oc2Oo--UrS6AlYZuiL&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1HMLeKlSPY97lR-viypYIXazQF8uKjra5&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1AdTy58hl9yEcyjXuvp1F-UAPI8vrNQqh&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1oIOd5rDDBUX19HTiz5eDLokW57w1X0nF&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1IOdDiEkZd6_mDZcTHbwlxHTn_UvD3b8u&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1qYhll_Ny7A4pJhoPPvW6743tYJiE7yWP&sz=s600",
    },
  ];

  const imgData2 = [
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1iN6QJdC099z-sZwF4DulFANX4pzk0-ZV&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1M7RY1kEidRgYwuKHqdQD3EE4ceqllceP&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1pLhQ7362mUm1pigmHZn7W1yBCylPI0Si&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1cimvZE6m1QqRHudMrk5M7OSo1nsMyooL&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1pZkdZ8uiEm4-OMG8JWPsh2W3hcoL_aAG&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1Lrj_fsduOc09ZuoqYbCS1P0eDVW2rhtU&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1HQdlaoxc3sXkDj1sQ4b0HL4FLT7OfDpr&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1iN6QJdC099z-sZwF4DulFANX4pzk0-ZV&sz=s600",
    },

    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1M7RY1kEidRgYwuKHqdQD3EE4ceqllceP&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1pLhQ7362mUm1pigmHZn7W1yBCylPI0Si&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1iN6QJdC099z-sZwF4DulFANX4pzk0-ZV&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1cimvZE6m1QqRHudMrk5M7OSo1nsMyooL&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1pZkdZ8uiEm4-OMG8JWPsh2W3hcoL_aAG&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1Lrj_fsduOc09ZuoqYbCS1P0eDVW2rhtU&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1HQdlaoxc3sXkDj1sQ4b0HL4FLT7OfDpr&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1iN6QJdC099z-sZwF4DulFANX4pzk0-ZV&sz=s600",
    },
  ];

  const imgData3 = [
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=12nT1qU2jRkBLp7ATGKu032TKFo0ZAVc5&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=11u32sbG0qCLfVOKr-heDY3y8FExY4pVD&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1k1Qu3Ga_qccV88xP0JUFVUzQATkJUCoD&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1gsQ_4CsfKj6dhTTQRH56cOWYePqy7_c1&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=18PdL_2cETJ7YLaVZbb8_wk5R3TZTI7mr&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=12HsqR8SMa60o5d6m9JDAm8wdVY8Furox&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1Lq2DSJGiaOleHy_T3BJ-SmzQfYXQ493X&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=12nT1qU2jRkBLp7ATGKu032TKFo0ZAVc5&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=11u32sbG0qCLfVOKr-heDY3y8FExY4pVD&sz=s600",
    },

    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1k1Qu3Ga_qccV88xP0JUFVUzQATkJUCoD&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1gsQ_4CsfKj6dhTTQRH56cOWYePqy7_c1&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=18PdL_2cETJ7YLaVZbb8_wk5R3TZTI7mr&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=12nT1qU2jRkBLp7ATGKu032TKFo0ZAVc5&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=12HsqR8SMa60o5d6m9JDAm8wdVY8Furox&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1Lq2DSJGiaOleHy_T3BJ-SmzQfYXQ493X&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=12nT1qU2jRkBLp7ATGKu032TKFo0ZAVc5&sz=s600",
    },
  ];

  const moneyBackPics = [
    {
      path: "https://drive.google.com/thumbnail?id=1-yuTxTqVk1MUJqLTTd7er18kr5P8OCTk&sz=s800",
    },
    {
      path: "https://drive.google.com/thumbnail?id=1BTojmvVY0brBor-8ygk8Da0Pf5hg5Ehy&sz=s800",
    },
    {
      path: "https://drive.google.com/thumbnail?id=1kwIsJERRXmxJkKSz2fiaOBH_snegH_Rw&sz=s800",
    },
    {
      path: "https://drive.google.com/thumbnail?id=1JeU4mcxXSARi0numHMq50gKE77n58YoW&sz=s800",
    },
    {
      path: "https://drive.google.com/thumbnail?id=1ozRhdPh0CxeqBqpvrlHRCBM1DGiT5yeS&sz=s800",
    },
    {
      path: "https://drive.google.com/thumbnail?id=1vwncdW707s3uPh3R4qN-4NYzbMGMfICl&sz=s800",
    },
  ];

  const reviewData1 = [
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1Bc1R-uk4ngRLdmXBBcJj677SGJgJXrtv&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1SmSsSqBrh5SxugsEaEqzK64Nhr-WICp4&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1IIg95YS_zreclTvm-DoQTgu319SawtdT&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1SA18wMKMO8InJ1sNowKNR4OhkOKFI4ij&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1vcEFlgTCJTEZBIDZ_xUQHfgsF62Mtkpr&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1RBKpgH0DMeZn0MxynmHT1A-CtCf81OTW&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1CgrkGc9WNHApjN3B1dlqsy-7d1KAuMQV&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1qaKuurwqnK394zdvKZFjzkQH3GgHLrXL&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1sWgO7cw4AXZs1r4kY-s3wWS4wv5x-2sV&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1SjLtvNlhN0V2zgwaMip2lyUJD4ROwjHh&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1sYeaHhoge_XwnWm0GKly9MJwARNSr-PY&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1SNydenR3lI4nzlRdK2MaC9rWB_fU98Hz&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1sYeaHhoge_XwnWm0GKly9MJwARNSr-PY&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1QjXV6VsVmaFcZYVERiHAOxKeENfz0i1C&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=12pZQSymP0k_Y1jEQ_mF5OsC6AYhy87Hr&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1RBKpgH0DMeZn0MxynmHT1A-CtCf81OTW&sz=s600",
    },
  ];

  const cardData = [
    {
      title: "Upload a selfie",
      content:
        "Start your professional AI image generation experience by uploading your selfie.",
      imgPath:
        "https://drive.google.com/thumbnail?id=1Z2eHvjtVo6jYo9EGwSPYILub23hsMxBY&sz=s600",
    },
    {
      title: "Make Payment",
      content:
        "Make your payment to unlock the power of AI and transform your image into stunning professional images.",
      imgPath:
        "https://drive.google.com/thumbnail?id=1pndNiBuEgvuDl_RVGFTpw_W6vCCWvCn1&sz=s600",
    },
    {
      title: "Get Professional Images",
      content:
        "Get professional images all delivered to you within a swift window of time.",
      imgPath:
        "https://drive.google.com/thumbnail?id=17smkegUhG8QWeR3v8xMhLqx8gGPG8l1a&sz=s600",
    },
  ];

  const logoData = [
    {
      name: "walmart logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1up3Y8G7BYQt4vFDeXYicUUbrnMDNz0QK&sz=s600",
    },
    {
      name: "microsoft logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=10vAAtNBCVa35oLUmY6NZKDwrq2kl8w6V&sz=s600",
    },
    {
      name: "google logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1T5_P_dHHDNxPdlN_oCp8lxcxAM7BXYEp&sz=s600",
    },
    {
      name: "airbnb logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1m45hPUM6sDgtDdC1hG89FKgd7MAmAwsi&sz=s600",
    },
    {
      name: "amazon logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1bupr8brSqprqrt5xDygIUbcTkxkc-uX0&sz=s600",
    },
  ];

  const carouselData = [
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1txAVFx9aLnrHFXleyagVbZDg_uiB0Su3&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1GQva64VK9RwqKKXLxwij_xjQPvokouBQ&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1kWVG7wtEcFcsGa_x07b8sP74DfYmanCN&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1EXfhkkgdOC9St1kPnQ07q9wUgdjlOZYr&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1jp6O0d6IJqmaOs1B2PNLdqaqN94bxUsx&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1SMQ2xrl7MRz5c82DI3jhKwOQNM1gogwI&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1_nfTW7h86j22xfgoRg5RDKlneakzWnVL&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1JAR2nnuV3lgcIHuNogFReo43cH4eLFX5&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1CG1yLmuwHl67AmB7mykNvyrxPv2AgeMt&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1nC0dEVMgMabdYRkXkzqTMAHRs14R_V_8&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1Dgd7TbeR1QnAxWNO1tqMO5j4E4ZntIJS&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1bN8gPqm_3s8A4fvMxL1bVA3W7DblM1va&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1Dl-f2UusYKhiOP0gGotp5sEkebnPKgkT&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1rdOKBj2gEskEmuZlSVKfSDe9W7DdpeAH&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1v4kjhXcrjVNONemtxzs749a6rd_ru6WV&sz=s600",
    },
  ];

  const useCaseData = [
    {
      title: "Linkedin Photo",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://drive.google.com/thumbnail?id=1SC-xFjJKwj9IUmnK8rYdoJnVAcg5-wQH&sz=s600",
      svg: (
        <>
          <FaLinkedin size={22} className="text-blue-500" />
        </>
      ),
    },
    {
      title: "Resume",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://drive.google.com/thumbnail?id=1qYhll_Ny7A4pJhoPPvW6743tYJiE7yWP&sz=s600",
      svg: (
        <>
          <IoDocumentTextOutline size={22} className="text-blue-500" />
        </>
      ),
    },
    {
      title: "Team photo",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://drive.google.com/thumbnail?id=1gnE0uAxmhalTCEqiJdDa3bObYZZ5hCf3&sz=s600",
      svg: (
        <>
          <MdGroups size={22} className="text-blue-500" />
        </>
      ),
    },
    {
      title: "Portfolio Website",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://drive.google.com/thumbnail?id=1oIOd5rDDBUX19HTiz5eDLokW57w1X0nF&sz=s600",
      svg: (
        <>
          <img
            src="https://drive.google.com/thumbnail?id=1S87gz7PZrLzK90JmFJ2pbO1ybJHQUCIf&sz=s100"
            className="w-[22px] h-[22px]"
          />
        </>
      ),
    },
    {
      title: "Job Portal",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://drive.google.com/thumbnail?id=1zltDX4qtRqhuof60XWaTdOwQXSCQhETw&sz=s600",
      svg: (
        <>
          <img src="/Indeed_logo.png" className="h-[16px]" />
        </>
      ),
    },
  ];

  const blogData = [
    {
      title: "",
      content: "10 Tips to Generate the Best AI Headshots",
      imgPath: "/aiBlog/1.png",
      btnLink: "/",
    },
    {
      title: "",
      content: "Can you use Professional Headshots on LinkedIn?",
      imgPath: "/aiBlog/2.png",
      btnLink: "/",
    },
    {
      title: "",
      content: "Do’s & Don’ts for the best results for AI Image Generation",
      imgPath: "/aiBlog/3.png",
      btnLink: "/",
    },
  ];

  const privacyFirstData = [
    {
      title: "Advanced Encryption",
      content:
        "Your data deserves the best protection. We encrypt all sensitive user data",
      imgPath: "/privacyFirst/encryption.webp",
    },
    {
      title: "Secured Data",
      content: "HeadGen.ai will never sell your data to any third party.",
      imgPath: "/privacyFirst/secure.webp",
    },
    {
      title: "You’re in Control",
      content: "We will never use your photos  to train our AI model .",
      imgPath: "/privacyFirst/control.webp",
    },
    {
      title: "Live Support",
      content: "E-mail us anytime. We respond Monday-Saturday.",
      imgPath: "/privacyFirst/support.webp",
    },
  ];

  useEffect(() => {
    // Set a small delay before applying the animation class
    const timeout = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    // Clear the timeout on component unmount to prevent memory leaksq
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full py-20 flex flex-col bg-[#161616] gap-10">
      {/* hero */}

      <div className="grid md:grid-cols-2  md:px-10  xl:px-[160px] 2xl:px-[250px]">
        <div className={`max-w-[834px]  w-full w-1/2 flex flex-col gap-0 pt-5 md:pt-10 text-center md:text-left`}>
          <div className="flex flex-col leading-none mb-4 space-y-3 md:space-y-0">
            <div
              className={`lg:text-3xl font-bold md:pl-[1.55rem] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text ${isAnimated ? "animatedReveal" : "invisible"
                }`}
            >
              AI HEADSHOT GENERATOR
            </div>
            <div
              className={`text-white oswald text-[4rem] lg:text-[6rem] xl:text-[9rem] font-bold pb-4 ${isAnimated ? "animatedReveal" : "invisible"
                }`}
            >
              AI TOOL
            </div>
            <div
              className={` text-[20px] md:text-[28px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text ${isAnimated ? "animatedReveal" : "invisible"
                }`}
            >
              FOR PROFESSIONAL HEADSHOTS
            </div>
          </div>
          <div
            className={`flex flex-col gap-6 mb-3 md:mb-0 text-center justify-center items-center md:items-start ${isAnimated ? "animatedReveal" : "invisible"
              }`}
          >
            <Link
              to="/upload/Corporate%20Headshots"
              className={`w-1/2 px-2 h-[40px] md:h-[58px] hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg  hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 ${isAnimated ? "animatedReveal" : "invisible"
                }`}
            >
              Get your photos for $29
            </Link>

            <div className="flex flex-col md:flex-row gap-1 justify-between">
              <div className="flex flex-col justify-center">
                <img src="https://drive.google.com/thumbnail?id=1CeH2wAEjMNSiQRdRtSl2B3PIRsLEwLHp&sz=s120" />
              </div>

              <div className=" flex flex-col leading-tight">
                <span className="flex gap-1 justify-start items-center md:items-start">
                  <IoIosStar className="text-yellow-400" size={21} />
                  <IoIosStar className="text-yellow-400" size={21} />
                  <IoIosStar className="text-yellow-400" size={21} />
                  <IoIosStar className="text-yellow-400" size={21} />
                  <IoIosStar className="text-yellow-400" size={21} />
                </span>

                <span className="text-[#f1f1f1] text-[13px] ">
                  Rated 4.9 Stars in over
                </span>
                <span className="text-[#f1f1f1] text-[13px] ">
                  30,000+ AI Headshots
                </span>
              </div>
            </div>
          </div>
         
        </div>
        <div
          className={`max-w-[834px]  w-full w-1/2 flex flex-col gap-4 items-end pt-10`}
        >
          <img
            src={`https://drive.google.com/thumbnail?id=1UA7FyAGDxxNyOmQI2aEocXL8V1a70uJ-&sz=s600`}
            className="h-full w-full"
          />
        </div>
      </div>

      {/* infinity slider */}
      <div className="w-full overflow-hidden px-10  xl:px-[160px] 2xl:px-[250px]">
        <InfinitySlider imgData1={imgData1} />
      </div>

      {/* featured by */}

      {/* 
      <div className="flex flex-col items-center gap-6">
        <div
          className={`flex flex-row gap-6  ${
            isAnimated ? "animatedReveal" : "invisible"
          }`}
        >
          <div className="flex gap-2">
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
              Featured in
            </div>
            <div className=" flex flex-col justify-center">
              <AppSvgs name="forbes" width={100} height={100} />
            </div>
          </div>

          <div className="flex gap-2">
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
              <AppSvgs name="productHunt" width={40} height={40} />
            </div>
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
              <span className="text-[10px]">Featured on</span>
              <span className="text-[24px] font-semibold leading-none">
                Product Hunt
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className=" flex flex-col justify-center text-[#f1f1f1] font-semibold text-[36px]">
              <div className="flex gap-2">
                <span>300K+</span>
                <span>Users</span>
              </div>
            </div>
          </div>




          <div className="flex gap-2">
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
            <IoStarSharp size={34} className="text-green-500"/>

            </div>
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
              <span className="text-[10px]">Trustpilot</span>
              <span className="text-[20px] font-semibold leading-none">
                Rated 4.7/5 (4129)
              </span>
            </div>
          </div>

        </div>
      </div> */}

      {/* trusted by */}

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div
          className={`flex flex-col justify-center text-center font-bold text-[20px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] text-transparent bg-clip-text ${isAnimated ? "animatedReveal" : "invisible"
            }`}
        >
          Trusted By
        </div>
        <div
          className={`flex flex-row ${isAnimated ? "animatedReveal" : "invisible"
            }`}
        >
          {logoData?.map((item, idx) => (
            <div
              key={`logo${idx}`}
              className="w-[150px] flex flex-col justify-center"
            >
              <img
                src={item?.imgPath}
                alt={item?.name}
                className="w-auto h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* how it works */}

      <div className="flex justify-center px-10  xl:px-[160px] 2xl:px-[250px] py-14">
        <div className="grid gap-8 md:gap-0 md:grid-cols-2  md:justify-between w-full">
          <div className=" flex flex-col w-full gap-4 justify-center items-center  ">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 w-fit">
              <div className="text-[#F1F1F1] text-[45px] md:text-[60px] 2xl:text-[72px] font-medium md:leading-6">
                How it
              </div>
              <div className="text-[45px] md:text-[60px] 2xl:text-[72px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
                works
              </div>
              <Link
                to="/upload/Corporate%20Headshots"
                className="hover:squeezyBtn col-span-2 md:col-auto flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 px-2 text-[14px]"
              >
                Get your photos for $29
              </Link>
            </div>
          </div>
          <div className=" flex flex-col w-full gap-6 items-center">
            <div className="w-full flex justify-center">

              <iframe
                src="https://drive.google.com/file/d/16UKFJcaT2Y3Kn9dsSakqJl6uVfYJITEb/preview"
                width="100%"
                height="100%"
                className="rounded-2xl h-[300px] md:h-[480px] md:w-[640px]"
              ></iframe>
            </div>

            <div className="text-[#F1F1F1] text-[10px]">
              Upload a selfie and get Professional Images for your LinkedIn
              Profile, Resume, TV Commercial etc
            </div>
          </div>
        </div>
      </div>

      {/* use flow card section */}

      <div className="px-20 xl:px-[160px] 2xl:px-[250px] pb-20">
        <div className="flex flex-wrap flex-col pt-8 md:pt-0 gap-[8rem] md:gap-2 md:flex-row justify-center items-center md:items-start md:justify-between px-2 ">
          {cardData &&
            cardData?.map((item, idx) => (
              <div className="relative w-full max-w-[420px] h-[300px] md:w-[32%] rounded-t-2xl bg-white pt-6 flex flex-col gap-8 2xl:gap-4 justify-between hover:shadow-[0_0_0_6px_#3A36F3] hover:-translate-y-7 hover:scale-[1.02] cursor-default transition duration-300">
                <div className="w-[150px] h-[150px] absolute -top-20 right-2">
                  <img src={item?.imgPath} className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-2 px-6 h-[200px]">
                  <div className="text-7xl text-[#0055D4] font-medium">
                    {`0${idx + 1}`}
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="text-[#0C062C] text-2xl font-medium">
                      {item?.title}
                    </div>
                  </div>
                </div>
                <div className="w-full h-[150px] bg-[#0055D4] text-white px-4 pb-2 flex justify-center items-center">
                  {item?.content}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className=" xl:px-[160px] 2xl:px-[250px] pb-20">
        <InfinityTextSlider />
      </div>
      {/* swipe section */}

      <div className="px-10  xl:px-[160px] 2xl:px-[250px] grid  lg:grid-cols-[auto_25rem] xl:grid-cols-[30rem_auto]  2xl:grid-cols-[auto_25rem] gap-[8rem] cursor-default">
        <div className="w-[50% w-full 2xl:w-[55% bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] rounded-2xl shadow-[0_0_0_1px_#ffffff] py-10 relative transition duration-500">
          <div className="flex flex-col justify-between gap-20 items-center h-full">
            <div className="flex flex-col items-center md:text-[26px] xl:text-[32px] 2xl:text-[40px] font-semibold text-[#F1F1F1]">
              <div>The Most Realistic</div>
              <div>AI Image Generator</div>
            </div>
            <div className="text-[#f1f1f1] text-[80px] italic">VS</div>
            <div className="flex flex-col gap-2 text-[#f1f1f1] text-[22px]">
              <div>Why waste hours on expensive Photoshoots?</div>
              <div>Boost your careed with amazing AI Generated</div>
              <div>Images that are quick, easy, cheap & convenient!</div>
            </div>
          </div>
          <div className="w-[200px] h-[200px] 2xl:w-[270px] 2xl:h-[220px] flex flex-col justify-evenly items-center bg-gradient-to-br from-[#053499] to-[#2563EB] p-4 absolute top-1/2 -translate-y-1/2 -left-14 rounded-xl shadow-[0_0_0_1px_#ffffff] hover:scale-[1.001] hover:shadow-[0_0_0_2px_#ffffff] transition duration-600 text-[#ffffff]">
            <div className="text-[24px] font-bold text-center">
              Professional Photoshoot
            </div>
            <div className="flex flex-col gap-2 text-[18px]">
              <div>Upto $2500</div>
              <div>Multiple Days</div>
              <div>Tedious Process</div>
            </div>
          </div>
          <div className="w-[200px] h-[200px] 2xl:w-[270px] 2xl:h-[220px] flex flex-col justify-evenly items-center bg-gradient-to-br from-[#053499] to-[#2563EB]  p-4 absolute top-1/2 -translate-y-1/2 -right-14 rounded-xl shadow-[0_0_0_1px_#ffffff] hover:scale-[1.001] hover:shadow-[0_0_0_2px_#ffffff] transition duration-600 text-[#ffffff] ">
            <div className="text-[24px] font-bold text-center">HeadGen AI</div>
            <div className="flex flex-col gap-2 text-[18px]">
              <div>$29</div>
              <div>Within 2 hours</div>
              <div>Very easy process</div>
            </div>
          </div>
        </div>
        <div className="w-[40% w-full 2xl:w-[35% flex flex-col gap-10 ">
          <div className="w-full !glassMorphism !bg-gradient-to-br !from-[#10151dde] to-[#121720de] py-10 rounded-2xl relative px-8 shadow-[0_0_0_1px_#ffffff] h-2/3">
            <div className="absolute w-[200px] h-[200px] -top-10 -translate-y-10 right-2 shadow-[0_0_0_1px_#ffffff] rounded-2xl">
              <BeforeAfterSlider
                img1={"/beforeAfter/before.jpg"}
                img2={"/beforeAfter/after.jpg"}
              />
            </div>

            <div className="flex flex-col h-full justify-evenly gap-4 text-[#f1f1f1] ">
              <div className="flex flex-col gap-0 ">
                <div className="text-[44px] font-bold">Swipe</div>
                <div className="text-[28px] font-bold w-[200px] leading-tight">
                  to see the results
                </div>
              </div>
              <div className="text-[20px]">
                Simply upload a selfie and get High Quality Professional AI
                Generated Images
              </div>
            </div>
          </div>
          <div className="w-full !glassMorphism !bg-gradient-to-br !from-[#10151dde] to-[#121720de] py-10 rounded-2xl relative px-8 shadow-[0_0_0_1px_#ffffff] h-1/3">
            <div className="flex flex-col justify-evenly gap-4 text-[#f1f1f1]">
              <div className="flex flex-col gap-0">
                <div className="text-[28px] font-bold w-full flex justify-between">
                  <div>Boost your Career</div>
                  <FaLinkedin size={48} className="text-blue-500" />
                </div>
                {/* <div className="text-[28px] font-bold w-[200px] leading-tight">
                  to see the results
                </div> */}
              </div>
              <div className="text-[20px]">
                Make a lasting first impression <br /> with amazing Professional
                Headshots.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gradientBackground px-10  xl:px-[160px] 2xl:px-[250px]">
        <div className="flex flex-col items-center gap-6 pt-14">
          <div className="text-white text-[30px] sm:text-[35px] md:text-[45px] lg:text-[64px]">High Quality Images</div>
          <div className="max-w-[90%] flex flex-col gap-6 items-center">
            <div className="text-center text-white text-[16px]">
              We take our Quality very seriously Our Engineers ensure that
              almost all the images generated can be used in a profesional
              setting
            </div>
            <div className="flex flex-col gap-4 w-1/2 items-center">
              <Link
                to="/upload/Corporate%20Headshots"
                className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full h-[45px] md:h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
              >
                Get your photos for $29
              </Link>
              <span className="flex flex-col text-center text-[19px] text-[#f1f1f1]">
                <span>
                  Payment handled by{" "}
                  <strong className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB]  inline-block text-transparent bg-clip-text ">
                    Stripe
                  </strong>
                </span>
                <span className="text-[14px]">
                  We do not store your payment details
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="py-16">
          <InfinitySlider imgData1={imgData2} imgData2={imgData3} />
        </div>

        <div className="flex flex-col gap-10 items-center">
          <div className="text-[#F1F1F1] text-3xl text-center md:text-4xl 2xl:text-[72px]  font-medium">
            Use Cases of{" "}
            <span className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB]  inline-block text-transparent bg-clip-text font-bold py-10">
              AI Headshots
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center w-full gap-4 md:gap-2">
            {useCaseData?.map((item) => (
              <div className="w-auto max-w-[250px] 2xl:w-[200px] bg-white shadow-[0_0_0_1px_#2563EB] rounded-xl hover:-translate-y-4 cursor-default transition duration-300">
                <div className="w-full h-2/3">
                  <img
                    src={item?.path}
                    className="w-full h-full rounded-t-xl"
                  />
                </div>
                <div className="flex flex-col justify-center px-2 py-4">
                  <div className="text-medium text-sm font-bold flex justify-between">
                    <span>{item?.title}</span>
                    <span>{item?.svg}</span>
                  </div>
                  <div className="text-xs">{item?.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* turn your selfie info card */}
        <div className="w-full grid md:grid-cols-2 gap-4 bg-gradient-to-r from-[#131270] via-[#161497] to-[#1f1db3] mt-28 py-10 rounded-xl shadow-[0_0_1px_1px#f1f1f1] ">
          <div className="flex w-full flex-col  items-center md:items-start justify-evenly gap-4 px-10">
            <div className="text-[32px] xl:text-[48px] 2xl:text-4xl text-[#F1F1F1]">
              Turn your selfie into
            </div>
            <div className=" text-center w-full md:text-left text-6xl  bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
              Professional Headshots
            </div>
            <div className="text-[16px] text-center md:text-left 2xl:text-[24px] text-[#F1F1F1]">
              AI Headshots
            </div>
            <div>
              <Link
                to="/upload/Corporate%20Headshots"
                className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full px-6  h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
              >
                Get your photos for $29
              </Link>
            </div>
          </div>
          <div className=" w-full">
            <img
              src="https://drive.google.com/thumbnail?id=1Zxk-5ZhT_jVlmVEjZAt_ABgcwtBUQViG&sz=s800"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* dating hero section */}
        <div className="flex justify-center py-20 ">
          <DatingHero />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 px-10 xl:px-[160px] 2xl:px-[250px]">
        <div className="w-full relative">
          <div className="flex flex-col items-center md:items-start justify-center gap-2 md:gap-6 top-0">
            <div className=" text-[#F1F1F1] md:grid space-x-3 md:space-x-0  w-full text-center md:text-left text-[25px] md:text-[35px] lg:text-[52px] 2xl:text-[60px] font-medium">
              <span>Frequently</span>

              <span>Asked</span>

              <span>Questions</span>
            </div>
            <div className="text-[#F1F1F1] text-[14px]">
              E-mail is at support@headgen.ai we are available round the clock.
            </div>
          </div>
        </div>
        <div className="w-full">
          <FaqAccordian />
        </div>
      </div>

      <div className="flex flex-col px-10 xl:px-[160px] 2xl:px-[250px]">
        <div className="text-center text-[35px] lg:text-[45px] xl:text-[55px] text-[#F1F1F1]">
          <span className=" bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Our Clients love
          </span>{" "}
          Our Results
        </div>
        <InfinitySlider
          imgData1={reviewData1}
          imgData2={reviewData1}
          height={"400px"}
        />
      </div>

      <div className="flex flex-col gap-5 md:gap-10">
        <div className="text-center text-[35px] lg:text-[45px] xl:text-[55px] text-[#F1F1F1]">
          <span className=" bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Privacy First
          </span>{" "}
          to Protect Your Data
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-10  xl:px-[160px] 2xl:px-[250px] ">
          {privacyFirstData &&
            privacyFirstData?.map((item) => (
              <div className=" h-[200px] 2xl:w-[350px] 2xl:h-[300px] rounded-2xl p-4 py-6 bg-transparent hover:!bg-gradient-to-b hover:!from-[#02AFDC] hover:!to-[#2563EB] flex flex-col justify-between items-center text-[#F1F1F1] shadow-[0_0_2px_1px_#02AFDC] hover:shadow-[0_0_5px_1px_#2563EB] hover:scale-[0.98] cursor-default transition duration-500">
                <div className="w-1/3">
                  <img src={item?.imgPath} className="w-full" />
                </div>
                <div className="2xl:text-lg">{item?.title}</div>
                <div className="text-xs 2xl:text-base text-center">
                  {item?.content}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="text-center text-[35px] lg:text-[45px] xl:text-[55px] text-[#F1F1F1]">
          <span className=" bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Premium Professional
          </span>{" "}
          Image Generator
        </div>
        <div className="text-center text-[#f1f1f1] text-[15px]">
          Swipe to see more images
        </div>
        <Carousel carouselData={carouselData} />
        <div className="text-center text-[#f1f1f1] text-[12px]">
          AI Generated Images using HeadGen
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 px-10 xl:px-[160px] 2xl:px-[250px] py-10">
        <div className="w-full order-2 md:order-none flex flex-col items-center gap-1">
          <div className="flex w-2/3  gap-1">
            <div className="w-2/3">
              <img
                src={`${moneyBackPics[0].path}`}
                className="h-full rounded-xl hover:scale-[1.04] transition duration-400"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-1">
              <img
                src={`${moneyBackPics[1].path}`}
                className="h-1/2 rounded-xl hover:scale-[1.04] transition duration-400"
              />
              <img
                src={`${moneyBackPics[2].path}`}
                className="h-1/2 rounded-xl hover:scale-[1.04] transition duration-400"
              />
            </div>
          </div>
          <div className="flex w-2/3  gap-1">
            <div className="w-1/3 flex flex-col gap-1">
              <img
                src={`${moneyBackPics[3].path}`}
                className="h-1/2 rounded-xl hover:scale-[1.04] transition duration-400"
              />
              <img
                src={`${moneyBackPics[4].path}`}
                className="h-1/2 rounded-xl hover:scale-[1.04] transition duration-400"
              />
            </div>
            <div className="w-2/3">
              <img
                src={`${moneyBackPics[5].path}`}
                className="h-full rounded-xl hover:scale-[1.04] transition duration-400"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6 top-0">
            <div className="text-center space-x-3 md:space-x-0 md:grid text-[#F1F1F1] text-[32px] md:text-[42px] lg:text-[52px] 2xl:text-[60px] font-medium">
              <span className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
                Money-Back
              </span>

              <span>Guarantee</span>
            </div>
            <div className="text-[#F1F1F1] text-[14px]">
              Try Headgen.ai with confidence. Our results are Mind blowing.
            </div>
            <Link
              to="/upload/Corporate%20Headshots"
              className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-2/3 h-[40px] md:h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
            >
              Get your photos for $29
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-24 px-10  xl:px-[160px] 2xl:px-[250px]">
        <div className="text-center text-[35px] lg:text-[45px] xl:text-[55px] text-[#F1F1F1]">
          <span className=" bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            HeadGen
          </span>{" "}
          AI Blog
        </div>
        <div>
          <BlogCards data={blogData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
