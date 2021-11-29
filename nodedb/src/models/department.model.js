var dbConn = require("../../config/db.config");

var Department = function (department) {
  this.id = department.id;
  this.name = department.name;
  this.manager = department.manager;
};

// get all employees
Department.getAllDepartments = (result) => {
  dbConn.query("SELECT * FROM departments order by id", (err, res) => {
    if (err) {
      console.log("Error while fetching departments", err);
      result(null, err);
    } else {
      console.log("Departments fetched successfully");
      result(null, res);
    }
  });
};

// get employee by Name for Search Data by name
Department.getDepartmentByName = (name, result) => {
  dbConn.query(
    "SELECT * FROM departments WHERE name=?",
    name,
    (err, res) => {
      if (err) {
        console.log("Error while fetching department by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// create new employee
Department.createDepartment = (departmentReqData, result) => {
  dbConn.query(
    "INSERT INTO departments VALUES ?",
    departmentReqData,
    (err, res) => {
      if (err) {
        console.log("Error while inserting data");
        result(null, err);
      } else {
        console.log("Department created successfully");
        result(null, res);
      }
    }
  );
};

// get employee by ID for update
Department.getDepartmentByID = (id, result) => {
  dbConn.query("SELECT * FROM departments WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching department by id", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// update employee
Department.updateDepartment = (id, departmentReqData, result) => {
  dbConn.query(
    "UPDATE departments SET name=?,manager=? WHERE id = ?",
    [
      departmentReqData.name,
      departmentReqData.manager,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the department");
        result(null, err);
      } else {
        console.log("Department updated successfully");
        result(null, res);
      }
    }
  );
};

// delete employee
Department.deleteDepartment = (id, result) => {
  dbConn.query("DELETE FROM departments WHERE id=?", [id], (err, res) => {
    if (err) {
      console.log("Error while deleting the department");
      result(null, err);
    } else {
      result(null, res);
    }
  });
  // dbConn.query("UPDATE employees SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
  //     if(err){
  //         console.log('Error while deleting the employee');
  //         result(null, err);
  //     }else{
  //         console.log("Employee deleted successfully");
  //         result(null, res);
  //     }
  // });
};

module.exports = Department;
