import React from "react";
import { useNavigate } from "react-router-dom";

function NavItem({nombre}) {
  const navigate = useNavigate();
  return (
    <>
      <div
        //onClick={() => navigate({dirLink})}
        className="ml-5 text-neutral-900 hover:text-neutral-400 cursor-pointer text-xs md:text-lg sm:ml-0"
      >
        {nombre}
      </div>
    </>
  );
}

export default NavItem