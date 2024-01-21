import express from "express";
import {
  addZone,
  getZone,
  deleteZone,
  updateZone,
  getZones,
} from "../controller/ZoneController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";

const router = express.Router();

router.post("/", Roles(["MANAGER", "ADMIN"]), tryCatch(addZone));
router.get("/", tryCatch(getZones));
router.get("/:id", PathId, tryCatch(getZone));
router.patch("/:id", Roles(["MANAGER", "ADMIN"]), PathId, tryCatch(updateZone));
router.delete(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(deleteZone)
);

export default router;
