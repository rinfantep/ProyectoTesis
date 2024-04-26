import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const App = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <Datepicker startWeekOn="mon" value={value} onChange={handleValueChange} />
  );
};
export default App;
