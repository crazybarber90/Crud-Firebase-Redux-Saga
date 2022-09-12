import React, { useState, useEffect } from "react";
import firebaseDb from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const ListRecord = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        snapshot({});
      }
    });
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure wanted to delete this record ?")) {
      firebaseDb.child(`contacts/${id}`).remove((err) => {
        console.log(err);
      });
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="jumbotron">
            <h2 className="display-2">Contact Managment System</h2>
          </div>
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Email</th>
                <th scope="col">Addres</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((id, index) => {
                return (
                  <tr key={id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data[id].name}</td>
                    <td>{data[id].mobile}</td>
                    <td>{data[id].email}</td>
                    <td>{data[id].address}</td>
                    <td>
                      <Link to={`/update${id}`}>
                        <a className="btn text-primary">
                          <i className="fas fa-pencil-alt" />
                        </a>
                      </Link>
                      <a
                        className="btn text-danger"
                        onClick={() => onDelete(id)}
                      >
                        <i className="fas fa-trash-alt" />
                      </a>
                      <a className="btn text-info">
                        <i className="fas fa-eye" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListRecord;
