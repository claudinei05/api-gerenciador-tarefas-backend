import { Request, Response } from "express";
import { CreateUserCase } from "../usecase/create-user.usecase";
//import { ErrorServer } from "../../../shared/erros/server.error";

//import { LoginUserUsecase } from "../usecases/login-user.usecase";

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
      //return ErrorServer.errorServerProcessing(res, error);
      return res.status(500).send({
        ok: false,
        message: error.toString("Internal Serve Error"),
      });
    }
  }
}
