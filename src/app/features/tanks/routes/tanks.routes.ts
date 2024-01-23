import { Router } from "express";
import { TanksController } from "../controllers/tanks.controllers";

export const tanksRoutes = () => {
  const app = Router({ mergeParams: true });
  app.post("/", new TanksController().createTanks);
  app.get("/", new TanksController().listTanks);
  app.put("/:id", new TanksController().update);
  app.delete("/:id", new TanksController().delete);

  return app;
};
