import React, { useEffect } from "react";
import { useState } from "react";

const Syntax = () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  useEffect(() => {
    console.log("in useEffect");
    return () => {
      console.log("in useEffect CleanUp");
    };
  }, [checkBoxValue]);
  return <div></div>;
};

export default Syntax;
