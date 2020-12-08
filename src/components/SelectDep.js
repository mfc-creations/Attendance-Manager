import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Select } from "antd";
import Image from "../assets/undraw_Selection_re_poer.png";
import "./Style.css";
import Button from "./common/button/Button";
import Text from "./common/texts/Text";

const SelectDep = () => {
  const [dep, setDep] = useState("");

  const history = useHistory("");

  const { storeDepartment } = useContext(GlobalContext);

  const { Option } = Select;

  function onChange(value) {
    setDep(value);
  }

  const onNext = () => {
    storeDepartment(dep);
    history.push("/batches");
  };

  return (
    <div className="main-body">
      <img src={Image} alt="" className="bg-img" />
      <Text type="head-text" text="Select Department" mb={24} mt={16} />
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select Department"
        optionFilterProp="children"
        onChange={onChange}
        // onFocus={onFocus}
        // onBlur={onBlur}
        // onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="Mech">Mechanical Engineering</Option>
        <Option value="IT">Information Technology</Option>
        <Option value="CS">Computer Science Engineering</Option>
        <Option value="SF">Safety and Fire Engineering</Option>
        <Option value="EEE">Electrical and Elctronical Engineering</Option>
        <Option value="ECE">Electrical and Communication Engineering</Option>
        <Option value="Civil">Civil Engineering</Option>
      </Select>
      <Button
        text="Next"
        onPress={onNext}
        type="normal"
        active={dep.length > 0}
        mt={24}
      />
    </div>
  );
};

export default SelectDep;
