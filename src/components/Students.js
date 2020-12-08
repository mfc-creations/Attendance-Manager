import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import firebase from "./firebase";
import { useHistory, Link } from "react-router-dom";
import "./Style.css";
import Spinner from "./common/spinner/Spinner";

const Students = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const history = useHistory("");

  const { batch } = useContext(GlobalContext);

  useEffect(() => {
    setLoading(true);
    let ref = firebase.database().ref("Students");
    ref.on("value", (snapshot) => {
      const stu = snapshot.val();
      const stuList = [];
      for (let id in stu) {
        if (stu[id].batch === batch) stuList.push(stu[id]);
      }
      setData(stuList);
      console.log(stuList);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <div className="stu-loader">
        <Spinner />
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <span className="stu-loader">
        No students
        <Link className="fab" to="/addstudents">
          +
        </Link>
      </span>
    );
  }
  return (
    <div>
      {/* onClick={history.push("/addstudents")} */}
      {data.map((item, index) => {
        return (
          <div key={index} className="list-tile">
            <span className="first">
              <span>{item.Name}</span>
              <span>{item.number}</span>
            </span>
            <img src={item.photo} alt="" />
          </div>
        );
      })}
      <Link className="fab" to="/addstudents">
        +
      </Link>
    </div>
  );
};

export default Students;
