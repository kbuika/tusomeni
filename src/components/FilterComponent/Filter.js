import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

var options = [
  { value: null, label: "Show All" },
  { value: "FIRST", label: "First year" },
  { value: "SECOND", label: "Second year" },
  { value: "THIRD", label: "Third year" },
  { value: "FOURTH", label: "Fourth year" },
];

export default function AnimatedMulti({ onSearch }) {
  return (
    <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      defaultValue={options[0]}
      label="select year of study"
      options={options}
      onChange={onSearch}
    />
  );
}
