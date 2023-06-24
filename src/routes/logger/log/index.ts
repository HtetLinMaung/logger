import { brewBlankExpressFunc } from "code-alchemy";
import { log } from "starless-logger";
import fs from "fs/promises";
import path from "path";
import { logsFolderPath } from "../../../constants";

export default brewBlankExpressFunc(async (req, res) => {
  const { message, level } = req.body;
  const logMessage = log(message, level || "info", {
    timestampFormat: process.env.TIMESTAMP_FORMAT || "",
  });
  const data =
    typeof message == "string"
      ? `${logMessage} ${message}\n`
      : `${logMessage}\n${JSON.stringify(message, null, 2)}\n`;
  if (process.env.persistent_logging == "yes") {
    const filename = new Date().toISOString().split("T")[0] + ".log";
    fs.appendFile(path.join(logsFolderPath, filename), data).catch(
      console.error
    );
  }
  res.json({
    code: 200,
    message: "Successful",
    data,
  });
});
