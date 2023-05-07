import React, { useState } from "react";

export const Practice = () => {
  const [data, setData] = useState({ Name: "amit", age: 33 });

  const update = () => {
    const newData = { ...data };
    newData.Name = "saurabh";
    setData(newData);
  };
  return (
    <div>
      <span>{JSON.stringify(data)}</span>
      <button onClick={update}>update</button>
    </div>
  );
};
