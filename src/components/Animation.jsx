// @flow

import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { colourOptions } from "../features/data";
import styled from "styled-components";

const animatedComponents = makeAnimated();

export const AnimatedMulti = () => {
  return (
    <SmallerSelect
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
};

const SmallerSelect = styled(Select)`
  width: 30%;
  margin-left: 200px;
`;
