import { customersModel } from "../model/customersModel.js";

export const addCustomer = async (userData, images) => {
  try {
    const data = JSON.parse(userData.body);
    let filteredImgUrls = images.map((item) => {
      return item.url;
    });
    // console.log(filteredImgUrls);
    let customerData = {
      email: data.email,
      gender: data.gender,
      images: filteredImgUrls,
      packDetails: JSON.parse(data.selectedPlan),
      generationType: data.generationType,
    };

    switch (data.generationType) {
      case "individual":
        customerData.headshotType = data.headshotType;
        break;
      case "customize":
        customerData.customizeData = data.customizeData;
        break;
      case "prompt":
        customerData.promptData = data.promptData;
        break;
      case "individualDating":
        customerData.headshotType = data.headshotType;
        break;
      case "datingCustomize":
        customerData.customizeData = data.customizeData;
        break;
      case "datingPrompt":
        customerData.promptData = data.promptData;
        break;
    }

    const customer = new customersModel(customerData);
    const result = await customer.save();
    if (result) {
      return { status: true, result: result };
    }
  } catch (error) {
    console.error(error);
    return { status: false, message: error.message };
  }
};
