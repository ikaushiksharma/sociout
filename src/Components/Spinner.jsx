import React from "react";
import { Circles } from "react-loader-spinner";

function Spinner({ message }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Circles color="#fff700" height={50} width={200} className="m-5" />

      <p className="px-2 text-lg dark:text-gray-300 text-center">{message}</p>
    </div>
  );
}

export default Spinner;
