"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_connection_1 = require("./main/database/typeorm.connection");
const express_server_1 = require("./main/server/express.server");
typeorm_connection_1.TypeormConnection.init().then(() => express_server_1.Server.run());
