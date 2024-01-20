import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { CreateUserValidator } from "../validatores/create-user-validator";

export const userRoutes = () => {
  const app = Router();
  app.post(
    "/createaccount",
    CreateUserValidator.userValidate,
    new userController().createUser
  );
  return app;
};
