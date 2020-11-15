import React, { Fragment, useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import { colourOptions } from "../features/data";

export const MultiSelect = () => {
  let arra: string[] = [];
  let arr: string[] = [];
  const [value, setValue] = useState(arra);

  const onChange = (item) => {
    if (item != null) {
      let i;
      if (item.length != null) {
        for (i = 0; i < item.length; i++) {
          arr.push(item[i].value);
        }
        setValue(arr);
      }
    } else {
      setValue([]);
    }
  };

  return (
    <Fragment>
      <SmallerSelect
        defaultValue={[colourOptions[2], colourOptions[3]]}
        isMulti
        name="colors"
        options={colourOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={onChange}
      />
      {value.map((i) => (
        <Text>{i}</Text>
      ))}
    </Fragment>
  );
};

const SmallerSelect = styled(Select)`
  width: 30%;
  margin-left: 200px;
`;

const Text = styled.div`
  margin-left: 800px;
  margin-top: -40px;
`;
