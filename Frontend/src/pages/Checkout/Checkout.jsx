import React, { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const handleCheckout = () => {
    let formData = new FormData();

    formData.append("photos", photos);
    formData.append("email", "jai@pearlorganisation.com");

    setIsLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}/payment/checkout`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setIsLoading(false);
        console.log(response.data.session);
        window.location.href = response.data.sessionUrl;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const addPhotos = (e) => {
    setPhotos(e.target.files);
  };

  return (
    <div className="h-[500px] flex flex-col justify-center items-center gap-4">
      {isLoading && (
        <div className="text-2xl text-white ">
          Redirecting to stripe gateway
        </div>
      )}

      <input type="file" multiple onChange={addPhotos} />

      <button
        className="bg-white w-[200px] font-semibold rounded-lg hover:bg-[#f1f1f1]"
        onClick={handleCheckout}
      >
        Test Stripe
      </button>
    </div>
  );
};

export default Checkout;
