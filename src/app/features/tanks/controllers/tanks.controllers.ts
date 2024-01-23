import { Request, Response } from "express";
import { createTanksUsecaseFactory } from "../util/create-tanks-usecase.factory";
import { UpdateTanksUsecase } from "../usecase/update-tank-usecase";
import { DeleteTanksUsecase } from "../usecase/deletar-tanks.usecase";
import { ListTanksUsecase } from "../usecase/list-tanks.usecase";

export class TanksController {
  public async createTanks(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      let { description, detailing } = req.body;

      const usecase = createTanksUsecaseFactory();
      const result = await usecase.execute({ userId, description, detailing });
      return res.status(result.code).send(result);
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString("Internal Serve Error"),
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { tanksId } = req.params;
      const { description, detailing } = req.body;

      const usecase = new UpdateTanksUsecase();
      const result = await usecase.execute({
        tanksId,
        description,
        detailing,
      });

      return res.status(result.code).send(result);
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString("Internal Serve Error"),
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id, idUser } = req.params;

      const usecase = new DeleteTanksUsecase();
      const result = await usecase.execute({
        id,
        idUser,
      });

      return res.status(result.code).send(result);
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString("Internal Serve Error"),
      });
    }
  }
  public async listTanks(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      const usecase = new ListTanksUsecase();
      const result = await usecase.execute({
        userId,
      });

      return res.status(result.code).send(result);
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }
}
