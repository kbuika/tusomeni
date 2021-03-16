// import React from "react";
// import styled from "styled-components";
// import { breakpoints } from "../../Media";
// import { colors } from "../../resources/ThemeColors";
// import Select from "react-select";
// import CreatableSelect from "react-select/creatable";

// const MainDiv = styled.div`
//   height: 100%;
//   width: 30%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const customStyles = {
//   menu: (provided, state) => ({
//     ...provided,
//     width: state.selectProps.width,
//     borderBottom: "1px dotted pink",
//     color: "black",
//     padding: 20,
//     backgroundColor: "black",
//   }),

//   control: (_, { selectProps: { width } }) => ({
//     width: width,
//   }),

//   singleValue: (provided, state) => {
//     //   const opacity = state.isDisabled ? 0.5 : 1;
//     //   const transition = 'opacity 300ms';

//     return { ...provided };
//   },
// };

// var yearOfStudyOptions = [{ value: "Select an year of study", label: null }];

// export default function Filter() {
//   return (
//     // <MainDiv>
//     <Select options={yearOfStudyOptions} />
//     // </MainDiv>
//   );
// }

import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

var options = [
  { value: null, label: "Select year of study" },
  { value: "FIRST", label: "First year" },
  { value: "SECOND", label: "Second year" },
  { value: "THIRD", label: "Third year" },
  { value: "FOURTH", label: "Fourth year" },
];

export default function AnimatedMulti({ onSearch }) {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={options[0]}
      label="select year of study"
      options={options}
      onChange={onSearch}
    />
  );
}
