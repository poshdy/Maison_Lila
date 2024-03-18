import express from "express";
import {
  OnCreateAnouncement,
  OnGetAnouncement,
  OnDeleteAnouncement,
  OnUpdateAnouncement,
} from "../controller/AnouncementController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";
const router = express.Router();

router.post("/", Roles(["MANAGER", "ADMIN"]), tryCatch(OnCreateAnouncement));

router.get("/", tryCatch(OnGetAnouncement));

// router.get("/:id", PathId, tryCatch(getAnouncement));

// router.patch(
//   "/publish/:id",
//   Roles(["MANAGER", "ADMIN"]),
//   PathId,
//   tryCatch(PublishAnouncement)
// );
router.patch(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(OnUpdateAnouncement)
);
router.delete(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(OnDeleteAnouncement)
);

export default router;
