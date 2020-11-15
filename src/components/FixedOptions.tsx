import React, { Fragment, useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import { colourOptions } from "../features/data";

type State = {
  value: string;
};

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
};

const orderOptions = (values) => {
  return values
    .filter((v) => v.isFixed)
    .concat(values.filter((v) => !v.isFixed));
};

export const FixedOptions = (props: State) => {
  let arra: string[] = [];
  let arr: string[] = [];
  const [array, setArray] = useState(arra);
  const [state, setState] = useState({
    value: orderOptions([colourOptions[0], colourOptions[1], colourOptions[3]]),
  });

  const onChange = (value, { action, removedValue }) => {
    fillArray(value);

    switch (action) {
      case "remove-value":
      case "pop-value":
        if (removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        value = colourOptions.filter((v) => v.isFixed);
        break;
    }
    value = orderOptions(value);
    console.log("Value 2: " + value);
    setState({ value: value });
  };

  const fillArray = (value) => {
    let i;
    for (i = 0; i < numOfObjects(value); i++) {
      arr.push(value[i].value);
    }
    setArray(arr);
  };

  const numOfObjects = (object) => {
    var length = 0;
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        ++length;
      }
    }
    return length;
  };

  return (
    <Fragment>
      <SmallerSelect
        value={state.value}
        isMulti
        styles={styles}
        isClearable={state.value.some((v) => !v.isFixed)}
        name="colors"
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={onChange}
        options={colourOptions}
      />
      {array.map((i) => (
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
