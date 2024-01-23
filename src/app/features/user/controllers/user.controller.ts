import { Request, Response } from "express";
import { CreateUserCase } from "../usecase/create-user.usecase";
import { LoginUserUsecase } from "../usecase/login-user.usecase";

export class userController {
  public async createUser(req: Request, res: Response) {
    try {
      const { name, user, password, confirmPassword } = req.body;

      const usecase = new CreateUserCase();
      const result = await usecase.execute({
        name,
        user,
        password,
        confirmPassword,
      });
      return res.status(result.code).send(result);
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString("Internal Serve Error"),
      });
    }
  }
  public async loginUser(req: Request, res: Response) {
    try {
      const { user, password } = req.body;

      const usecase = new LoginUserUsecase();
      const result = await usecase.execute({
        user,
        password,
      });
      return res.status(result.code).send(result);
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString("Internal Serve Error"),
      });
    }
  }
}
