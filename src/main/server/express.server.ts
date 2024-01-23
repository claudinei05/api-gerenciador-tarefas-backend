import { createApp } from "../config/express.config";
import { serverEnv } from "../../app/envs/server.env";

export class Server {
  public static run() {
    const app = createApp();
    app.listen(serverEnv.port, () => console.log("Server is running"));
  }
}
