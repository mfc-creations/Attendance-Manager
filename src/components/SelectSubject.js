import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Select } from "antd";
import Image from "../assets/sub.jpg";
import "./Style.css";
import Button from "./common/button/Button";
import Text from "./common/texts/Text";
import Navbar from "./Navbar/Navbar";

const SelectSubject = () => {
  const [subject, setSubject] = useState("");

  const history = useHistory("");

  const { department, storeSubject } = useContext(GlobalContext);

  const { Option } = Select;

  function onChange(value) {
    setSubject(value);
  }

  const onNext = () => {
    storeSubject(subject);
    localStorage.subject = subject;
    history.push("/attendance");
  };

  return (
    <>
      <Navbar stuIcon={true} />

      <div className="main-body">
        <img src={Image} alt="" className="bg-img" />
        <Text type="head-text" text="Select Subject" mb={24} mt={16} />
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select Subject"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value={"Pinciples of Mangement"}>
            Pinciples of Mangement
          </Option>
          <Option value="Mobile Computing">Mobile Computing</Option>
          <Option value="Operation Research">Operation Research</Option>
          <Option value="Computer Graphics">Computer Graphics</Option>
          <Option value="Internet of Things">Internet of Things</Option>
          <Option value="Enterpreunership Development">
            Enterpreunership Development
          </Option>
        </Select>
        <Button
          text="Next"
          onPress={onNext}
          type="normal"
          active={subject.length > 0}
          mt={24}
        />
      </div>
    </>
  );
};

export default SelectSubject;
