const express = require("express");
const employeeController = require("../controllers/employee.controller");

const router = express.Router();

router.get("/", employeeController.findAll);
router.post("/", employeeController.create);
router.get("/:id", employeeController.findById);
router.put("/:id", employeeController.update);
router.delete("/:id", employeeController.delete);

module.exports = router;
