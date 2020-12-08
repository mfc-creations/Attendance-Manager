import React from "react";
import firebase from "./firebase";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import "./Style.css";
const SetTime = ({ batch, subject }) => {
  function onChange(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    const db = firebase.database().ref("Time");
    const data = {
      time: dateString,
      batch,
      subject,
    };
    db.push(data);
  }

  function onOk(value) {
    console.log("onOk: ", value);
  }

  return (
    <div className="schedule-body">
      <span>Attandence not taken yet</span>
      <span className="schedule-text">Schedule to take attandence</span>
      <DatePicker showTime onChange={onChange} onOk={onOk} />
    </div>
  );
};

export default SetTime;
