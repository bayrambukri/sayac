import React, { useState } from "react";

const Sayac = () => {
  const [sayac, setSayac] = useState(0);

  return (
    <div className="Sayac">
      <h1 className="text-4xl">SAYAÇ</h1>
      <button
        className="bg-blue-400 p-3 text- rounded-lg text-2xl mr mr-5 "
        onClick={() => {
          setSayac(sayac + 1);
        }}
      >
        Arttır
      </button>
      <span className="text-2xl">{sayac}</span>
      <button
        className="bg-red-700 rounded-lg p-3 text-white text-2xl	m-5"
        onClick={() => {
          setSayac(sayac - 1);
        }}
      >
        Azalt
      </button>
      <button
        className="bg-yellow-400 rounded-full p-4 text-2xl"
        onClick={() => {
          setSayac(0);
        }}
      >
        Sıfırla
      </button>
    </div>
  );
};

export default Sayac;
