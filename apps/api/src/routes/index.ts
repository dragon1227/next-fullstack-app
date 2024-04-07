import { getWorkspaces } from "@app/utils";
import { Router } from "express";

const router = Router();

router.get("/workspaces", (req, res) => {
  const workspaces = getWorkspaces()
  res.json({data: workspaces})
});

export {router as rootRouter}