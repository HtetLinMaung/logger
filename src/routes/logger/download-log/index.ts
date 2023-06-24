import { brewBlankExpressFunc } from "code-alchemy";
import fs from "fs/promises";
import path from "path";
import { logsFolderPath } from "../../../constants";

export default brewBlankExpressFunc(async (req, res) => {
  const { date } = req.query;
  res.download(path.join(logsFolderPath, `${date}.log`));
});
