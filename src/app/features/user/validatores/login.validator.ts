import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositores/user.repository";

export class LoginUserValidator {
  public static async loginValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { user, password } = req.body;
      const database = new UserRepository();
      const result = await database.login(user, password);
      if (!result) {
        return res.status(401).send({
          ok: false,
          message: "Invalid credentials (Credenciais inválidas)",
        });
      }
      next();
    } catch (error) {
      return res.status(500).send({
        ok: false,
        message: "Internal Serve Error",
      });
    }
  }
}
