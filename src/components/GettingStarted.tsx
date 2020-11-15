import React, { Fragment, useState } from "react";
import Select from "react-select";
import styled from "styled-components";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const GettingStarted = () => {
  const [value, setValue] = useState("");

  const onChange = (item) => {
    setValue(item.value);
  };
  return (
    <Fragment>
      <SmallerSelect options={options} onChange={onChange} />
      <Text>{value}</Text>
    </Fragment>
  );
};

const SmallerSelect = styled(Select)`
  width: 30%;
  margin-left: 200px;
`;

const Text = styled.div`
  margin-left: 800px;
  margin-top: -30px;
`;
