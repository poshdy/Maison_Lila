import express from "express";
import {
  OnCreateZone,
  OnDeleteZone,
  OnGetZone,
  OnGetZones,
  OnUpdateZone,
} from "../controller/ZoneController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";

const router = express.Router();

router.post("/", Roles(["MANAGER", "ADMIN"]), tryCatch(OnCreateZone));
router.get("/", tryCatch(OnGetZones));
router.get("/:id", PathId, tryCatch(OnGetZone));
router.patch(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(OnUpdateZone)
);
router.delete(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(OnDeleteZone)
);

export default router;
