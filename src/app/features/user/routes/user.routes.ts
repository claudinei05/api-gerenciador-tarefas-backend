import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { CreateUserValidator } from "../validatores/create-user-validator";
import { LoginUserValidator } from "../validatores/login.validator";
import { tanksRoutes } from "../../tanks/routes/tanks.routes";

export const userRoutes = () => {
  const app = Router();
  app.post(
    "/createaccount",
    CreateUserValidator.userValidate,
    new userController().createUser
  );
  app.post(
    "/login",
    LoginUserValidator.loginValidator,
    new userController().loginUser
  );

  app.use("/:userId/tanks", tanksRoutes());

  return app;
};
