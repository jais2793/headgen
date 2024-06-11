import React, { useEffect, useState } from "react";
import Tab from "../../components/Tab/Tab";
import { useParams } from "react-router-dom";
import DatingTab from "../../components/Dating/DatingTab/DatingTab";

const UploadPage = () => {
  const { headshot } = useParams();
  const [isDatingPage, setIsDatingPage] = useState(false);

  useEffect(() => {
    if (headshot === "dating") {
      setIsDatingPage(true);
    } else {
      setIsDatingPage(false);
    }
  }, [headshot]);

  return (
    <div className="w-full py-28 flex flex-col bg-[#161616] gap-28">
      {isDatingPage ? <DatingTab /> : <Tab />}
    </div>
  );
};

export default UploadPage;
