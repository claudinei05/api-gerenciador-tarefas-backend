import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositores/user.repository";

export class CreateUserValidator {
  public static async userValidate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { name, user, password, confirmPassword } = req.body;

      if (
        name === "" ||
        user === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        return {
          ok: false,
          message: "Fill in the fields (preencha os campos)",
          code: 400,
        };
      }
      if (password.length < 5 || confirmPassword.length < 5) {
        return {
          ok: false,
          message:
            " Password needs at least 5 characters (A senha precisa de pelo menos 5 caracteres)",
          code: 404,
        };
      }
      if (user.length < 5) {
        return {
          ok: false,
          message:
            " The user needs at least 5 characters (O usuário precisa de pelo menos 5 caracteres)",
          code: 404,
        };
      }

      if (password !== confirmPassword) {
        return {
          ok: false,
          message: " Password does not match(Senha não confere)",
          code: 404,
        };
      }

      next();
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString("Internal Serve Error"),
      });
    }
  }
}
