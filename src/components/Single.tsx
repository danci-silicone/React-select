import React, { Fragment, useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import { colourOptions } from "../features/data";
import { Note } from "../features/styled-components";

const Checkbox = (props) => <input type="checkbox" {...props} />;

type State = {
  isClearable: boolean;
  isDisabled: boolean;
  isLoading: boolean;
  isRtl: boolean;
  isSearchable: boolean;
};

export const SingleSelect = (props: State) => {
  const [value, setValue] = useState("");
  const [state, setState] = useState({
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
  });

  const toggleClearable = () =>
    setState({
      isClearable: !state.isClearable,
      isDisabled: isDisabled,
      isLoading: isLoading,
      isRtl: isRtl,
      isSearchable: isSearchable,
    });

  const toggleDisabled = () =>
    setState({
      isClearable: isClearable,
      isDisabled: !state.isDisabled,
      isLoading: isLoading,
      isRtl: isRtl,
      isSearchable: isSearchable,
    });

  const toggleLoading = () =>
    setState({
      isClearable: isClearable,
      isDisabled: isDisabled,
      isLoading: !state.isLoading,
      isRtl: isRtl,
      isSearchable: isSearchable,
    });

  const toggleRtl = () =>
    setState({
      isClearable: isClearable,
      isDisabled: isDisabled,
      isLoading: isLoading,
      isRtl: !state.isRtl,
      isSearchable: isSearchable,
    });

  const toggleSearchable = () =>
    setState({
      isClearable: isClearable,
      isDisabled: isDisabled,
      isLoading: isLoading,
      isRtl: isRtl,
      isSearchable: !state.isSearchable,
    });

  const onChange = (item) => {
    if (item != null) {
      setValue(item.value);
    }
  };

  const { isClearable, isSearchable, isDisabled, isLoading, isRtl } = state;

  return (
    <Fragment>
      <SmallerSelect
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={colourOptions}
        onChange={onChange}
      />
      <Note Tag="label">
        <Checkbox
          checked={isClearable}
          onChange={toggleClearable}
          id="cypress-single__clearable-checkbox"
        />
        Clearable
      </Note>
      <Note Tag="label" style={{ marginLeft: "1em" }}>
        <Checkbox
          checked={isSearchable}
          onChange={toggleSearchable}
          id="cypress-single__searchable-checkbox"
        />
        Searchable
      </Note>
      <Note Tag="label" style={{ marginLeft: "1em" }}>
        <Checkbox
          checked={isDisabled}
          onChange={toggleDisabled}
          id="cypress-single__disabled-checkbox"
        />
        Disabled
      </Note>
      <Note Tag="label" style={{ marginLeft: "1em" }}>
        <Checkbox
          checked={isLoading}
          onChange={toggleLoading}
          id="cypress-single__loading-checkbox"
        />
        Loading
      </Note>

      <Note Tag="label" style={{ marginLeft: "1em" }}>
        <Checkbox
          type="checkbox"
          checked={isRtl}
          onChange={toggleRtl}
          id="cypress-single__rtl-checkbox"
        />
        RTL
      </Note>
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
  margin-top: -60px;
`;
