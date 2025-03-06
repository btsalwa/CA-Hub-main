import React from "react";
import SymposiumHero from "./SymposiumHero";
import SymposiumObjectives from "./SymposiumObjectives";
import SymposiumRegistration from "./SymposiumRegistration";
import SymposiumProgram from "./SymposiumProgram";

const Symposium = () => {
  return (
    <div className="w-full bg-white">
      <SymposiumHero />
      <SymposiumObjectives />
      <SymposiumProgram />
      <SymposiumRegistration />
    </div>
  );
};

export default Symposium;
