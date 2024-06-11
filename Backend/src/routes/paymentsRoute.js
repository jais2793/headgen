import express from "express";
import { checkout, complete, cancel, teamsCheckout, teamsCancel, teamsComplete } from "../controller/paymentsController.js";
import { upload } from "../utils/multer.js";

const paymentsRouter = express.Router();
paymentsRouter.route("/checkout").post(upload.array("images"),checkout);
paymentsRouter.route("/teamscheckout").post(teamsCheckout);
paymentsRouter.route("/complete").get(complete);
paymentsRouter.route("/cancel").get(cancel); 

paymentsRouter.route("/teamscomplete").get(teamsComplete);
paymentsRouter.route("/teamscancel").get(teamsCancel); 


export default paymentsRouter;
