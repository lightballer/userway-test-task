import express from "express";
import routes from "./routes";

const SHUTDOWN_TIMEOUT = process.env.SHUTDOWN_TIMEOUT || 500;

const app = express();

app.use(express.json());

for (const route of routes) {
  app.use(route);
}

const cleanup = () => {
  // db.close().then(() => process.exit());

  setTimeout(function () {
    console.error("Could not close connections in time, forcing shut down");
    process.exit(1);
  }, +SHUTDOWN_TIMEOUT);
};

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

export default app;
