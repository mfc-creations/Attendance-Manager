import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { DatePicker } from "antd";
import firebase from "./firebase";
import "antd/dist/antd.css";
import Schedule from "./SetTime";
import "./Style.css";
import Spinner from "./common/spinner/Spinner";
const Attandence = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [times, setTimes] = useState(["10:30", "11:30"]);
  const [date, setDate] = useState();

  // const { batch, subject } = useContext(GlobalContext);
  const batch = localStorage.batch;
  const subject = localStorage.subject;
  function onChange(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    setDate(dateString);
  }

  useEffect(() => {
    setLoading(true);
    let ref = firebase.database().ref("attandence");
    ref.on("value", (snapshot) => {
      const stu = snapshot.val();
      console.log(stu);
      const stuList = [];
      const tm = [];
      for (let id in stu) {
        if (
          stu[id].date === date &&
          stu[id].batch === batch &&
          stu[id].subject === subject &&
          tm.indexOf(stu[id].time) === -1
        ) {
          tm.push(stu[id].time);
        }
      }

      for (let i in tm) {
        let s = {
          time: tm[i],
          students: [],
        };
        for (let id in stu) {
          if (
            stu[id].date === date &&
            stu[id].batch === batch &&
            stu[id].subject === subject &&
            stu[id].time === tm[i]
          ) {
            s.students.push(stu[id]);
          }
        }
        stuList.push(s);
      }
      setTimes(tm);
      setData(stuList);
      console.log(stuList);
      console.log(tm);
      setLoading(false);
    });
  }, [date]);

  function onOk(value) {
    console.log("onOk: ", value);
  }

  if (loading) {
    return (
      <div className="stu-loader">
        <Spinner />
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <div className="attandence-body">
        <span className="date-picker">
          <DatePicker onChange={onChange} onOk={onOk} />
        </span>
        <span className="stu-loader">Attendance not taken today</span>
      </div>
    );
  }

  return (
    <div className="attandence-body">
      <span className="date-picker">
        <DatePicker onChange={onChange} onOk={onOk} />
      </span>
      {/* {displayData} */}
      {data.map((item, index) => {
        return (
          <>
            <span className="time-title">{item.time}</span>
            {item.students.map((stu, i) => {
              return (
                <div key={index} className="list-tile">
                  <span className="first">
                    <span>{stu.name}</span>
                    <span>{stu.number}</span>
                  </span>
                  <img src={stu.photo} alt="" />
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default Attandence;
