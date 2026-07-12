import "./env.js";
import { createServer } from "http";
import { initSocket } from "./services/notificationService.js";
import connectdb from "./config/db.js";
import app from "./app.js";
import errorHandler from "./middleware/errorHandler.js";
import logger from "./config/logger.js";

const PORT = process.env.PORT || 3000;
const server = createServer(app);

connectdb();
initSocket(server);

app.use(errorHandler);

server.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT}`);
});