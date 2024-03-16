import React, { Children } from "react";
import { useNavigate } from "react-router-dom";

function NavEstadisticas({Children}) {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-sky-600 shadow  mb-5 mt-24 xl:flex xl:items-center xl:justify-center ">
        <div className="flex pt-3 items-center justify-center md:pb-0 md:gap-3 sm:pb-0 xl:p-3">
          {Children}
        </div>
      </nav>
    </>
  );
}

export default NavEstadisticas
