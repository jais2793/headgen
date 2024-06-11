import dotenv from "dotenv";
import Stripe from "stripe";
import {
  sendMailToCustomer,
  sendMailToTeamsCustomer,
} from "../utils/nodeMailer.js";
import { uploadFile } from "../utils/cloudinary.js";
import { addUser, deleteUser, getUser } from "../utils/users.js";
import { addCustomer } from "./customersController.js";

dotenv.config();

const stripe = Stripe(process.env.SK_LIVE);

const stripeLinks = [
  {
    price: "$29",
    packName: "Starter Pack",
    generationType: "individual",
    id: "price_1PEOSUCvLjbx73iC6iPlOjjE",
  },
  {
    price: "$45",
    packName: "Basic Pack",
    generationType: "individual",
    id: "price_1PEOVdCvLjbx73iCqI7dZ56u",
  },
  {
    price: "$79",
    packName: "Premium Pack",
    generationType: "individual",
    id: "price_1PFDaeCvLjbx73iCUrwyssrf",
  },
  {
    price: "$50",
    packName: "Basic Pack",
    generationType: "customize",
    id: "price_1PIPJUCvLjbx73iCp8SeZtqQ",
  },
  {
    price: "$100",
    packName: "Premium Pack",
    generationType: "customize",
    id: "price_1PIPPFCvLjbx73iCZVm1aneS",
  },
  {
    price: "$200",
    packName: "Prompts Pack",
    generationType: "prompt",
    id: "price_1PIPRHCvLjbx73iCLKPZ6HFA",
  },
  {
    price: "$29",
    packName: "Starter Pack",
    generationType: "individualDating",
    id: "price_1PIPTLCvLjbx73iCuL3vSK3C",
  },
  {
    price: "$45",
    packName: "Basic Pack",
    generationType: "individualDating",
    id: "price_1PIPVtCvLjbx73iCk7hQ69Th",
  },
  {
    price: "$79",
    packName: "Premium Pack",
    generationType: "individualDating",
    id: "price_1PIPYECvLjbx73iCNVIghYST",
  },

  {
    price: "$50",
    packName: "Basic Pack",
    generationType: "datingCustomize",
    id: "price_1PIPbyCvLjbx73iCdKP949q4",
  },
  {
    price: "$100",
    packName: "Premium Pack",
    generationType: "datingCustomize",
    id: "price_1PIPdjCvLjbx73iCEY2BPlNi",
  },
  {
    price: "$200",
    packName: "Prompts Pack",
    generationType: "datingPrompt",
    id: "price_1PIPfOCvLjbx73iCtTf8toI0",
  },
];

export const checkout = async (req, res) => {
  // return
  console.log(req.body, "req.body");
  try {
    const selectedPlan = JSON.parse(req.body.selectedPlan);
    const generationType = req.body.generationType;
    const idx = stripeLinks.findIndex((e) => {
      return (
        e.price == selectedPlan.price && e.generationType === generationType
      );
    });

    let price = stripeLinks[idx].id;

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: `${price}`,
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: req.body.email,
      allow_promotion_codes: true,
      success_url: `${process.env.BASE_URL}/api/v1/payment/complete?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/api/v1/payment/cancel?sessionId={CHECKOUT_SESSION_ID}`,
    });

    const data = {
      body: JSON.stringify(req.body),
      files: JSON.stringify(req.files),
      sessionId: session.id,
      stripeLink: stripeLinks[idx],
    };

    const user = addUser(data);
    if (user.status) {
      res.status(200).json({
        sessionUrl: `${session.url}`,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const complete = async (req, res) => {

  const user = getUser(req.query.sessionId);
console.log(user)
  if (user.status) {
    // console.log(user?.user)
    const imgResult = await uploadFile(JSON.parse(user.user.files));
    await addCustomer(user?.user, imgResult?.result);
    if (imgResult) {
      await sendMailToCustomer(user.user, imgResult.result).catch(
        console.error
      );
      const result = deleteUser(req.query.sessionId);
      if (result) {
        console.log(user);
        const userBody = JSON.parse(user.user.body);
        const selectedPlan = JSON.parse(userBody.selectedPlan);
        res.render("payment-success", {
          type: "solo",
          email: userBody.email,
          gender: userBody.gender,
          amount: selectedPlan.price,
          packName: selectedPlan.packName,
          FRONTEND_URL: process.env.FRONTEND_URL,
        });

        // res.redirect(`${process.env.FRONTEND_URL}/success`);
      }
    } else {
      // const result = deleteUser(req.query.sessionId);

      res.render("payment-success", {
        type: "solo",
        userName: userName,
        amount: amount,
        transactionId: transactionId,
      });

      // res.redirect(`${process.env.FRONTEND_URL}/success`);
    }
  } else {
    const result = deleteUser(req.query.sessionId);
    res.send({
      status: false,
      message:
        "There's some error completing this process, kindly go back to main site",
    });
  }
};

export const cancel = (req, res) => {
  const result = deleteUser(req.query.sessionId);
  res.render("payment-failed", {
    FRONTEND_URL: process.env.FRONTEND_URL,
  });
  // res.redirect(`${process.env.FRONTEND_URL}/cancel`);
};

export const teamsCheckout = async (req, res) => {
  try {
    const teamsData = JSON.parse(req.body.teamsData);
    let price = Number(teamsData.price) * Number(teamsData.users);

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: `${price}`,
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: teamsData.email,
      allow_promotion_codes: true,
      success_url: `${process.env.BASE_URL}/api/v1/payment/teamscomplete?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/api/v1/payment/teamscancel?sessionId={CHECKOUT_SESSION_ID}`,
    });

    const data = {
      body: JSON.stringify(req.body),
      sessionId: session.id,
    };

    const user = addUser(data);
    if (user.status) {
      res.status(200).json({
        sessionUrl: `${session.url}`,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const teamsComplete = async (req, res) => {
  const user = getUser(req.query.sessionId);

  if (user.status) {
    await addCustomer(user?.user);
    if (imgResult) {
      await sendMailToTeamsCustomer(user.user).catch(console.error);
      const result = deleteUser(req.query.sessionId);
      if (result) {
        // console.log(user);
        const userBody = JSON.parse(user.user.body);
        const selectedPlan = JSON.parse(userBody.selectedPlan);
        res.render("payment-success", {
          type: "teams",
          email: userBody.email,
          gender: userBody.gender,
          amount: selectedPlan.price,
          packName: selectedPlan.packName,
          FRONTEND_URL: process.env.FRONTEND_URL,
        });

        // res.redirect(`${process.env.FRONTEND_URL}/success`);
      }
    } else {
      // const result = deleteUser(req.query.sessionId);

      res.render("payment-success", {
        type: "teams",
        userName: userName,
        amount: amount,
        transactionId: transactionId,
      });

      // res.redirect(`${process.env.FRONTEND_URL}/success`);
    }
  } else {
    const result = deleteUser(req.query.sessionId);
    res.send({
      status: false,
      message:
        "There's some issue completing this process, kindly go back to main site",
    });
  }
};

export const teamsCancel = (req, res) => {
  const result = deleteUser(req.query.sessionId);
  res.render("payment-failed", {
    FRONTEND_URL: process.env.FRONTEND_URL,
  });
  // res.redirect(`${process.env.FRONTEND_URL}/teamscancel`);

};
