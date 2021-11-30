import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function EditDetails() {
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams(); //The useParams() hook helps us to access the URL parameters from a current route.

  const [user, setUser] = useState({
    name: "",
    manager: "",
  });

  const { name, manager } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadDepartment();
  }, []);

  const updateDepartment = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/v1/department/${id}`, user);
    history.push("/");
  };

  const loadDepartment = () => {
    fetch(`http://localhost:5000/api/v1/department/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setUser({
          id: id,
          update: true,
          name: result.response[0].name,
          manager: result.response[0].manager,
        });
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
          <h4 className="text-center mb-4">Edit A department</h4>

          <h5 className="text-success">Department ID : {user.id} </h5>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Department Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Department Manager"
              name="manager"
              value={manager}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button
            onClick={updateDepartment}
            className="btn btn-secondary btn-block"
          >
            Update Department
          </button>
        </div>
      </div>
    </div>
  );
}
