const DepartmentModel = require("../models/department.model");

// get all department list
exports.getDepartmentList = (req, res) => {
  //console.log('here all employees list');
  DepartmentModel.getAllDepartments((err, departments) => {
    console.log("We are here2");
    if (err) res.send(err);
    console.log("Departments:", departments);
    res.send(departments);
  });
};

// get employee by Name for earch by Name
exports.getDepartmentByName = (req, res) => {
  //console.log('get emp by id');
  DepartmentModel.getDepartmentByName(req.params.name, (err, department) => {
    if (err) res.send(err);
    console.log("single department data", department);
    res.send(department);
  });
};

// create new employee
exports.createNewDepartment = (req, res) => {
  const departmentReqData = new DepartmentModel(req.body);
  console.log("departmentReqData", departmentReqData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    DepartmentModel.createDepartment(departmentReqData, (err, department) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Department Created Successfully",
        data: department.insertId,
      });
    });
  }
};

// get employee by ID  for Update
exports.getDepartmentByID = (req, res) => {
  //console.log('get emp by id');
  DepartmentModel.getDepartmentByID(req.params.id, (err, department) => {
    if (err) res.send(err);
    console.log("single department data", department);
    // res.json({"first_name":"Dheeraj"});
    res.send(JSON.stringify({ status: 200, error: null, response: department }));
  });
};

// update employee
exports.updateDepartment = (req, res) => {
  const departmentReqData = new DepartmentModel(req.body);
  console.log("departmentReqData update", departmentReqData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    DepartmentModel.updateDepartment(
      req.params.id,
      departmentReqData,
      (err, department) => {
        if (err) res.send(err);
        res.json({ status: true, message: "Department updated Successfully" });
      }
    );
  }
};

// delete employee
exports.deleteDepartment = (req, res) => {
  DepartmentModel.deleteDepartment(req.params.id, (err, department) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Department deleted successully!" });
  });
};
