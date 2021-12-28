import { Router } from "express";

const router = Router();

router.post("/email", (req, res) => {
  res.send("email");
});

export default router;
