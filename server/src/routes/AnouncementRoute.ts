import express from "express";
import {
  PublishAnouncement,
  addAnouncement,
  deleteAnouncement,
  getAnouncement,
  getAnouncements,
  updateAnouncement,
  getPublishedAnoun,
} from "../controller/AnouncementController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";
const router = express.Router();

router.post("/", Roles(["MANAGER", "ADMIN"]), tryCatch(addAnouncement));
router.get("/published", tryCatch(getPublishedAnoun));
router.get("/", tryCatch(getAnouncements));
router.get("/:id", PathId, tryCatch(getAnouncement));
router.patch(
  "/publish/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(PublishAnouncement)
);
router.patch(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(updateAnouncement)
);
router.delete(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(deleteAnouncement)
);

export default router;
