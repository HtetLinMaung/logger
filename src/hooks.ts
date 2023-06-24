import fs from "fs";
import { logsFolderPath } from "./constants";

export const afterMasterProcessStart = async () => {
  if (!fs.existsSync(logsFolderPath)) {
    fs.mkdirSync(logsFolderPath);
  }
};
