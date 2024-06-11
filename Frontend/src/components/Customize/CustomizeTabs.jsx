import React, { useEffect, useState } from "react";
import AppSvgs from "../../components/AppSvgs/AppSvgs";
import OrderDetails from "../OrderDetails/OrderDetails";
import PriceCards from "../PriceCards/PriceCards";
import { useStateManager } from "react-select";

const CustomizeTabs = ({ setUserData, userData, type }) => {
  const temp = [
    {
      section: "Formal",
      icon: (
        <>
          <AppSvgs name="formal" />
        </>
      ),
      subSection: [
        {
          title: "Outdoor Park",
          images: [
            { name: "", path: "https://drive.google.com/thumbnail?id=1RLSZGeOJRclpVCS7eg5uJPBDAIxvQxy5&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1GmKauZa5soyNyqoXEZ5ukREj7cfpZgCa&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=13g3gmT-4jZwvjCaVELNXzftxrLF_ZLiF&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1c0UurxRLv1yM92t-iiGG-26MsQaPyGKe&sz=s400" },
          ],
        },
        {
          title: "Indoor Office",
          images: [
            { name: "", path: "https://drive.google.com/thumbnail?id=1Ml1yIMvA5v3-m8iYB7eEmPH-QGoEpNFg&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=13wdIfSJr1CjNkWtgWpsbs6SMwy6HeFhq&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1_amqnLhSWdW9APznkImLY-v9925uNAvU&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1-LmNKvMjW8SdScmSu-xEycWJDDGI7V9x&sz=s400" },
          ],
        },
        {
          title: "Studio Grey",
          images: [
            { name: "", path: "https://drive.google.com/thumbnail?id=1jZRhuuiYF4AImZ31ZB0wJAyCvRmL9CgM&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1msIFQi6IOtyFQc73XXNC6CKzs3Bg8W78&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1mvFeBjuyeDF5Na6ujBVS_JHzEWGsiVS7&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1Aa2lZexTQGuv9TvXRDKs6lMz4LnYUOwH&sz=s400" },
          ],
        },
        {
          title: "Studio White",
          images: [
            { name: "", path: "https://drive.google.com/thumbnail?id=1QFXp1mdWQOLH9HWj-HCKyaevfk6onaYR&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1zfh_Ig5pYT3VzxnaKN0yje9PLvFioZ41&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1SqtVNi0mr_GeXtbEuGDnir6qVWv80AIr&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1Eh__LWSTh2uHmvMxvuV9la3La7nv9Zk8&sz=s400" },
          ],
        },
        {
          title: "Black & White",
          images: [
            { name: "", path: "https://drive.google.com/thumbnail?id=1Bnx6PkZuXMCV5HfbgN8Epc5FWZ_OIDR9&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=11gm58mI09URzYilTbN8vzuWp2jHfqh_N&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1bixkRKNkh6snSmo5kZyzR3FfBpVRYx88&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1tiD3IVmeuWgRnG0pHeuN86kgK6dUdSCx&sz=s400" },
          ],
        },
      ],
    },
    {
      section: "Casual",
      icon: (
        <>
          <AppSvgs name="casual" />
        </>
      ),
      subSection: [
        {
          title: "Outdoor Park",
          images: [
            { name: "", path: "https://drive.google.com/thumbnail?id=1kjqyyVmmS2j-eTWBMkO6DPbTmkkeezdY&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1lFYhjO0CPgYCVHjWjv52UTWHRwBrG88T&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1IJrg3o8pIsHImTvvnX54HdHwS4uYxNg8&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1LxAraE5dx5YWLZ39SrnsGqVU5zZrNdiB&sz=s400" },
          ],
        },
        {
          title: "Indoor Office",
          images: [
            { name: "", path: "https://drive.google.com/thumbnail?id=1vRtqDzpg_GP4SylEr0y_Ce9FkA-_2VPf&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1IJ4sumK_Td5-EIkQX5_Di6CuVcU_EyaI&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1_ZrNX0fxh1HI6yXtKx777ahY-MdpjfuA&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1sSZgnSOQBeWxqDVg0ClcFwKYDiSBXL-R&sz=s400" },
          ],
        },
        {
          title: "Studio Grey",
          images: [
            { name: "", path: "https://drive.google.com/thumbnail?id=1CnjACj9W9EaKfECABnOrXHcs-qXs7v10&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1Ggz7GdYxXYk4tPkDQrYVTYJnz5xp1EAh&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=13u-NQ8sZa7zS45xEpBoQ-7zxbNGmCmT3&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1raImtXH1cM8joq7HJYUtbokIib3us-HT&sz=s400" },
          ],
        },
        {
          title: "Studio White",
          images: [
            { name: "", path: "https://drive.google.com/thumbnail?id=1FngWrf0eZrk2stah1js4bAfoLDsSDwgc&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1hrUo99eNxYJntLqUgj-WBdzQK8CNMXkT&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1z3XZIATqXDH48rrdGAPa63pmaasGFD24&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1dz0xwvFxykFYGIJS9wnm0UAU3H5P9lAE&sz=s400" },
          ],
        },
        {
          title: "Black & White",
          images: [
            { name: "", path: "https://drive.google.com/thumbnail?id=1_Be-Y1PJaQjMr1mPk5UIVBKbYHfqt4XN&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=17U3ze5BOHgKaPxM-aZ_RDG8PHeo8BqY7&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1DZkWvRKQfaXAuSLG59JLc1tBKkacd--t&sz=s400" },
            { name: "", path: "https://drive.google.com/thumbnail?id=1Alk3uHUUp7wIFSD9I2JcygaReqJ-NEbQ&sz=s400" },
          ],
        },
      ],
    },
  ];

  const [subSectionData, setSubSectionData] = useState(
    temp[0]?.subSection || []
  );
  const [subSectionImages, setSubSectionImages] = useState(
    temp[0]?.subSection[0]?.images || []
  );
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data?.section?.length > 0 && data?.subSection?.length > 0) {

      setUserData((prevData) => {
        let tempData = { ...prevData }
        if (type === 'Dating') {
          tempData.customizeData = data
        } else {
          tempData.customizeData = data

        }
        return tempData
      })
    }
  }, [data]);

  return (
    <>
      <div className="text-[#121212] text-3xl h-fit space-y-8 bg-[#f1f1f1] p-10 rounded-2xl">
        <div className="w-full flex justify-center flex-wrap gap-3">
          {temp?.map((item) => {
            return (
              <div className=" w-1/4">
                <input
                  name="sectionName"
                  className="peer hidden"
                  type="radio"

                  value={item?.section}
                  id={`${item?.section}`}

                />
                <label
                  onClick={() => {
                    setSubSectionData(item?.subSection)
                    setData((prev) => {
                      let data = {
                        section: item?.section,
                        subSection: prev?.subSection,
                      };
                      return data;
                    });
                  }}
                  className={`px-6 py-2  flex justify-center items-center gap-2
                   ${type === 'Dating'
                      ? ' hover:text-[#E23A6D] peer-checked:shadow-[0_3px#E23A6D] hover:shadow-[0_3px#E23A6D]' : 'hover:text-[#E23A6D] peer-checked:shadow-[0_3px#0000FF] hover:shadow-[0_3px#0000FF]'} font-medium cursor-pointer border-4 border-transparent ring-indigo-500/80 transition duration-300`}
                  htmlFor={item?.section}
                >
                  <span>{item?.icon}</span>
                  {item?.section}{" "}
                </label>
              </div>
            );
          })}
        </div>
        <section className="flex justify-around items-center flex-wrap p-2 text-lg gap-3">
          {subSectionData?.map((item) => {
            return (
              <div className="relative ">
                <input
                  name="subSectionTitle"
                  className="peer hidden"
                  type="radio"

                  value={item?.title}
                  id={`${item?.title}`}

                />
                <label
                  onClick={() => {
                    setSubSectionImages(item?.images)
                    setData((prev) => {
                      let data = {
                        section: prev?.section,
                        subSection: item?.title,
                      };
                      return data;
                    });
                  }}
                  className={`px-6 py-2   font-medium cursor-pointer border-4 border-transparent ${type === 'Dating' ? ' hover:text-[#E23A6D] peer-checked:shadow-[0_3px#E23A6D] hover:shadow-[0_3px#E23A6D]' : 'hover:text-[#E23A6D] peer-checked:shadow-[0_3px#0000FF] hover:shadow-[0_3px#0000FF]'}  ring-indigo-500/80 transition duration-300`}
                  htmlFor={item?.title}
                >
                  {item?.title}{" "}
                </label>
              </div>
            );
          })}
        </section>
        <section className="flex justify-around gap-4 items-center flex-wrap">
          {subSectionImages?.map((item) => {
            return (
              <img
                src={item?.path}
                className="w-[200px] h-[200px] cursor-pointer hover:shadow-[0_0_0_1px#ffffff] rounded-xl transition duration-300"
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default CustomizeTabs;
