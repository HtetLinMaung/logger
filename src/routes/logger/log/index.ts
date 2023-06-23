import { brewBlankExpressFunc } from "code-alchemy";
import { log } from "starless-logger";

export default brewBlankExpressFunc(async (req, res) => {
  log(req.body.message);
  res.json({
    code: 200,
    message: "Successful",
  });
});
