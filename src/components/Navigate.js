import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Navigate = () => {
  let navigate = useNavigate(); 
 
  const navigateToContact = () => {
    let path = `Contact`; 
    navigate(path);
  };
  return (
    <>
      <div>
        <button onClick={navigateToContact}>Contact</button>
      </div>
      <Outlet />
    </>
  );
};

export default Navigate;