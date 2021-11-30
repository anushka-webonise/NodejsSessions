import { useLocation } from "react-router";
import "./homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Homepage() {

    const [search, setSearch] = useState("");
    const [record, setRecord] = useState([]);

    const [user, setUser] = useState({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      salary: "",
    });

    //  Object Destructuring
    const { fname, lname, email, phone, salary } = user;
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

    // On Page load display all records
    const loadEmployeeDetail = async () => {
      var response = fetch("http://localhost:5000/api/v1/employee")
        .then(function (response) {
          console.log("load all employees");
          return response.json();
        })
        .then(function (myJson) {
          setRecord(myJson);
        });
    };
    useEffect(() => {
      loadEmployeeDetail();
    }, []);

    // Insert Employee Records
    const submitEmployeeRecord= async (e) => {
         e.preventDefault();
         await axios.post(`http://localhost:5000/api/v1/employee/create`, user);
         //history.push("/");
       };
    //   console.log(user);
    //    axios.post("http://localhost:5000/api/v1/employee", user);
    //   //alert("Data Inserted");
      
    //   loadEmployeeDetail();
    // };

    // Search Records here
    const searchRecords = () => {
      alert(search);
      axios
        .get(`http://localhost:5000/api/v1/employee/searchRecord/${search}`)
        .then((response) => {
          setRecord(response.data);
        });
    };

    // Delete Employee Record
    const deleteRecord = (Id) => {
      axios
        .delete(`http://localhost:5000/api/v1/employee/${Id}`)
        .then((result) => {
          loadEmployeeDetail();
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
                <form onSubmit={submitEmployeeRecord}>
                  <h5 className="mb-3 ">Insert Employee Records</h5>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control  mb-4"
                      name="fname"
                      value={fname}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter name"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control  mb-4"
                      name="lname"
                      value={lname}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter last name"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mb-4"
                      name="email"
                      value={email}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Email"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mb-4"
                      name="phone"
                      value={phone}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter phone"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mb-2"
                      name="salary"
                      value={salary}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter salary"
                      required=""
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-block mt-4"
                    onClick={submitEmployeeRecord}
                  >
                    Insert Record
                  </button>
                </form>
              </div>
            </div> */}
            <div class="viewrecemp">
              <h5 class="text-center  ml-4 mt-4  mb-5">View Records</h5>
              <div class="input-group mb-4 mt-3">
                <div class="form-outline">
                  <input
                    type="text"
                    id="form1"
                    onChange={(e) => setSearch(e.target.value)}
                    class="form-control"
                    placeholder="Search Employee Here"
                    style={{ backgroundColor: "#ececec" }}
                  />
                </div>
                <button
                  type="button"
                  onClick={searchRecords}
                  class="btn btn-success"
                >
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
              <table class="table table-hover  table-striped table-bordered ml-4 ">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {record.map((name) => (
                    <tr>
                      <td>{name.first_name}</td>
                      <td>{name.last_name}</td>
                      <td>{name.email}</td>
                      <td>{name.phone}</td>
                      <td>{name.salary}</td>
                      <td>
                        <a
                          className="text-danger mr-2"
                          onClick={() => {
                            const confirmBox = window.confirm(
                              "Do you really want to delete " + name.first_name
                            );
                            if (confirmBox === true) {
                              deleteRecord(name.id);
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
                          to={`/EditEmployee/editID/${name.id}`}
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

            <div class="insertrecemp">
              <div
                className="box p-3 mb-3 mt-5"
                style={{ border: "1px solid #d0d0d0" }}
              >
                <form onSubmit={submitEmployeeRecord}>
                  <h5 className="mb-3 ">Insert Employee Records</h5>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control  mb-4"
                      name="fname"
                      value={fname}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter name"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control  mb-4"
                      name="lname"
                      value={lname}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter last name"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mb-4"
                      name="email"
                      value={email}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Email"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mb-4"
                      name="phone"
                      value={phone}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter phone"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mb-2"
                      name="salary"
                      value={salary}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter salary"
                      required=""
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-block mt-4"
                    onClick={submitEmployeeRecord}
                  >
                    Insert Record
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  
}
