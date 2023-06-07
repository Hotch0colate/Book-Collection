import React, { useEffect, useState } from "react";
import { getAllRequest, deleteRequest } from "../services/request";
import "../styles/Admin.css";
import Navbar from "../components/Navbar";

function Admin() {
  const [allRequest, setAllRequest] = useState([]);
    const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    getAllRequest().then((res) => {
      setAllRequest(res);
    });
  }, [isReload]);

  return (
    <>
        <Navbar/>
      <div className="mainbox">
        <table className="content-table">
          <thead>
            <tr>
              <th>Request</th>
              <th>URL Reference</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allRequest.length > 0 &&
              allRequest.map((request, index) => {
                return (
                  <tr key={index}>
                    <td>{request.request_description}</td>
                    <td>{request.url_ref}</td>
                    <button onClick={() => {
                        deleteRequest(request.url_ref, request.request_description)
                        .then((res) => {
                            switch (res?.status) {
                                case 200:
                                    setIsReload(!isReload);
                                    break;
                                case 404:
                                    alert("Request not found");
                                    break;
                                default:
                                    alert("Something went wrong");
                                    break;
                            }
                        })
                    }}>delete</button>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;
