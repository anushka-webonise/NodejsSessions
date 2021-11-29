const express = require("express");
const routerdept = express.Router();

const departmentController = require("../controllers/department.controller");

// get all employees
routerdept.get("/", departmentController.getDepartmentList);

// get employee by ID
routerdept.get("/:id", departmentController.getDepartmentByID);

// get ID for Update
routerdept.get("/searchRecord/:first_name", departmentController.getDepartmentByName);

// create new employee
routerdept.post("/create", departmentController.createNewDepartment);

// update employee
routerdept.put("/:id", departmentController.updateDepartment);

// delete employee
routerdept.delete("/:id", departmentController.deleteDepartment);

// update department information

module.exports = routerdept;
