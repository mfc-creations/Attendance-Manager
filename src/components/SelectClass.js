import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Select } from "antd";
import Image from "../assets/undraw_road_sign_mfpo.png";
import "./Style.css";
import Button from "./common/button/Button";
import Text from "./common/texts/Text";

const SelectBatch = () => {
  const [batch, setBatch] = useState("");

  const history = useHistory("");

  const { department, storeBatch } = useContext(GlobalContext);

  const { Option } = Select;

  function onChange(value) {
    setBatch(value);
  }

  const onNext = () => {
    storeBatch(batch);
    history.push("/subjects");
  };

  return (
    <div className="main-body">
      <img src={Image} alt="" className="bg-img" />
      <Text type="head-text" text="Select Batch" mb={24} mt={16} />
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select Batch"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value={`1st year ${department} A`}>
          1st year {department} A
        </Option>
        <Option value={`1st year ${department} B`}>
          1st year {department} B
        </Option>
        <Option value={`2nd year ${department} A`}>
          2nd year {department} A
        </Option>
        <Option value={`2nd year ${department} B`}>
          2nd year {department} B
        </Option>
        <Option value={`3rd year ${department} A`}>
          3rd year {department} A
        </Option>
        <Option value={`3rd year ${department} B`}>
          3rd year {department} B
        </Option>
        <Option value={`4th year ${department} A`}>
          4th year {department} A
        </Option>
        <Option value={`4th year ${department} B`}>
          4th year {department} B
        </Option>
      </Select>
      <Button
        text="Next"
        onPress={onNext}
        type="normal"
        active={batch.length > 0}
        mt={24}
      />
    </div>
  );
};

export default SelectBatch;
