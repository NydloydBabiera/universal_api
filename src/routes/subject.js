const express = require("express");
const { route } = require("..");
const router = express.Router();

const {
  addSubjectController,
  getAllSubjectsController,
  addSubjectScheduleController,
  getAllSubjectScheduleController,
  addStudentSubjectController,
  getStudentSubjectScheduleController,
} = require("../controller");

const makeExpressCallback = require("../express-callback");

router.post("/addSubject", makeExpressCallback(addSubjectController));
router.get("/getAllSubjects", makeExpressCallback(getAllSubjectsController));
router.post(
  "/addSubjectSchedule",
  makeExpressCallback(addSubjectScheduleController)
);
router.get(
  "/getAllSubjectScjedule",
  makeExpressCallback(getAllSubjectScheduleController)
);
router.post(
  "/addStudentSubjectSchedule",
  makeExpressCallback(addStudentSubjectController)
);
router.get(
  "/getStudentSubjectSchedule/:id",
  makeExpressCallback(getStudentSubjectScheduleController)
);

module.exports = router;
