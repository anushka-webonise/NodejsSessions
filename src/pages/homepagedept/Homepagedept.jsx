import { useLocation } from "react-router";
import "./homepagedept.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Homepagedept() {
  const [search, setSearch] = useState("");
  const [record, setRecord] = useState([]);

  const [user, setUser] = useState({
    name: "",
    manager: "",
  });

  //  Object Destructuring
  const { name, manager } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // On Page load display all records
  const loadDepartmentDetail = async () => {
    var response = fetch("http://localhost:5000/api/v1/department")
      .then(function (response) {
        console.log("load all departments");
        return response.json();
      })
      .then(function (myJson) {
        setRecord(myJson);
      });
  };
  useEffect(() => {
    loadDepartmentDetail();
  }, []);

  // Insert Employee Records
  const submitDepartmentRecord = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/v1/department/create`, user);
    //history.push("/");
  };
  //   console.log(user);
  //    axios.post("http://localhost:5000/api/v1/employee", user);
  //   //alert("Data Inserted");

  //   loadEmployeeDetail();
  // };

  // Search Records here
  const searchDepartmentRecords = () => {
    alert(search);
    axios
      .get(`http://localhost:5000/api/v1/department/searchRecord/${search}`)
      .then((response) => {
        setRecord(response.data);
      });
  };

  // Delete Employee Record
  const deleteDepartmentRecord = (Id) => {
    axios
      .delete(`http://localhost:5000/api/v1/employee/${Id}`)
      .then((result) => {
        loadDepartmentDetail();
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };

  return (
    <section>
      <div class="container">
        <div class="row mt-3">
          {/* <div class="col-sm-4">
            <div
              className="box p-3 mb-3 mt-5"
              style={{ border: "1px solid #d0d0d0" }}
            >
              <form onSubmit={submitDepartmentRecord}>
                <h5 className="mb-3 ">Insert Department Records</h5>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-4"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter name"
                    required=""
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-4"
                    name="manager"
                    value={manager}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter manager"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-block mt-4"
                  onClick={submitDepartmentRecord}
                >
                  Insert Record of Department
                </button>
              </form>
            </div>
          </div> */}
          <div class="viewrecdept">
            <h5 class="text-center  ml-4 mt-4  mb-5">View Records</h5>
            <div class="input-group mb-4 mt-3">
              <div class="form-outline">
                <input
                  type="text"
                  id="form1"
                  onChange={(e) => setSearch(e.target.value)}
                  class="form-control"
                  placeholder="Search Department Here"
                  style={{ backgroundColor: "#ececec" }}
                />
              </div>
              <button
                type="button"
                onClick={searchDepartmentRecords}
                class="btn btn-success"
              >
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
            <table class="table table-hover  table-striped table-bordered ml-4 ">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Manager</th>
                </tr>
              </thead>
              <tbody>
                {record.map((rname) => (
                  <tr>
                    <td>{rname.name}</td>
                    <td>{rname.manager}</td>
                    <td>
                      <a
                        className="text-danger mr-2"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to delete " + rname.name
                          );
                          if (confirmBox === true) {
                            deleteDepartmentRecord(rname.id);
                          }
                        }}
                      >
                        {" delete"}
                        <i
                          class="far fa-trash-alt"
                          style={{ fontSize: "18px", marginRight: "5px" }}
                        ></i>{" "}
                      </a>

                      <Link
                        class=" mr-2"
                        to={`/EditDepartment/editID/${rname.id}`}
                      >
                        {" "}
                        Edit
                        <i class="fa fa-edit" aria-hidden="true"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <br />
          <div class="inserrecdept">
            <div
              className="box p-3 mb-3 mt-5"
              style={{ border: "1px solid #d0d0d0" }}
            >
              <form onSubmit={submitDepartmentRecord}>
                <h5 className="mb-3 ">Insert Department Records</h5>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-4"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter name"
                    required=""
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-4"
                    name="manager"
                    value={manager}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter manager"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-block mt-4"
                  onClick={submitDepartmentRecord}
                >
                  Insert Record of Department
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
