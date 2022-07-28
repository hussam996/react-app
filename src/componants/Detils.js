import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const Detils = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  console.log("id: ", id);

  return (
    <div className="detils">
      <img
        className="image"
        src="https://t4.ftcdn.net/jpg/00/97/00/09/360_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg"
      />

      <p>Power:</p>
      <p>Description:</p>
    </div>
  );
};

export default Detils;
